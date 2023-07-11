import notes from '../notes'

const Note = () => {
    
    return ( 
        <div className='notes'>
       {notes.map((note) => {
        return ( <div key={note.id} className="Note">
        <p className="title">{note.title}</p>
        <p className="content">{note.content.split(" ").slice(0, 20).join(" ")}</p>
        <div className="delete">
            <i>delete</i>
            <i class="bi bi-trash-fill"></i>
        </div>
    </div>);
       })}
        </div>
    );
}
export default Note;