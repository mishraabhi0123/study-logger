import { createContext, useEffect, useState } from "react"
import { MODEL } from "../../constants"
import { create, update, remove, findByPk, findAll } from "../model"

const SubjectContext = createContext(null)
export default SubjectContext

export const withSubjectContext = (Component) => (props) => {
	const [subjects, setSubjects] = useState([])

	useEffect(() => {
		const subs = getSubjects()
		setSubjects(subs)
	}, [])

	function createSubject(Subject) {
		const subs = create(MODEL.SUBJECT, Subject)
		console.log({ subs })
		setSubjects(subs)
		return subs
	}

	function updateSubject(id, Subject) {
		const subs = update(MODEL.SUBJECT, id, Subject)
		setSubjects(subs)
		return subs
	}

	function deleteSubject(id) {
		const subs = remove(MODEL.SUBJECT, id)
		setSubjects(subs)
		return subs
	}

	function getSubjects(startDate, endDate) {
		return findAll(MODEL.SUBJECT)
	}

	function getSubject(id) {
		return findByPk(MODEL.SUBJECT, id);
	}

	return (
		<SubjectContext.Provider
			value={{
				createSubject,
				updateSubject,
				deleteSubject,
				getSubjects,
				getSubject,
				subjects
			}}
		>
			<Component {...props} />
		</SubjectContext.Provider>
	)
}