import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg'
import { format } from "date-fns";
import AddFavourites from './AddFavourites';


function MovieCard( { movie, favouriteComponent, handleFavouritesClick }) {
  const FavouriteComponent = favouriteComponent;

  // Convert Date
  const date = new Date(movie.release_date);
  const formattedDate = format(date, "MMMM do, yyyy");

  // Convert Percent
  const rating = parseFloat(movie.vote_average).toFixed(0);
  const ratingPercent = `${(rating / 10 * 100)}%`;


  return (
    <div className="movie-card">
        <div className="movie-poster">
            {!movie.poster_path ? <img src={noPoster} alt='No poster available' /> : <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>}
            <div className='card-overlay' onClick={() => handleFavouritesClick(movie)}>
              <h4>Overview:</h4>
              <p>{movie.overview}</p>
              <FavouriteComponent />
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{formattedDate}</p>
            {/* <p>{movie.overview}</p> */}
            <span>info button</span>
            <Link to={`/movie/${movie.id}`}>More Info</Link>
            <span>{ratingPercent}</span>
        </div>
        
    </div>
  )
}
export default MovieCard