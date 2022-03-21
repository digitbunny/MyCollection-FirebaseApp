
import { useState, useEffect } from 'react'
import { db } from './FirebaseConfig'


      const GetMainTitle=() => {
        const [docs, setDocs] = useState('');

  useEffect(() => {


    
     db.collection('titles')
    .orderBy( 'title')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
          setDocs(doc.data());
          console.log(doc.data())
        });
        
      });

    
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, []);

  return docs.title ;

    }
    
    export default GetMainTitle