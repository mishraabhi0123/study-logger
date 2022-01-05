import React, { useEffect, useMemo, useRef, useState } from 'react'
import moment from 'moment-timezone';
import "../../style/index.css"


export default function RecordList() {
	const [n, setN] = useState(7);
	let records = useMemo(() => JSON.parse(window.localStorage.getItem("records")) || [], []);
	console.log({ records })
	let filteredRecords = useRef([]);

	useEffect(() => {
		filteredRecords.current = records.filter((record) => {
			return moment(record.createdAt) < moment().add(1, 'day') && moment(record.createdAt) > moment().subtract(n, 'days')
		})
	}, [n, records])

	return (
		<>
			<div style={{ textAlign: "center", display: "flex-box" }}>
				<pre>Displaying records of last</pre>
				<input
					type="number"
					value={n}
					onChange={(e) => setN(e.target.value)}
					style={{
						height: "10px",
						width: "10px",
						marginTop: 15,
						marginLeft: 5,
						marginRight: 5
					}}
				/>
				<pre>{n > 1 ? "days" : "day"}</pre>
			</div >
			<div>
				{
					records.map(({ hour, minutes, subject, createdAt, date, id }, i) => {
						return (
							<div className="strip" key={id}>
								<pre>{`${i + 1}) ${subject} - ${Number(hour) ? (Number(hour) > 0 ? `${Number(hour)} hours` : `${Number(hour)} hour`) : ""} ${Number(minutes) ? (Number(minutes) > 0 ? `${Number(minutes)} minutes` : `${Number(minutes)} minute`) : ""}`}</pre>
							</div>
						)
					})
				}
			</div>
		</>
	)
}
