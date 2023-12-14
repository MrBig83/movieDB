import { useEffect, useState } from "react";

import "../Main/main.css"
import FilterDropDown from "./MovieList/FilterDropdown/FilterDropDown";
import MovieCard from "./MovieList/MovieCard/MovieCard";

const Main = () => {

    const [response, setResponse] = useState([])

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTFlYTgwYWM2YzU3ZTFiZGJmYzIyZDRjMDcyOTU4YSIsInN1YiI6IjY0NjhhODYwMzNhMzc2MDEwMWZhYmE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nK5An2umnlU-ar3dzMqgmOMlEbhjpKmEdHT7_eiIags'
        }
    };
    
    useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch('https://api.themoviedb.org/3/search/movie?query=the%20matrix&include_adult=false&language=en-US&page=1', options)
            const data = await res.json();
            setResponse(data)
            console.log("Fetch done");
        };
        fetchMovies();
    }, [])
    
    useEffect(() => {}, [response])
    
    console.log(response.results);

    return (
        <div className="main-content">
            <h1>Main content</h1> 
            {FilterDropDown()}
            {MovieCard()}


        </div>
    )
}
export default Main;