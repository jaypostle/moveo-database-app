import React from 'react'

function PageAbout() {
  return (
    <section className='about-page'>
      <h1>About Moveo</h1>
      <h4>by Jayson Postle | May-June 2022</h4>
      <p>This is a React App reated with the Movie Database API. You can find upcoming, popular, top rated and more movies. Enjoy the favourites functionality. Adding movies to your favs will stay with you on your browser, even if you refresh. </p>
      <h4>What's next</h4>
      <p>Next, I will be adding network provider sortability. Currently, you can see on select single movie pages where that movie is streaming (Disney, Crave, Netflix, or Prime). Soon, you will be able to select what providers you have access to and there will be a carousel where you can explore all the movies of a particular category. My FireTV does this but not with all providers and not with the ability to sort. Stay tuned to see it in action!</p>
      <h4>Have ideas?</h4>
      <p>If you have great ideas for this app, contact me at jaysondigitalmcc at gmail.com</p>
    </section>
  )
}

export default PageAbout