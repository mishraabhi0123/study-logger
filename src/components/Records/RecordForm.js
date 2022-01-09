// import { Autocomplete } from '@material-ui/core'
// import TextField from '@material-ui/core/TextField';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import { Button } from '@material-ui/core';

import React, { useState } from 'react'
// const moment = require("moment-timezone");

// function createRecord(record) {
// 	const records = JSON.parse(window.localStorage.getItem("records")) || [];
// 	record = {
// 		id: (new Date()).getTime(),
// 		createdAt: moment().format(),
// 		...record
// 	}
// 	records.push(record);
// 	window.localStorage.setItem("records", JSON.stringify(records));
// }

export default function RecordForm() {
	// const [subject, setSubject] = useState(null);
	// const [date, setDate] = useState(moment().format());
	// const [hour, setHour] = useState(0);
	// const [minutes, setMinutes] = useState(0);

	// const subjects = JSON.parse(window.localStorage.getItem("subjects")) || [];
	return (
		<div>
			{/* <br />
			<h1 style={{ textAlign: "center" }}>Record study hours</h1>
			<br />
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<MobileDatePicker
					label="Select Date"
					views={['day', 'month', 'year']}
					value={date}
					onChange={(newValue) => {
						setDate(newValue);
					}}
					style={{ margin: 20 }}
					renderInput={(params) => <TextField {...params} style={{ width: '98%', paddingBottom: 20 }} />}
				/>
			</LocalizationProvider>

			<Autocomplete
				disablePortal
				id="combo-box-demo"
				options={subjects.map(sub => sub.name)}
				value={subject}
				onChange={(event, value) => setSubject(value)}
				sx={{ width: "100%" }}
				renderInput={(params) => <TextField {...params} label="Select Subject" style={{ width: '98%', paddingBottom: 20 }} />}
			/>

			<TextField label="Hours" type="number" value={hour} style={{ width: '98%', paddingBottom: 20 }} onChange={(e) => setHour(e.target.value)} />
			<TextField label="Minutes" type="number" value={minutes} style={{ width: '98%', paddingBottom: 20 }} onChange={(e) => setMinutes(e.target.value)} />
			<Button
				variant="contained"
				style={{
					width: "100%",
					marginTop: 10,
					backgroundColor: "green"
				}}
				onClick={(e) => {
					createRecord({ date, subject, hour, minutes })
					setSubject("")
					setHour(0)
					setMinutes(0)
				}}
				disabled={!date || !subject || !(hour || minutes)}
			>
				Add
			</Button> */}

		</div>
	)
}
