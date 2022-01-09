import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

export default function Notifier({ message, setMessage, severity }) {
	return (
		<div>
			<Snackbar open={message?.length} autoHideDuration={2000} onClose={() => setMessage(null)}>
				<Alert severity={severity} sx={{ width: '100%' }}>
					{message}
				</Alert>
			</Snackbar>
		</div>
	)
}
