import { createContext } from "react"
import { MODEL } from "../../constants"
import { create, update, remove, findByPk, findAll } from "../model"

const RecordContext = createContext(null)
export default RecordContext

export const withContext = (Component) => (props) => {
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
		return findAll(MODEL.RECORD, {
			date: [startDate, endDate]
		})
	}

	function getRecord(id) {
		return findByPk(MODEL.RECORD, id);
	}

	return (
		<RecordContext.Provider
			value={{
				createRecord,
				updateRecord,
				deleteRecord,
				getRecords,
				getRecord,
			}}
		>
			<Component {...props} />
		</RecordContext.Provider>
	)
}