import MovieCard from "./MovieCard";

function Movies( { movieData, favouriteComponent, handleFavouritesClick }) {
    
  return (
    <div className="movies-container carousel-snaps-inline carousel-popular">

        {movieData.map(movie => <MovieCard 
        key={movie.id} 
        movie={movie}
        favouriteComponent={favouriteComponent}
        onClick={() => handleFavouritesClick(movie)}
         />)}
    </div>
  )
}
export default Movies