import { useState } from "react";
import "../MovieCard/moviecard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faNewspaper, faCheck, faHeart } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({ movie }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckMark = () => {
        setIsChecked(!isChecked);
      };



    return (
            <div className="movieCard">
                <img className="cardImage" src={"https://media.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path} alt="" />
                <p className="cardTitle">{movie.original_title}</p>
                <div className="cardBottom">
                <FontAwesomeIcon icon={faHeart} />
                <p 
                    className={`checkMark ${isChecked ? 'checkMarkChecked' : 'checkMarkNot'}`} 
                    onClick={toggleCheckMark}
                >
                    <FontAwesomeIcon icon={faCheck} /></p>
                
                    {/* <FontAwesomeIcon icon={faEye} /> */}
                    {/* <p className="cardInstock">Seen</p> */}
                </div>
              </div>
    )
}
export default MovieCard;