import { useEffect, useState } from 'react'
import useStorage from '../hooks/useStorage'

import './NewCardForm.css'

export default function NewCardForm({handleClose}) {
	const [submit, setSubmit] = useState(false)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [file, setFile] = useState(null)
	const [error, setError] = useState(null)

	const {  readyFlag } = useStorage(file, description, title, submit)

	 useEffect(() => {
		if (readyFlag) {
			console.log('dupa dupaaaa')
			resetForm()
			setSubmit(false) 
			handleClose()
		}
	}, [readyFlag]) 

	const types = ['image/png', 'image/jpeg']

	const resetForm = () => {
		setTitle('')
		setDescription('')
		setFile(null)
		handleClose()
	}

	const handleFileChange = e => {
		let selected = e.target.files[0]

		if (selected && types.includes(selected.type)) {
			setFile(selected)
			setError('')
		} else {
			setFile(null)
			setError('Please select an image file (png or jpg)')
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		setSubmit(true)
		
	}

	return (
		<form className='new-card-form' onSubmit={handleSubmit}>
			<label>
				<span>Title...</span>
				<input type='text' onChange={e => setTitle(e.target.value)} value={title} required />
			</label>
			<label>
				<span>Description...</span>
				<input type='text' onChange={e => setDescription(e.target.value)} value={description} required />
			</label>
			<label>
				<span>Choose image</span>
				<input type='file' onChange={handleFileChange} required />
			</label>
			<div className='output'>
				{error && <div className='error'>{error}</div>}
				{file && <div>{file.name}</div>}
			</div>
			<button>Submit</button>
		</form>
	)
}
