import { useState, useEffect } from 'react'
import { db } from './FirebaseConfig'

const UseTitleChange = title => {
	

	useEffect(() => {
        
		// references

		const collectionRef = db.collection('titles')
        if(title != null)
        {
            // Add a new document in collection "cities"
		 collectionRef
         .doc('mainTitle1')
         .set({
             title: title,
         })
         .then(() => {
             console.log('Document successfully written!')
         })
         .catch(error => {
             console.error('Error writing document: ', error)
         })
        }
		
	}, [title])

	return { title }
}

export default UseTitleChange
