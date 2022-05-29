import MovieCard from "./MovieCard";
import { useSelector } from 'react-redux';
import isFav from '../utilities/isFav';

function Movies( { movieData, favouriteComponent }) {
  
  // redux favs
  const favs = useSelector((state) => state.favs.items);

  return (
    <div className="movies-container carousel-snaps-inline carousel-popular">

        {movieData.map(movie => <MovieCard 
        key={movie.id} 
        movie={movie}

        // old component favourites
        favouriteComponent={favouriteComponent}
      
        // new store favs code
          isFav={isFav(favs, null, movie.id)}
         />)}
    </div>
  )
}
export default Movies