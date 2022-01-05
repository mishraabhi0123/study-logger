import { Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button } from '@mui/material';


import React, { useState } from 'react'
const moment = require("moment-timezone");

export default function RecordForm() {
	const [subject, setSubject] = useState(null);
	const [date, setDate] = useState(moment().format());
	const [hour, setHour] = useState(0);
	const [minutes, setMinutes] = useState(0);

	const subjects = JSON.parse(window.localStorage.getItem("subjects")) || [];
	return (
		<div>
			<br />
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
					console.log({ date, subject, hour, minutes })
				}}
				disabled={!date || !subject || (!hour && !minutes)}
			>
				Add
			</Button>

		</div>
	)
}
