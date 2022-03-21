import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import NewCardForm from './components/NewCardForm'
import CardGrid from './components/CardGrid'

function App() {
	const [showModal, setShowModal] = useState(false)

	const handleClose = () => {
		setShowModal(false)
	  }

	return (
		<div className='App'>
			<Title />
			{showModal && (
				<Modal>
					<NewCardForm handleClose = {handleClose}/>
				</Modal>
			)}
			<button onClick={() => setShowModal(true)}>Add New</button>
			<CardGrid/>
					</div>
	)
}

export default App
