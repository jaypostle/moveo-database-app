import MovieCard from "./MovieCard";



function Movies( { movieData, favouriteComponent, handleFavouritesClick }) {
    
  return (
    <div className="movies-container carousel-snaps-inline carousel-popular">

        {movieData.map(movie => <MovieCard 
        key={movie.id} 
        movie={movie}
        favouriteComponent={favouriteComponent}
        handleFavouritesClick={handleFavouritesClick}
         />)}
    </div>
  )
}
export default Movies