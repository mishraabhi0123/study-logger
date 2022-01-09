import React from 'react'
import { withSubjectContext } from '../../context/subject'
import SubjectForm from "./SubjectForm"
import SubjectList from "./SubjectList"

function Index() {
	return (
		<div style={{ maxWidth: 350 }}>
			<SubjectForm />
			<SubjectList />
		</div>
	)
}

export default withSubjectContext(Index);