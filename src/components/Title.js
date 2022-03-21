import './Title.css'
import { useState, useEffect } from 'react'
import UseTitleChange from '../firebase/UseTitleChange'
import { db } from '../firebase/FirebaseConfig'
import GetMainTitle from '../firebase/GetMainTitle'


const Title = () => {
	
	
	 const [title, setTitle] = useState(null)
	 //console.log(GetMainTitle('titles'))
	
	
		
	
		UseTitleChange(title)
	  

	return (
		<div className='title-block'>
			<label>
				<textarea
					className='title'
					type='text'
					onChange={e => setTitle(e.target.value)}
					value={GetMainTitle()}
				/>
			</label>
		</div>
	)
}
export default Title;