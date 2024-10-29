import { useContext } from "react";
import MovieCard from "./MovieCard/MovieCard";
import { ListContext } from "../../../../context/ListContext";
import "../MovieList/movielist.css"

const MovieList = () => {
    const { list } = useContext(ListContext);

    return (
        <div className="movielist">
            {list && list.length > 0 ? (
                list.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
                <p>No movies available or loading...</p>
            )}
        </div>
    );
};

export default MovieList;
