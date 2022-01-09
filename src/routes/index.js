import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Subjects from '../components/Subjects';
import RecordForm from '../components/Records/RecordForm';
// import RecordList from '../components/Records/RecordList';
import Analytics from '../components/Analytics';

const history = createBrowserHistory();

const AppRouter = () => {
	return (
		<Router history={history}>
			<main>
				<Suspense>
					<Routes>
						<Route path="/subjects" element={<Subjects />} />
						<Route path="/records" element={<RecordForm />} />
						<Route path="/" element={< Subjects />} />
						<Route path="/analytics" element={< Analytics n={15} />} />
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
}
export default AppRouter;