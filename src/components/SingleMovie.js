import noPoster from '../images/no-movie-poster.jpg';
import { format } from "date-fns";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';
import FavHeartButton from '../components/FavHeartButton';




function SingleMovie( { movie, provider, images, isFav }) {

    // add / remove favs from single movie page
    const dispatch = useDispatch();

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            dispatch(addFav(obj));
        }else{
            dispatch(deleteFav(obj));
        }   
    }




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

  const [resultProviders, setResultProviders] = useState(null);
  // outcomes:
  // 1. empty object
  // 2. doesn't contain CA
  // 3. doesn't contain flatrate or it's empty

  console.log(Object.keys(provider.results).length);

    useEffect(() => {
    // 1. empty object
    if (Object.keys(provider.results).length > 1) {
            // 2. doesn't contain CA
            
        if (provider.results.hasOwnProperty('CA')) {
                console.log('includes CA')
                        // 3. doesn't contain flatrate or it's empty

            if(provider.results.CA.hasOwnProperty('flatrate')) {
                console.log('includes flatrate')

                const array = provider.results.CA.flatrate;
            //     // makes an array if the provider_name includes crave, av, netflix, disney
                const arrayOfProviders = array.filter(network => network.provider_name.includes('Crave', 'Amazon', 'Netflix', 'Disney'));
                console.log(arrayOfProviders);
                setResultProviders(arrayOfProviders);
            }
        }
    }
    }, [])

  


    
    
    

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
                <span className='card-rating-percent single-movie-rating-percent'>{ratingPercent}</span>
                <div className='card-action-icons'>
                    <div className="card-favourite-heart card-favourite-heart-single-movie">
                            {isFav ? 
                                    <FavHeartButton movieObj={movie} remove={true} handleFavClick={handleFavClick} /> : 
                                    <FavHeartButton movieObj={movie} handleFavClick={handleFavClick} />
                                } 
                    </div>
                </div>  
            </div>
            {/*  When I want to add a poster carousel, use this to get 3 posters */}
            {/* <div className="single-movie-posters">
                    {images.posters.slice(4, 6).map(poster =>
                        <img 
                        key={images.file_path}
                        src={`https://image.tmdb.org/t/p/original/${poster.file_path}`} 
                        alt={movie.title}/>
                    )}
            </div> */}

            <div className="movie-buttons">
            {/*  MAKE THIS A PROPER LINK */}
                <a href={movie.homepage} target="_blank" rel='noopener'>Go to Movie Website {'>'}</a>

            {/*  MAKE THIS A MODAL */}
                

            </div>
            <div className="single-movie-watch-providers">
                <h4>Movie Provider(s):</h4>
                {resultProviders === null ? <p>No provider source available. The film is currently not available in Canada on Amazon Prime, Disney, Netflix, or Crave.</p> :
                    
                    resultProviders.map(network => 
                    <img 
                        key={resultProviders.provider_id}
                        src={`https://image.tmdb.org/t/p/original/${network.logo_path}`} 
                        alt={resultProviders.provider_name}/>)
                }

                    {/* /// below works */}
                {/* <ul>
                {resultProviders.map(network => <li key={network.provider_id}>{network.provider_name}</li>)}
                </ul> */}
            </div>       
                
        </div>
        
        {/* CONTENT */}
            <div className="single-movie-info">
                <article>
                    <h1>{movie.title}</h1>
                    <p><span style={{fontWeight: 600}}>Genre(s): </span>{movie.genres.map(genreList => <span key={genreList.id}>{genreList.name} | </span>)} <span style={{fontWeight: 600}}>Run time:</span> {runtimeHours}h {runtimeMinutes}m</p>
                    <p><span style={{fontWeight: 600}}>Release Date:</span> {formattedDate}</p>
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
            <h2>Cast</h2>
            <article className="single-movie-cast">
                
            {/* First 6 actors */}
                {movie.credits.cast.slice(0, 6).map(actor => 
                    <div key={actor.id} className="single-movie-actor">
                        <img 
                            src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} 
                            alt={movie.title}/>
                        <div className='cast-names-titles'>
                            <h4>{actor.name}</h4>
                            <p>{actor.character}</p>
                        </div>
                    </div>
                )}
            </article>

            
        </div>
        {/* First 6 Backdrops */}
        <div className="single-movie-media">
                <h2>Backdrops</h2>
                <article >
                    {images.backdrops.slice(0, 6).map(poster =>
                        <img 
                        src={`https://image.tmdb.org/t/p/original/${poster.file_path}`} 
                        alt={poster.title}/>
                    )}
                </article>
        </div>

        {/* TRAILER CONTAINER */}
        <div className="trailer-container" id='movie-trailer'>
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