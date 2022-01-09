import { Button } from '@material-ui/core'
import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Home() {
	let navigate = useNavigate()
	return (
		<div style={{ position: "relative", top: "50px", textAlign: "center" }}>
			<div>
				<Button variant="outlined" onClick={() => navigate("/analytics")}>Analytics</Button>
				<Button variant="outlined" onClick={() => navigate("/records")}>Records</Button>
				<Button variant="outlined" onClick={() => navigate("/subjects")}>Subjects</Button>
			</div>
		</div >
	)
}
