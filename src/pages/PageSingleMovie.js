import React from 'react';
import SingleMovie from '../components/SingleMovie';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { API_KEY } from '../globals/globals';

function PageSingleMovie() {

  const { id } = useParams();

  const [movieData, setMovieData] = useState(false);
  const [movieProviderData, setMovieProviderData] = useState(false);
  const [movieImages, setMovieImages] = useState(false);


  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,credits
      `);

      const data = await res.json();
      setMovieData(data);
      // console.log(data);
    }
    fetchMovie();

  }, [])


  // get movie provider info
    useEffect(() => {

      if(movieProviderData === false){
        const fetchMovieProvider = async () => {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${API_KEY}
          `);
  
          if (res.ok) {
            const providerData = await res.json();
            setMovieProviderData(providerData);
            // console.log(providerData);
          }
        }
        fetchMovieProvider();
  
      }


      
    }, [])

    // Get single image and backdrop data
    useEffect(() => {

      if(movieImages === false){
        const fetchImages = async () => {
          const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}
          `);
  
          if (res.ok) {
            const imageData = await res.json();
            setMovieImages(imageData);
            // console.log(imageData);
          }
        }
        fetchImages();
      }

    }, [])
  

  return (
    <>
      <section className="single-movie-container">
        {/* don't load singlemovie if moviedata is false! */}
  {(movieData !== false && movieProviderData !== false && movieImages !== false) && 
    <SingleMovie movie={movieData} provider={movieProviderData} images={movieImages} />}
      </section>
      
    </>
  )
}

export default PageSingleMovie