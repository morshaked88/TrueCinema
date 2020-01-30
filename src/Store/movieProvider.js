import React, { useContext, useState, createContext, useEffect } from 'react';
import * as getMovies from '../services/MoviesApi';

const movieData = createContext();
const { Provider } = movieData;

const useData = () => {
    const context = useContext(movieData);

    if (!context) {
        throw new Error('use context only within provider')
    }

    return context;
}

const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState(null);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(null);
    const [currentMovie, setCurrent] = useState(null);
    const [counter, setCounter] = useState(1);
    const [myMovies, setMyMovies] = useState([]);
    const [movieID, setMovieID] = useState(null);
    const [movieQ, setMovieQ] = useState(null);

    useEffect(() => {
        //making the API request
        const getRemoteData = async () => {
            try {
                const remoteData = await getMovies.getMovies();
                //pushing data to state and update the fetching
                setMovies(remoteData.Search);
                setCurrent(remoteData.Search[0])
                setFetching(false);
            } catch (err) {
                setError(err.message)
            }
        }
        getRemoteData();

    }, []);

    const state = {
        movies,
        fetching,
        error,
        currentMovie,
        counter,
        myMovies,
        movieID,
        movieQ
    }

    const cb = {
        setCurrent,
        setCounter,
        setMyMovies,
        setMovieID,
        setMovieQ
    }

    return (
        <Provider value={{ ...state, ...cb }}>
            {children}
        </Provider>
    )

};


export { MovieProvider, useData };
