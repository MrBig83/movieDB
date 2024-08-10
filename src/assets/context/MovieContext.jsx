import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext({
    movieList: null,
});

const MovieContextProvider = ({ children }) => {
    const [movieList, setMovieList] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "HämtaIfrånEnv"
        }
    };

    const getMovies = async () => {              
        try {
            const res = await fetch('https://api.themoviedb.org/3/search/movie?query=the%20matrix&include_adult=false&language=en-US&page=1', options);
            const data = await res.json();
            setMovieList(data);
            console.log("Fetch done");
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {  
        getMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ 
          movieList 
          }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
