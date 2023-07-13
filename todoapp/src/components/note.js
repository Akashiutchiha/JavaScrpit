import { useEffect, useState } from 'react';
import NoteList from './NoteList';
// import Notes from '../notes'


const Note = () => {

    const [ notes, setNote ] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:8000/notes')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setNote(data)
            
        })
    }, [])

    
    
    return ( 
        <div className='notes1'>
            {notes && <NoteList notes={notes}/>}
        </div>
    )  
}
export default Note;