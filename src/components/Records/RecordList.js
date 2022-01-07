import React, { useEffect, useMemo, useRef, useState } from 'react'
import moment from 'moment-timezone';
import "../../style/index.css"
import DataTable from 'react-data-table-component';



export default function RecordList() {
	const [n, setN] = useState(7);
	let records = useMemo(() => JSON.parse(window.localStorage.getItem("records")) || [], []);
	let filteredRecords = useRef([]);

	useEffect(() => {
		filteredRecords.current = records.filter((record) => {
			return moment(record.createdAt) < moment().add(1, 'day') && moment(record.createdAt) > moment().subtract(n, 'days')
		})
	}, [n, records])

	const columns = [
		{
			name: "Date",
			selector: "date",
			width: "100px",
			sortable: true,
			cell: (row) => moment(row.date).format("MMMM Do YYYY")
		},
		{
			name: 'Subject',
			selector: 'subject',
			width: '100px',
		},
		{
			name: 'Hours',
			selector: 'hour',
			width: '90px',
			sortable: true,
		},
		{
			name: 'Minutes',
			selector: 'minutes',
			width: '90px',
			sortable: true,
		}
	]

	return (
		<>
			<div style={{ textAlign: "center", display: "flex-box" }}>
				<pre>Displaying records of last</pre>
				<input
					type="number"
					value={n}
					onChange={(e) => setN(e.target.value)}
				/>
				<pre>{n > 1 ? "days" : "day"}</pre>
			</div>
			<div>
				<DataTable
					columns={columns}
					noHeader={true}
					defaultSortFieldId='name'
					dense
					defaultSortAsc={true}
					pagination={true}
					data={records}
					paginationRowsPerPageOptions={[10, 30, records?.length]}
				/>
			</div>
		</>
	)
}
