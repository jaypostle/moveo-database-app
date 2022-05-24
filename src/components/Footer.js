import React from 'react'

import moveoLogo from   '../images/logo-moveo4xgreen.png'
;

function Footer() {

  return (
    <>
      <footer className='footer-main'>
          <img src={moveoLogo} alt='moveo logo'/>

          <nav className='footer-links footer-main-links'>
            <ul>
              <li><a href="">main links</a></li>
              <li><a href="">about .moveo</a></li>
              <li><a href="">contact</a></li>
              <li><a href="">support</a></li>
            </ul>
          </nav>
          <nav className='footer-links footer-connection-links'>
            <ul>
              <li><a href="">connection</a></li>
              <li><a href="">leaderboard</a></li>
              <li><a href="">suggestions</a></li>
              <li><a href="">social</a></li>
            </ul>
          </nav>
          <nav className='footer-links footer-company-links'>
            <ul>
              <li><a href="">company</a></li>
              <li><a href="">careers</a></li>
              <li><a href="">legal</a></li>
              <li><a href="">privacy policy</a></li>
            </ul>
          </nav>
      </footer>
      <footer>
      <p>Movie API provided by TMDB. Movie Provider Information Provided by JustWatch</p>
      </footer>
    </>
  )
}

export default Footer