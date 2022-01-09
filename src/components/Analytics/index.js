import React, { useContext, useEffect, useState } from 'react';
import RecordContext from '../../context/record';

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
import { TextField, Typography } from '@material-ui/core';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);


function Analytics({ graphType = "LINE" }) {
	const [data, setData] = useState([]);
	const [n, setN] = useState(7);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: `Displaying analytics of last ${n} days`,
			},
		}
	};

	const { getAnalyticsData } = useContext(RecordContext)

	useEffect(() => {
		const { data } = getAnalyticsData(n)
		console.log(data)
		setData(data)
	}, [n, graphType])
	return (
		<div style={{ padding: 30 }}>
			<Line options={options} data={data} />
			<div className="flex middle" style={{ justifyContent: "center", padding: 20 }}>
				<Typography variant="h5"> Show data of last</Typography>
				<TextField
					type="number"
					variant="outlined"
					value={n}
					defaultValue={n}
					style={{ width: "60px", margin: "0px 20px" }}
					label="N"
					onChange={(e) => setN(e.target.value)}
				/>
				<Typography variant="h5"> {n > 1 ? "days" : "day"}</Typography>
			</div>
		</div>
	)
}

export default Analytics