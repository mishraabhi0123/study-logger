import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Subjects from '../components/Subjects';
import RecordForm from '../components/Records/RecordForm';
import TestRouter from './tests';
import RecordList from '../components/Records/RecordList';

const history = createBrowserHistory();

const AppRouter = () => {
	return (
		<Router history={history}>
			<main>
				<Suspense>
					<Routes>
						<Route path="/subjects" element={<Subjects />} />
						<Route path="/records" element={<RecordForm />} />
						<Route path="/tests" element={<TestRouter />} />
						<Route path="/" element={< RecordList />} />
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
}
export default AppRouter;