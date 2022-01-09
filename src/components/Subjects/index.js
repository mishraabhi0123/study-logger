import React from 'react'
import SubjectForm from "./SubjectForm"
import SubjectList from "./SubjectList"

export default function Index() {
	return (
		<div style={{ maxWidth: 350 }}>
			<SubjectForm onSave={(data) => console.log(data)} />
			<SubjectList />
		</div>
	)
}
