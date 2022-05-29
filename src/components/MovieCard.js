import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg'
import { format } from "date-fns";
import { useDispatch } from 'react-redux';

// delete this later after successful favourites set up
import AddFavourites from './AddFavourites';
import { FaInfoCircle, FaRegHeart } from 'react-icons/fa';


// new imports from favourites tutorial
import FavHeartButton from '../components/FavHeartButton';


// import reducers
import { addFav, deleteFav } from '../features/favs/favsSlice';


function MovieCard( { movie, isFav }) {

  // Convert Date
  const date = new Date(movie.release_date);
  const formattedDate = format(date, "MMMM do, yyyy");

  // Convert Percent
  const rating = parseFloat(movie.vote_average).toFixed(0);
  const ratingPercent = `${(rating / 10 * 100)}%`;


  // Favourites
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj){
    if(addToFav === true){
        dispatch(addFav(obj));
    }else{
        dispatch(deleteFav(obj));
    }   
}

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
                {/* <FavouriteComponent movieLink={movie.id} /> */}
              </div>  
              {/*  NEW FAVOURITES TRY */}
              <div className='card-action-slice-favs'>
                      {isFav ? 
                          <FavHeartButton movieObj={movie} remove={true} handleFavClick={handleFavClick} /> : 
                          <FavHeartButton movieObj={movie} handleFavClick={handleFavClick} />
                      } 
              </div>
        </div>

        {/*  NEW FAVOURITES TRY */}
        {/* <div className='card-action-icons'>
                {isFav ? 
                    <FavHeartButton movieObj={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavHeartButton movieObj={movie} handleFavClick={handleFavClick} />
                } 
        </div> */}
    </div>
  )
}
export default MovieCard
