import { useContext } from "react";
import "../Main/main.css";
import FilterDropDown from "./MovieList/FilterDropdown/FilterDropDown";
import MovieCard from "./MovieList/MovieCard/MovieCard";
import { MovieContext } from "../../context/MovieContext";

const Main = () => {
    const { movieList } = useContext(MovieContext);

    // Check if movieList is null or undefined, display loading indicator
    if (!movieList) {
        console.log(movieList);
        return <div>Loading...</div>;
    } 

    return (
        <div className="main-content">
            <h1>Main content</h1>
            {FilterDropDown()}
            <div className="movieCardList">
                {movieList.results?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Main;
