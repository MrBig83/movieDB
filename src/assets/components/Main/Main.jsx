import "../Main/main.css"
import FilterDropDown from "./MovieList/FilterDropdown/FilterDropDown";
import MovieCard from "./MovieList/MovieCard/MovieCard";


const Main = () => {

    return (
        <div className="main-content">
            <h1>Main content</h1> 
            {FilterDropDown()}
            {MovieCard()}


        </div>
    )
}
export default Main;