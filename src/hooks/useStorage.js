import { useState, useEffect } from 'react';
import { projectStorage, db, timestamp } from '../firebase/FirebaseConfig';

const useStorage = (file, description, title, submit) => {

  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [readyFlag, setReadyFlag] = useState(null);

  


  useEffect(() => {



console.log(submit)
if (submit !== false)
{
    let file1 = file;
    let description1 = description;
    let title1 = title;
setReadyFlag('ok')
    console.log(title1, file1, description1)
    const storageRef = projectStorage.ref(file1.name);
    const collectionRef = db.collection('cards');
    
    storageRef.put(file1).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      console.log(percentage)
    }, (err) => {
      setError(err);
      console.log(err.message)
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt, description1, title1 });
      setUrl(url);
    });
}
  }, [submit]);
  
  return {readyFlag, error };
}

export default useStorage;