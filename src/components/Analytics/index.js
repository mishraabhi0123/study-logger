import React, { useContext, useEffect, useState } from 'react';
import RecordContext, { withRecordContext } from '../../context/record';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);


function Analytics({ n, graphType = "LINE" }) {
	const [data, setData] = useState([]);
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: "Rupal's Study Analytics",
			},
		},
	};

	const { getAnalyticsData } = useContext(RecordContext)

	useEffect(() => {
		const { data } = getAnalyticsData(n)
		setData(data)
	}, [n, graphType])
	return (
		<Line options={options} data={data} />
	)
}

export default withRecordContext(Analytics)