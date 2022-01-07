import { createContext } from "react"
import { MODEL } from "../../constants"
import { create, update, remove, findByPk, findAll } from "../model"

const Context = createContext(null)
export default Context

export const withContext = (Component) => (props) => {
	function createSubject(Subject) {
		return create(MODEL.SUBJECT, Subject)
	}

	function updateSubject(id, Subject) {
		return update(MODEL.SUBJECT, id, Subject)
	}

	function deleteSubject(id) {
		return remove(MODEL.SUBJECT, id)
	}

	function getSubjects(startDate, endDate) {
		return findAll(MODEL.SUBJECT)
	}

	function getSubject(id) {
		return findByPk(MODEL.SUBJECT, id);
	}

	return (
		<Context.Provider
			value={{
				createSubject,
				updateSubject,
				deleteSubject,
				getSubjects,
				getSubject,
			}}
		>
			<Component {...props} />
		</Context.Provider>
	)
}