import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


export default function SubjectList() {
	let [subjects, setSubjects] = useState([])

	function handleDelete(e) {
		const deleteId = e.target.parentElement.parentElement.id
		console.log({ deleteId })
		let subs = subjects.filter(({ id }) => Number(id) !== Number(deleteId))
		console.log({ subs })

		setSubjects(subs);
		window.localStorage.setItem("subjects", JSON.stringify(subs));
	}

	useEffect(() => {
		let subs = JSON.parse(window.localStorage.getItem("subjects")) || [];
		if (subs.length) {
			subs.sort((a, b) => b.id - a.id)
		}
		setSubjects(subs);
	}, [])
	return (
		<div style={{ overflowY: "scroll", height: 300, marginTop: 30, borderRadius: "5px" }}>
			{subjects.length ?
				<div>
					{
						subjects.map((sub) => {
							return (
								<div
									id={sub.id}
									key={sub.id}
									style={{
										display: "flex",
										justifyContent: "space-between",
									}}>
									<h4 style={{ paddingLeft: 20 }}> {sub.name} </h4>
									<div
										style={{
											position: "relative",
											top: 7,
											height: 30,
											width: 30,
											borderRadius: 100,
											margin: 10,
											backgroundColor: sub.colour
										}}
									></div>
									<DeleteIcon style={{ position: "relative", top: 10, padding: 10, color: "gray" }}
										onClick={(e) => handleDelete(e)}
									/>
								</div>
							)
						})
					}
				</div> :
				<div style={{ textAlign: "center" }}>
					Subjects that you add will be listed here.
				</div>
			}
		</div >
	)
}
