import {Link} from 'react-router-dom';
import './ArtistCard.scss';

const ArtistCard = ({id, name, charName, imgLink}) =>{
    return (
        <Link to={`actor/${id}`} className="artist-card">
            <img src={imgLink}/>
            <h2>{name}</h2>
            <h3>{charName}</h3>
        </Link>
    )   
}

export default ArtistCard;