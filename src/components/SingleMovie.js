import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie( { movie }) {
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
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
      </div>
    </>
    )
}
export default SingleMovie