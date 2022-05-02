import React from 'react'
import { useEffect, useState } from 'react';
import { API_KEY } from '../globals/globals';

import Movies from '../components/Movies';
import NavSort from '../components/NavSort';



function PageHome( { sort }) {

  const [movieData, setMovieData] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      // gather results in an awaited fetch using the api key

      // const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b88e3f6d75617b57568ea1668aa6b559&language=en-US&page=1
      // `);
      const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1
      `);
            
      // for sort key
      // https://api.themoviedb.org/3/movie/${sort}?api_key=b88e3f6d75617b57568ea1668aa6b559&language=en-US&page=1
      
      // set results as a data const
      const data = await res.json();

      // creates an array of 12
      const first12movies = data.results.splice(0, 12);
     
      // test did data fetch and set
      // console.log(first12movies);

      // set state of movieData to first12movies sorted from data array 
      setMovieData(first12movies);

    }
    fetchMovies();

    //  the array box here means that the formula will run once when it mounts and whenever whatever is in the array changes (e.g. sort changes)

  }, [sort]);

  return (
    <section className="home-page">
        <h2>Home Page</h2>
        <NavSort />

        {movieData !== false && <Movies movieData={movieData} />}

    </section>
  )
}

export default PageHome