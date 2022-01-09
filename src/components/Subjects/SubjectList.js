import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import SubjectContext from '../../context/subject';
import { Typography } from '@material-ui/core';
import ConfirmAndSubmit from '../utils/ConfirmAndSubmit'



function SubjectList() {
	const { subjects, deleteSubject } = useContext(SubjectContext)

	return (
		<div style={{ padding: 10, height: "60vh", overflowY: "scroll" }}>
			<div>
				{
					subjects.sort((a, b) => b.id - a.id).map((sub) => {
						return (
							<div
								id={sub.id}
								key={sub.id}
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: 10,
									margin: 5,
									borderBottom: `1px solid #cccccc`,
									borderLeft: `2px solid ${sub.colour}`,
									borderRight: `2px solid ${sub.colour}`
								}}>
								<Typography variant="h6" > {sub.name} </Typography>

								<ConfirmAndSubmit
									onSubmit={(e) => {
										console.log(e.target.parentElement.id)
										deleteSubject(e.target.parentElement.id)
									}}
									color='secondary'
									ButtonComponent={(props) =>
										<DeleteIcon id={sub.id} style={{ margin: 5, color: "gray" }} {...props} />
									}
								/>
							</div>
						)
					})
				}
			</div>
			{!subjects?.length && <div style={{ textAlign: "center" }}>
				Subjects that you add will be listed here.
			</div>}
		</div >
	)
}

export default SubjectList