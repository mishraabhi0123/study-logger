import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';

export default function SubjectList() {
	let [subjects, setSubjects] = useState([])
	useEffect(() => {
		let subs = JSON.parse(window.localStorage.getItem("subjects")) || [];
		setSubjects(subs);
	}, [subjects])
	return (
		<div>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{subjects.length ? <div>
					{
						subjects.map((sub) => {
							return (
								<div style={{
									display: "flex",
									justifyContent: "space-around",
								}}>
									<h4> {sub.name} </h4>
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

								</div>
							)
						})
					}
				</div> :
					<div>

					</div>
				}
			</List>
		</div>
	)
}
