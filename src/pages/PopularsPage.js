import {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard'

const PopularsPage = () =>{

    const [movieList, setMovieList] = useState(
        {
            isFetched: false,
            data: [],
            error: null
        }
    )

    useEffect(() =>{

        axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: 'ec559c313bd466192dc63eabc3d20188'
            }
          })
          .then(function (response) {
            setMovieList(
                {
                    isFetched: true,
                    data: response.data.results,
                    error: false
                }
            )
          })
          .catch(function (error) {
            setMovieList(
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

    console.log(movieList);

    return(
        <div>
            {
                movieList ? (
                    <div className="movies-holder container">
                        {
                            movieList.data.map((item, index) =>(
                                <MovieCard
                                id={item.id}
                                imgLink={item.poster_path}
                                title={item.title}
                                rating={item.vote_average}
                                releaseDate={item.release_date}
                                key={index}/>
                        ))
                        }
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    )
}

export default PopularsPage;