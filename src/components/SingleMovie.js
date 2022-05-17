import noPoster from '../images/no-movie-poster.jpg';
import { format } from "date-fns";
import { Link } from 'react-router-dom';





function SingleMovie( { movie, provider, images }) {






  // Convert Date
  let date = new Date(movie.release_date);
  let formattedDate = format(date, "MMMM do, yyyy");
  // Convert Percent
  const rating = parseFloat(movie.vote_average).toFixed(0);
  const ratingPercent = `${(rating / 10 * 100)}%`;
  // Convert Runtime
  let runtimeHours   =   Math.floor(movie.runtime / 60);
  let runtimeMinutes =   movie.runtime % 60;

  // Youtube trailer
    const youtubeTrailer = movie.videos.results.find( ({type, site}) => 
    type === "Trailer" && site === "YouTube"
    );

// Filter Crew Members by Directors and Executive Producers only. Maybe make this a hard includes (currently a assistant photography director would be included in the array)
    const crewArray = movie.credits.crew;
    const crewDirectors = crewArray.filter(member => member.job.includes('Director', 'Executive Producer'));

  // Providers Filter
  // array of providers
  const array = provider.results.CA.flatrate;
  // makes an array if the provider_name includes crave, av, netflix, disney
  const resultProviders = array.filter(network => network.provider_name.includes('Crave', 'Amazon Video', 'Netflix', 'Disney'));
  

    
    
    

  return (
    <>

      {/* SINGLE MOVIE HEADER */}
      <div className="single-movie-header">
        {/* BACKDROP */}
        <div className="single-movie-backdrop"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
            }}>
            
        </div>
        {/* POSTER */}
        <div className="single-movie-poster-buttons">
            <div className="single-movie-poster">
                {movie.poster_path === null ? <img src={noPoster} alt='No poster available' /> : <img 
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                alt={movie.title}/>}
            </div>
            <div className="single-movie-posters">
                    {images.posters.slice(4, 6).map(poster =>
                        <img 
                        src={`https://image.tmdb.org/t/p/original/${poster.file_path}`} 
                        alt={poster.title}/>
                    )}
            </div>

            <div className="movie-buttons">
            {/*  MAKE THIS A PROPER LINK */}
                <Link to={{ pathname:`${movie.homepage}}`}} target="_blank"> Play Movie </Link>

            {/*  MAKE THIS A MODAL */}
                <button>Play Trailer</button>
            </div>
            <div className="single-movie-watch-providers"></div>
            
                {resultProviders === null ? <img src={noPoster} alt='No poster available' /> :
                    
                    resultProviders.map(network => 
                    <img 
                        key={resultProviders.provider_name}
                        src={`https://image.tmdb.org/t/p/original/${network.logo_path}`} 
                        alt={resultProviders.provider_name}/>)
                    }
                    



                    {/* /// below works */}
                <ul>
                {resultProviders.map(network => <li key={network.provider_id}>{network.provider_name}</li>)}
                </ul>
                
                
        </div>
        
        {/* CONTENT */}
        <div className="single-movie-info">
                <article>
                    <h1>{movie.title}</h1>
                    <p>{movie.genres.map(genreList => <span key={genreList.id}>{genreList.name} | </span>)} Run Time: {runtimeHours}h {runtimeMinutes}m</p>
                    <p>Release Date: {formattedDate}</p>
                    <span>{ratingPercent}</span>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                {/* First 3 Production Crew Members */}
                    <div className="single-movie-production-crew">
                        {crewDirectors.slice(0, 3).map(member => 
                            <div key={member.id} className="single-movie-crew-member">
                                <h4>{member.job}</h4>
                                <p>{member.name}</p>
                            </div>
                        )}
                    </div>
                </article>
            </div>
        </div>

        {/* ACTORS CONTAINER */}
        <div className="actors-container">
            <article className="single-movie-cast">
            {/* First 6 actors */}
                {movie.credits.cast.slice(0, 6).map(actor => 
                    <div key={actor.id} className="single-movie-actor">
                        <img 
                            src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} 
                            alt={movie.title}/>
                        <h4>{actor.name}</h4>
                        <p>{actor.character}</p>
                    </div>
                )}
            </article>

            {/* First 6 Backdrops */}
            <article>
                <div className="single-movie-media">
                    {images.backdrops.slice(0, 6).map(poster =>
                        <img 
                        src={`https://image.tmdb.org/t/p/original/${poster.file_path}`} 
                        alt={poster.title}/>
                    )}
                </div>
            </article>
        </div>

        {/* TRAILER CONTAINER */}
        <div className="trailer-container">
            <article>     
                {/* Trailer */}    
                    {youtubeTrailer.key !== false && 
                    <div className="single-movie-trailer">
                        <iframe width="640" height="360" src={`https://www.youtube.com/embed/${youtubeTrailer.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                    }
                    
            </article>
        </div>
    </>
    )
}
export default SingleMovie