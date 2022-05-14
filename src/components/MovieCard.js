import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg'
import { format } from "date-fns";


function MovieCard( { movie }) {


  // Convert Date
  const date = new Date(movie.release_date);
  const formattedDate = format(date, "MMMM do, yyyy");

  // Convert Percent
  const rating = parseFloat(movie.vote_average).toFixed(0);
  const ratingPercent = `${(rating / 10 * 100)}%`;


  return (
    <div className="movie-card">
      {/* styles to set background image in the card 
      
      https://www.youtube.com/watch?v=5DEq5cWNYt8&ab_channel=KevinPowell
      */}
      {/* style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      opacity: 0.9
    }} */}
        <div className="movie-poster">
            {!movie.poster_path ? <img src={noPoster} alt='No poster available' /> : <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>}
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{formattedDate}</p>
            <p>{movie.overview}</p>
            <span>info button</span>
            <Link to={`/movie/${movie.id}`}>More Info</Link>
            <span>{ratingPercent}</span>
            
        </div>
    </div>
  )
}
export default MovieCard