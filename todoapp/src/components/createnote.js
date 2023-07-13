import { Link } from "react-router-dom";
import { useState } from "react";


const Create = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 1000);
        const note = {id, title, content};

        
        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        }).then(() => {
            console.log('new note added');
        })
    }


    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e.target.value);
    }

    return ( 
        <div className="container">
            <div className="create">
                <div className="top">
                    <Link to="/"> <i class="bi bi-arrow-left-circle"></i></Link>
                    <p className="title">Add Note</p>
                </div>
                    <input placeholder="Title" type="text" value={title} onChange={handleTitle}/>
                    <textarea placeholder="Content" className="textarea" name="" id="" cols="30" rows="10" onChange={handleContent}></textarea>
                    <div><button onClick={handleSubmit}>Add</button></div>
            </div>
        </div>
    );
}


export default Create;