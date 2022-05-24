// Kitten

import { Link } from 'react-router-dom';
import FavButton from '../components/FavButton';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';

const imageFolderPath = process.env.PUBLIC_URL + '/assets/images/';

function Kitten({kittenObj, profileLink, isFav}) {

    const dispatch = useDispatch();

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            dispatch(addFav(obj));
        }else{
            dispatch(deleteFav(obj));
        }   
    }

    return (
        <div className="kitten">
            {isFav && 
                <div className="heart">
                    <img src={`${imageFolderPath}heart.png`} alt="Heart"/>
                </div>}
            <div className="profile-picture">
                <img src={`${imageFolderPath}${kittenObj.pic}`} alt={kittenObj.name} />
            </div>
            <div className="title-and-name">
                <p><b>Name: </b>{kittenObj.name}</p>
                <p><b>Position: </b>{kittenObj.position}</p>
            </div>
            {profileLink && <div className="link-profile">
                <Link to={{pathname: `/kitten-profile/${kittenObj.id}`,
                           state: { kittenObj }}}>
                    View Profile
                </Link>
            </div>}
            <div className="btn-favourite">
                {isFav ? 
                    <FavButton kittenObj={kittenObj} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton kittenObj={kittenObj} handleFavClick={handleFavClick} />
                }
            </div>
        </div>
    );
    
}

Kitten.defaultProps = {
    profileLink: true
}

export default Kitten;
