import { Link } from "react-router-dom";
import './MovieCard.scss';

const MovieCard = ({imgLink, title, id, rating, releaseDate}) => {
    return(
        <div className="movie-card">
            <div className="card-rating">{rating}</div>
            <img src={`https://image.tmdb.org/t/p/w500/${imgLink}`} alt="" className="card-img"/>
            <h2 className="card-title">{title}</h2>
            <div className="card-date">{releaseDate}</div>
            <Link to={`/movie/${id}`} className="card-btn">More Info</Link>
        </div>
    )
}

export default MovieCard;