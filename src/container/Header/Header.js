import './Header.scss';
import {Link} from 'react-router-dom';

const Header = () =>{
    return (
        <div className="navbar container">
            <Link to="/" className="navbar_item">Home</Link>
            <Link to="/populars" className="navbar_item">Populars</Link>
            <Link to="/movies" className="navbar_item">Movie</Link>
        </div>
    )
}

export default Header;