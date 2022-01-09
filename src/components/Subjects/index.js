import React from 'react'
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

export default Index;