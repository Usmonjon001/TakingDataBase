import {useEffect, useState} from 'react';
import axios from 'axios';
import './pages.scss';
import ArtistCard from '../components/ArtistCard'

const SingleMovie = ({match}) =>{

    const [movieInfo, setMovieInfo] = useState(
        {
            isFetched: false,
            data: [],
            error: null
        }
    );

    const [actorsList, setActorsList] = useState(
        {
            isFetched: false,
            data: [],
            error: null
        }
    );

    useEffect(() =>{

        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
            params: {
                api_key: 'ec559c313bd466192dc63eabc3d20188'
            }
          })
          .then(function (response) {
            setMovieInfo(
                {
                    isFetched: true,
                    data: response.data,
                    error: false
                }
            )
          })
          .catch(function (error) {
            setMovieInfo(
                {
                    isFetched: true,
                    data: [],
                    error: error
                }
            )
          })
          .then(function () {
            // always executed
          });



        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
            params: {
                api_key: 'ec559c313bd466192dc63eabc3d20188'
            }
        })
        .then(function (response) {
            setActorsList(
                {
                    isFetched: true,
                    data: response.data,
                    error: false
                }
            )
        })
        .catch(function (error) {
            setActorsList(
                {
                    isFetched: true,
                    data: [],
                    error: error
                }
            )
        })
        .then(function () {
        // always executed
        });

    }, []);

    console.log(actorsList.data);

    const movieInfoData = movieInfo.data;

    const movieCastActors = actorsList.data.cast;

    console.log(movieCastActors);

    return(
        <div>
            {
                movieInfo.isFetched ? (
                    <div className="movie-info">

                        <img src={`https://image.tmdb.org/t/p/w500/${movieInfoData.backdrop_path}`} className="movie-info-back"/>

                       <div className="movie-info-front container">
                            <img src={`https://image.tmdb.org/t/p/w500/${movieInfoData.poster_path}`} className="movie-poster"/>
                            

                            <div className="movie-info-front-info">
                                <h1>{movieInfoData.title}</h1>
                                <h2>{movieInfoData.original_title}</h2>
                                <p>{movieInfoData.overview}</p>
                                <h4>Budget: ${movieInfoData.budget}</h4>
                                <h4>Release Date: <span>{movieInfoData.release_date}</span></h4>
                                <h4>Runtime: {movieInfoData.runtime}minute</h4>

                                <a href={movieInfoData.homepage} target="_blank">Official Web Site</a>

                                {
                                    movieInfoData.genres.map((genre, index) =>(
                                        <button key={index}>{genre.name}</button>
                                    ))
                                }

                                <h2>Acotrs List</h2>

                                {
                                    actorsList.isFetched ? (
                                        <div className="actors-list">
                                            {
                                              movieCastActors.map((actor, index) =>(
                                                   <ArtistCard id={actor.id}
                                                   name={actor.name}
                                                   charName={actor.character}
                                                   imgLink={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                                   key={index}/>
                                              ))   
                                            }
                                        </div>
                                    ) : (
                                        <h2>Loading...</h2>
                                    )
                                }
                            </div>
                               
                        </div>

                    </div>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    )
}

export default SingleMovie;