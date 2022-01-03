import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Subjects from '../components/Subjects';

const history = createBrowserHistory();

const AppRouter = () => {
	return (
		<Router history={history}>
			<main>
				<Suspense>
					<Routes>
						<Route path="/subjects" element={<Subjects />} />
						<Route path="/" />
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
}
export default AppRouter;