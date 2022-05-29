// Fav Button
import { FaHeart, FaRegHeart } from 'react-icons/fa';


function FavButton({ movieObj, remove, handleFavClick }) {

    function handleAddFav(){
        handleFavClick(true, movieObj);
    }

    function handleRemoveFav(){
        handleFavClick(false, movieObj);
    }

    return (
        <>
            {remove === false ? 
            <button onClick={handleAddFav}><FaRegHeart /></button> : 
            <button onClick={handleRemoveFav}><FaHeart /></button>}

        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
