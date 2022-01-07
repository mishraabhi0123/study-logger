import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function DenseTable({ rows }) {
	const columns = []
	Object.entries(rows[0]).forEach(([key, value]) => columns.push(key))
	console.log({ columns })
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						{columns.map((col) => {
							return (
								<TableCell align="left">{col}</TableCell>
							)
						})}
					</TableRow>
				</TableHead>

				<TableBody>
					{rows.map((row) => {
						return <>
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								{columns.map((col) => {
									return (
										<TableCell align="left">{row[col]}</TableCell>
									)
								})}
							</TableRow>
						</>
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
