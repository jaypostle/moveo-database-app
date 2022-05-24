import React from 'react'

function Hero() {
  return (
    <section className="hero single-movie-header">
        {/* BACKDROP */}
        <div className="single-movie-backdrop"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original//A3bsT0m1um6tvcmlIGxBwx9eAxn.jpg)`
            }}>
            
        </div>
        <div className='title-text'>
            <h1>The best movies - all at your fingertips.</h1>
            <h3>Welcome to Moveo! Only the best. Curated just for you.</h3>
        </div>
        {/* search? */}

    </section>
  )
}

export default Hero