import React from 'react'
import MovieCard from '../components/MovieCard'
import { useSelector } from 'react-redux';


function PageFavs() {

  const favs = useSelector((state) => state.favs.items);

  return (
    <main className='favourites-page'>
      <section className='favourites-page-section'>
        <h1>Favourite Movies</h1>
        {favs.length < 1 ? <p>You have no favourite movies. Return to the home page to add favourites.</p> :
        <div className="movies-container favourites-page-carousel-wrapper">
        {/* carousel-snaps-inline carousel-popular  */}
            {favs.map(movie => <MovieCard 
            key={movie.id} 
            movie={movie}
          
            // new store favs code
              isFav={true}
            />)}
        </div>}
      </section>
    </main>
  )
}

export default PageFavs