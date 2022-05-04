import noPoster from '../images/no-movie-poster.jpg';
import { format } from "date-fns";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



function SingleMovie( { movie }) {

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

    console.log(movie)

  // Providers Filter
//  IF I USE PROVIDERS, make sure to attribute source as JustWatch data (/get-movie-watch-providers)

//   const availableProviders = movie.results.CA.flatrate.filter(
//     provider => provider.provider_name.includes('Crave', 'Amazon Video', 'Netflix', 'Disney')

//   )

//   {names.filter(name => name.includes('J')).map(filteredName => (
//     <li>
//       {filteredName}
//     </li>
//   ))}


  return (
    <>

      <div className="single-movie-backdrop"
          style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
          }}>
          
      </div>
      <div className="single-movie-poster-buttons">
        <div className="single-movie-poster">
            {movie.poster_path === null ? <img src={noPoster} alt='No poster available' /> : <img 
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
            alt={movie.title}/>}
        </div>
        <div className="movie-buttons">
        {/*  MAKE THIS A PROPER LINK */}
            <Link to={{ pathname:`${movie.homepage}}`}} target="_blank"> Play Movie </Link>

        {/*  MAKE THIS A MODAL */}
            <button>Play Trailer</button>
        </div>
      </div>
     
      <div className="single-movie-info">
        <article>
            <h2>{movie.title}</h2>
            <p>{movie.genres.map(genreList => <span key={genreList.id}>{genreList.name} | </span>)} Run Time: {runtimeHours}h {runtimeMinutes}m</p>
            <p>Release Date: {formattedDate}</p>
            <span>{ratingPercent}</span>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
        {/* First 3 Production Crew Members */}
            <div className="single-movie-production-crew">
                {movie.credits.crew.slice(0, 3).map(member => 
                    <div key={member.id} className="single-movie-crew-member">
                        <p>{member.job}</p>
                        <p>{member.name}</p>
                    </div>
                )}
            </div>
        </article>
        <article>
        {/* First 6 actors */}
            <div className="single-movie-cast">
            {movie.credits.cast.slice(0, 6).map(actor => 
                <div key={actor.id} className="single-movie-actor">
                    <img 
                        src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} 
                        alt={movie.title}/>
                    <p>{actor.name}</p>
                    <p>{actor.character}</p>
                </div>
            )}
            </div>
        </article>
        <article>
        {/* put this in */}



            <div className="single-movie-media">
                {movie.images.posters.slice(0, 6).map(poster =>
                    <img 
                    src={`https://image.tmdb.org/t/p/original/${poster.file_path}`} 
                    alt={poster.title}/>
                )}
            </div>
        </article>
       
      </div>
      <article>     
        {/* Trailer */}    
            {youtubeTrailer.key !== false && 
            <div className="single-movie-trailer">
                <iframe width="640" height="360" src={`https://www.youtube.com/embed/${youtubeTrailer.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>
            }
            
        </article>
    </>
    )
}
export default SingleMovie