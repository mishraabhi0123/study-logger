import React, { useContext, useReducer, useState } from 'react'
import RecordContext, { withRecordContext } from "../../context/record"
import moment from "moment-timezone"
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import SubjectContext, { withSubjectContext } from '../../context/subject'
import Notifier from '../utils/Notifier'

const initialFormData = {
	subject: '',
	date: moment().format('DD-MM-YYYY'),
	hours: '',
	minutes: ''
}

const reducer = (state, newState) => {
	return {
		...state,
		...newState
	}
}

function RecordForm() {
	const [message, setMessage] = useState("")
	const { createRecord } = useContext(RecordContext)
	const { subjects } = useContext(SubjectContext)

	const [record, dispatchRecord] = useReducer(reducer, initialFormData)

	return (
		<div style={{ padding: 15 }}>
			<Typography variant="h4" style={{ padding: 15, paddingLeft: 0 }}> Study Records </Typography>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<TextField
						type="date"
						view={["month", "year"]}
						variant="outlined"
						fullWidth
						label="Date"
						defaultValue={moment().format("yyyy-MM-DD")}
						onChange={(e) => dispatchRecord({ ...record, date: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12}>
					<Autocomplete
						disablePortal
						id="combo-box-demo"
						options={subjects}
						getOptionLabel={subject => subject.name}
						getOptionSelected={subject => subject.name}
						sx={{ width: 300 }}
						onChange={(e, subject) => {
							dispatchRecord({ ...record, subject: subject.name })
						}}
						renderInput={(params) =>
							<TextField
								{...params}
								type="text"
								variant="outlined"
								label="Subject Name"
								fullWidth
							/>}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						type="number"
						variant="outlined"
						label="Hours"
						fullWidth
						onChange={(e) => dispatchRecord({ ...record, hours: e.target.value })}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						type="number"
						variant="outlined"
						label="Minutes"
						fullWidth
						onChange={(e) => dispatchRecord({ ...record, minutes: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						variant="contained"
						fullWidth
						label="Subject Name"
						color="primary"
						// disabled={!(name !== null && colour !== "#ffffff")}
						onClick={() => {
							const data = createRecord(record)
							if (data) {
								setMessage("Record created successfully.")
							}
						}}
					>Create</Button>
				</Grid>
				<Notifier message={message} setMessage={setMessage} severity={"success"} />
			</Grid>
		</div >
	)
}

export default withSubjectContext(withRecordContext(RecordForm))