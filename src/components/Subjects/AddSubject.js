import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';

function createSubject({ name, colour }) {
	const sub = {
		id: (new Date()).getTime(),
		name,
		colour
	}

	let subjects = JSON.parse(window.localStorage.getItem('subjects')) || [];
	subjects.push(sub)
	window.localStorage.setItem('subjects', JSON.stringify(subjects))
}

export default function AddSubject() {
	const [name, setName] = useState("")
	const [colour, setColour] = useState("#ffffff")

	return (
		<div>
			<div style={{ textAlign: 'center' }}>
				<h3>Subjects</h3>
				<div style={{ display: "flex", justifyContent: "space-evenly" }}>
					<TextField id="outlined-basic" value={name} label="Subject Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
					<input
						type="color"
						onChange={(e) => setColour(e.target.value)}
						style={{
							height: 55,
							width: 55,
							margin: 0
						}}
						value={colour}
					/>
				</div>
				<Button
					variant="contained"
					style={{
						width: "50%",
						marginTop: 10,
						backgroundColor: "green"
					}}
					onClick={(e) => {
						createSubject({ name, colour })
					}}
					disabled={!name || !colour}
				>
					Add
				</Button>
			</div>
		</div>
	)
}
