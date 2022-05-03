import React from 'react';
import SingleMovie from '../components/SingleMovie';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { API_KEY } from '../globals/globals';

function PageSingleMovie() {

  const { id } = useParams();

  const [movieData, setMovieData] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,credits
      `);

      
      // const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b88e3f6d75617b57568ea1668aa6b559&language=en-US
      // `);

      // https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images

      const data = await res.json();
      setMovieData(data);
      // console.log(data);
    }
    fetchMovie();

  }, [])

  return (
    <section className="single-movie-container">
      {/* don't load singlemovie if moviedata is false! */}
{movieData !== false && <SingleMovie movie={movieData} />}
    </section>
  )
}

export default PageSingleMovie