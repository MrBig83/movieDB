import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

export const ListContext = createContext();

const ListContextProvider = ({ children }) => {
    const [list, setList] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTFlYTgwYWM2YzU3ZTFiZGJmYzIyZDRjMDcyOTU4YSIsInN1YiI6IjY0NjhhODYwMzNhMzc2MDEwMWZhYmE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nK5An2umnlU-ar3dzMqgmOMlEbhjpKmEdHT7_eiIags'
        }
    };

    const getList = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/search/movie?query=the%20matrix&include_adult=false&language=en-US&page=1', options);
            const data = await res.json();
            console.log("Fetched data:", data);  // Log entire data to verify its structure
            if (data && data.results) {
                setList(data.results);
            } else {
                console.error("Data does not contain results:", data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <ListContext.Provider value={{ list }}>
            {children}
        </ListContext.Provider>
    );
};

ListContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ListContextProvider;


