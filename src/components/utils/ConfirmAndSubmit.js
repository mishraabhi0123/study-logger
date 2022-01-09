import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import React, { useState } from 'react'

export default function ConfirmAndSubmit({
	onSubmit,
	onCancel,
	Title,
	alertTitle,
	ButtonComponent,
	label = "Submit",
	message = "Are you sure, you want to proceed?",
	confirmLabel = "Yes, proceed",
	cancelLabel = "Cancel",
	...props
}) {
	const [showAlert, setShowAlert] = useState(false)
	const [clickEvent, setClickEvent] = useState(null)

	function onDismiss() {
		setShowAlert(false)
		if (onCancel) onCancel()
	}

	function onSuccess() {
		onSubmit(clickEvent)
		setShowAlert(false)
	}

	return (
		<div>
			<Dialog
				open={showAlert}
				onClose={() => setShowAlert(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth='sm'
			>

				{alertTitle && <DialogTitle id="alert-dialog-title">{alertTitle}</DialogTitle>}
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{message}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={onDismiss} color="primary">
						{cancelLabel}
					</Button>
					<Button onClick={onSuccess} color="secondary" variant="contained" autoFocus>
						{confirmLabel}
					</Button>
				</DialogActions>

			</Dialog>
			{
				ButtonComponent ? <ButtonComponent onClick={(e) => {
					setClickEvent(e)
					setShowAlert(true)
				}} /> :
					<Button
						variant="contained"
						{...props}
						onClick={() => setShowAlert(true)}
					>
						{label}
					</Button>
			}
		</div>
	)
}
