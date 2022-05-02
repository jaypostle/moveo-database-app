import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg'
import placeholder from '../images/godzilla-vs-kong-demo-poster.jpg';


function MovieCard( { movie }) {

  // const date = new Date("2022-02-17")
  const formattedDate = new Date(movie.release_date);
  const date = toDateString(formattedDate);
  console.log(date);
  
  return (
    <div className="movie-card">
        <div className="movie-poster">
            {!movie.poster_path ? <img src={noPoster} alt='No poster available' /> : <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>}
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            {/* <p>{formattedDate}</p> */}
            <p>{movie.overview}</p>
            <p><span>{movie.vote_average}</span></p>
            <span>info button</span>
            <Link to={`/movie/${movie.id}`}>More Info</Link>
            <span>{movie.vote_average}</span>
        </div>
    </div>
  )
}
export default MovieCard