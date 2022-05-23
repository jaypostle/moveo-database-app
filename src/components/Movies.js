import MovieCard from "./MovieCard";

function Movies( { movieData, favouriteComponent }) {
    
  return (
    <div className="movies-container carousel-snaps-inline carousel-popular">

        {movieData.map(movie => <MovieCard 
        key={movie.id} 
        movie={movie}
        favouriteComponent={favouriteComponent}
         />)}
    </div>
  )
}
export default Movies