import "../MovieCard/moviecard.css"

import MarkAsSeenBtn from "../../MarkAsSeenBtn/MarkAsSeenBtn";

const MovieCard = (movie) => {

    console.log(movie);
    let imgUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"+movie.movie.poster_path;
    

    return (
        <div className="moviecard">
            <img src={imgUrl} />
            <p>{movie.movie.original_title}</p> 
            {MarkAsSeenBtn()}
        </div>
    )
}
export default MovieCard;