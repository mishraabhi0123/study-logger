import React, { useContext, useState } from 'react'
import { Grid, Button, TextField } from "@material-ui/core"
import SubjectContext, { withSubjectContext } from "../../context/subject"
import "./subject.css"

function SubjectForm({ onSave, initialValues }) {
	const [name, setName] = useState(null)
	const [colour, setColour] = useState("#ffffff")
	const { createSubject } = useContext(SubjectContext)
	return (
		<div style={{ padding: 20 }}>
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<TextField
						variant="outlined"
						fullWidth
						label="Subject Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						type="color"
						variant="outlined"
						fullWidth
						onChange={(e) => setColour(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						variant="contained"
						fullWidth
						label="Subject Name"
						color="primary"
						disabled={!(name !== null && colour !== "#ffffff")}
						onClick={() => createSubject({ name, colour })}
					>Create</Button>
				</Grid>
			</Grid>
		</div>
	)
}

export default withSubjectContext(SubjectForm)