const Note = () => {
    return ( 
        <div className="Note">
            <p className="title">this is the title</p>
            <p className="content">this is the content</p>
            <div className="delete">
                <i>delete</i>
                <i class="bi bi-trash-fill"></i>
            </div>
        </div>

    );
}
export default Note;