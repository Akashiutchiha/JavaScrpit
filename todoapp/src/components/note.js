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

    // const handledelete = (id) => {
    //     fetch('http://localhost:8000/notes/' + id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         const newnotes = notes.filter(note => note.id !== id)
    //         setNote(newnotes)
    //     })
    // }
    
    return ( 
        <div className='notes1'>
            {notes && <NoteList notes={notes} />}
        </div>
    )  
}
export default Note;