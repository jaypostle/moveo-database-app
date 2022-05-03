import noPoster from '../images/no-movie-poster.jpg';
import { format } from "date-fns";
import { useState } from 'react';
import { useEffect } from 'react';


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
        {/* <img src={noPoster} alt='no poster available' /> */}
        <article>
            <h2>{movie.title}</h2>
            <p>{movie.genres.map(genreList => <span key={genreList.id}>{genreList.name} | </span>)} Run Time: {runtimeHours}h {runtimeMinutes}m</p>
            <p>Release Date: {formattedDate}</p>
            <span>{ratingPercent}</span>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
        {/* put this in */}
            <p>Director Producer</p>
        </article>
        <article>
        {/* put this in */}
            <div className="single-movie-media"></div>
        </article>
        <article>
        {/* put this in */}
            <div className="single-movie-cast">
            {movie.credits.cast.map(actor => 
                <div key={actor.id} className="single-movie-actor">
                    {/* insert the photo here */}
                    <p>{actor.name}</p>
                    <p>{actor.character}</p>
                </div>
            )}
            </div>
        </article>
        <article>
        {/* put this in */}
            <div className="single-movie-trailer">

            </div>
        </article>
      </div>
    </>
    )
}
export default SingleMovie