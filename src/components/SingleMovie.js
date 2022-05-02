import noPoster from '../images/no-movie-poster.jpg';
import { format } from "date-fns";


function SingleMovie( { movie }) {

  // Convert Date
  let date = new Date(movie.release_date);
  let formattedDate = format(date, "MMMM do, yyyy");
  // Convert Percent
  const rating = parseFloat(movie.vote_average).toFixed(0);
  const ratingPercent = `${(rating / 10 * 100)}%`;

  return (
    <>

      <div className="single-movie-backdrop"
          style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
          }}>
          
      </div>
      <div className="single-movie-poster">
          
          {movie.poster_path === null ? <img src={noPoster} alt='No poster available' /> : <img 
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
          alt={movie.title}/>}
      </div>
      <div className="single-movie-info">
        {/* <img src={noPoster} alt='no poster available' /> */}
        <article>
            <h2>{movie.title}</h2>
            <p>Genre | Run Time: 1h 10m</p>
            <p>Release Date: {formattedDate}</p>
            <span>{ratingPercent}</span>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
        </article>
      </div>
    </>
    )
}
export default SingleMovie