import MovieCard from "./MovieCard";

function Movies( { movieData }) {
    
  return (
    <div className="movies-container carousel-snaps-inline carousel-popular">
{        console.log(`Movie Section will present this: ${movieData}`) }    
        {movieData.map(movie => <MovieCard 
        key={movie.id} 
        movie={movie}
         />)}
    </div>
  )
}
export default Movies