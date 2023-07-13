const NoteList = (props) => {

    const notes = props.notes
    

    return ( 
     <div>
        {notes.map((note)=>(<div key={note.id} className="Note">
        <p className="title">{note.title}</p>
        <p className="content">{note.content}</p>
        <div className="delete">
            <i>delete</i>
            <i className="bi bi-trash-fill"></i>
        </div>
    </div>))}
     </div>
    );
}
 
export default NoteList;