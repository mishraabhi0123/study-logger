import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Subjects from '../components/Subjects';
// import RecordList from '../components/Records/RecordList';
import Analytics from '../components/Analytics';
import Home from "../components/Home"
import Record from '../components/Records';
import { withRecordContext } from '../context/record';
import { withSubjectContext } from '../context/subject';

const history = createBrowserHistory();

const AppRouter = () => {
	return (
		<Router history={history}>
			<main>
				<Suspense>
					<Routes>
						<Route path="/subjects" element={<Subjects />} />
						<Route path="/records" element={<Record />} />
						<Route path="/analytics" element={< Analytics />} />
						<Route path="/" element={< Home />} />
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
}
export default withSubjectContext(withRecordContext(AppRouter));