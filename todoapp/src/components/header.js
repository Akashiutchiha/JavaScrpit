import{Link} from 'react-router-dom'

const Header = () => {
    return ( 
        <div className="header">
            <p>Todo App</p>
            <Link to="/add"><p ><i class="plus bi bi-plus-circle"></i></p></Link>
        </div>
     );
}
 
export default Header;