import React from 'react'
import useFirestore from '../hooks/useFirestore'

import './CardGrid.css'

const CardGrid = () => {
	const { docs } = useFirestore('cards')

	return (
		<div className='img-grid'>
			<div className='add-btn' key={'test'}>
				<h2>{'title'}</h2>
			</div>
			{docs &&
				docs.map(doc => (
					<div className='card' key={doc.id}>
						<img src={doc.url} alt='uploaded pic' />
						<div className='card-body'>
							<h2>{doc.title1}</h2>
							<p>{doc.description1}</p>
						</div>
					</div>
				))}
		</div>
	)
}

export default CardGrid
