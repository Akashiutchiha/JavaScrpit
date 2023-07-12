import { Link } from "react-router-dom";


const Create = () => {
    return ( 
        <div className="container">
            <div className="create">
                <div className="top">
                    <Link to="/"> <i class="bi bi-arrow-left-circle"></i></Link>
                    <p className="title">Add Note</p>
                </div>
                    <input placeholder="Title" type="text" name="" id="" />
                    <textarea placeholder="Content" className="textarea" name="" id="" cols="30" rows="10"></textarea>
                    <div><button>Add</button></div>
            </div>
        </div>
    );
}


export default Create;