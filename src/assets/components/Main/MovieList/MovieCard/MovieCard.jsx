import "../MovieCard/moviecard.css"

import MarkAsSeenBtn from "../../MarkAsSeenBtn/MarkAsSeenBtn";

const MovieCard = () => {

    return (
        <div className="moviecard">
            <p>MovieCard! :D</p> 
            {MarkAsSeenBtn()}
        </div>
    )
}
export default MovieCard;