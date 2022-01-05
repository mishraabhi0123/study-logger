import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Subjects from '../components/Subjects';
import AddSubject from '../components/Subjects/AddSubject';
import SubjectList from '../components/Subjects/SubjectList';
import RecordForm from '../components/Records/RecordForm';

const history = createBrowserHistory();

const TestRouter = () => {
	return (
		<Router history={history}>
			<main>
				<Suspense>
					<Routes>
						<Route path="/tests/record-form" element={<RecordForm />} />
						<Route path="/tests/add-subject" element={<AddSubject />} />
						<Route path="/tests/subject-list" element={<SubjectList />} />
						<Route path="/tests/subjects" element={<Subjects />} />
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
}
export default TestRouter;