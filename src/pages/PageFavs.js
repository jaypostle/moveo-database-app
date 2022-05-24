import React from 'react'
import { useSelector } from 'react-redux';
import Kitten from '../components/Kitten';
import { Link } from 'react-router-dom';


function PageFavs() {
  const favs = useSelector((state) => state.favs.items);

  return (
    <div>PageFavs
      <h2>Favourite Movies</h2>
                {favs.length < 1 ? <p>No favourite kittens. Return to the <Link to="/">home</Link> page to add some favourite kittens.</p> : 
                    <div className="kittens-grid">
                        {favs.map((singleKitten, i) => {
                            return <Kitten key={i} 
                                           kittenObj={singleKitten}
                                           isFav={true} />
                        })}
				    </div>}
      
    </div>
  )
}

export default PageFavs