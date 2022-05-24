import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg'
import { format } from "date-fns";
import AddFavourites from './AddFavourites';
import { FaInfoCircle, FaRegHeart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favouritesSlice';

function MovieCard( { movie, favouriteComponent, }) {

  //  mikes favourites
  const favoriteItems = useSelector((state) => state.favorite.items);
  const dispatch = useDispatch();

  function inFav(id, arr){
      return arr.some(item => item.id === id);
  }

  //  mikes favourites end

  const FavouriteComponent = favouriteComponent;

  // Convert Date
  const date = new Date(movie.release_date);
  const formattedDate = format(date, "MMMM do, yyyy");

  // Convert Percent
  const rating = parseFloat(movie.vote_average).toFixed(0);
  const ratingPercent = `${(rating / 10 * 100)}%`;


  return (
    <div className="movie-card">
        <span className='card-rating-percent'>{ratingPercent}</span>

        <div className="movie-poster">
            {!movie.poster_path ? <img src={noPoster} alt='No poster available' /> : <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>}
            
        </div>
        <div className='card-overlay' >
              <h4>Overview:</h4>
              <p>{movie.overview}</p>
        </div>
        <div className="movie-info">
            <div className='card-movie-title-and-date'>
              <h3>{movie.title}</h3>
              <p>{formattedDate}</p>
            </div>
            
        </div>
        <div className='card-action-icons'>
              <div className='card-more-info'>
                <FaInfoCircle />
                <Link to={`/movie/${movie.id}`}>More Info {'>'}</Link>    
              </div>      
              <div className="card-favourite-heart">
                <FavouriteComponent movieLink={movie.id} />
              </div>  
              <div className="game-add-to-cart">
                        {inFav(movie.id, favoriteItems) === true ? 
                            <button onClick={() => dispatch(deleteFav(movie))}>Remove from Favorites</button> : 
                            <button onClick={() => dispatch(addFav(movie))}>Add to Favorites</button>
                        }  
              </div>
        </div>
    </div>
  )
}
export default MovieCard
