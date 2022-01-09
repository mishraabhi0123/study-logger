import { createContext } from "react"
import { MODEL } from "../../constants"
import { create, update, remove, findByPk, findAll } from "../model"
import moment from "moment-timezone"

const RecordContext = createContext(null)
export default RecordContext

export const withRecordContext = (Component) => (props) => {
	function createRecord(record) {
		return create(MODEL.RECORD, record)
	}

	function updateRecord(id, record) {
		return update(MODEL.RECORD, id, record)
	}

	function deleteRecord(id) {
		return remove(MODEL.RECORD, id)
	}

	function getRecords(startDate, endDate) {
		if (!endDate) return findAll(MODEL.RECORD, { date: startDate })
		return findAll(MODEL.RECORD, {
			date: [startDate, endDate]
		})
	}

	function getRecord(id) {
		return findByPk(MODEL.RECORD, id);
	}

	function datesBetweenRange(startDate, endDate) {
		const dates = [];
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		for (let date = moment(startDate); date <= moment(endDate); date = moment(date).add(1, 'day')) {
			dates.push({
				date: moment(date).format("DD-MMM-YYYY"),
				day: days[moment(date).day()]
			})
		}
		return dates;
	}

	function getAnalyticsData(lastNdays) {
		const n = lastNdays;
		const startDate = moment().subtract(n, 'day').format()
		const endDate = moment().format()
		let records = getRecords(startDate, endDate)

		const dates = datesBetweenRange(startDate, endDate);
		const subjects = findAll(MODEL.SUBJECT)
		const dateSubjectsHourMap = new Map()
		dates.forEach(({ date }) => {
			const filteredRecords = records.filter(record => moment(record.date).valueOf() === moment(date).valueOf())
			filteredRecords.forEach(({ subject, hours, minutes }) => {
				hours = Number(hours)
				minutes = Number(minutes)
				const timeData = dateSubjectsHourMap.get(`${date}-${subject}`)
				if (!timeData) {
					dateSubjectsHourMap.set(`${date}-${subject}`, [hours, minutes])
				} else {
					const [h, m] = timeData
					dateSubjectsHourMap.set(`${date}-${subject}`, [hours + Number(h) + parseInt((minutes + Number(m)) / 60), (minutes + Number(m)) % 60])
				}
			})
		})


		const labels = dates.map(({ date }) => date);
		const data = {
			labels,
			datasets: subjects.map(({ name, colour }) => {
				return {
					label: name,
					data: dates.map(({ date }) => {
						const timeData = dateSubjectsHourMap.get(`${date}-${name}`)
						if (!timeData) { return 0 }
						return Number((Number(timeData[0]) + Number(timeData[1]) / 60).toFixed(2))
					}),
					borderColor: colour,
					backgroundColor: "rgba(255, 99, 132, 0.5)",
					lineTension: 0.2,
				}
			})
		}

		return { data };
	}

	return (
		<RecordContext.Provider
			value={{
				createRecord,
				updateRecord,
				deleteRecord,
				getRecords,
				getRecord,
				getAnalyticsData,
			}}
		>
			<Component {...props} />
		</RecordContext.Provider>
	)
}