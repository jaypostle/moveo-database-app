import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function AddFavourites({movieLink}) {
  return (
    <div>
        {/* <Link to={`/movie/${movieLink}`}>More Info</Link> */}
        <FaRegHeart />


    </div>
  )
}

export default AddFavourites 