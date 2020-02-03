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
    const [isOpen, setOpen] = useState(false);
    const [userInput, setInput] = useState('');

    useEffect(() => {
        //making the API request
        const getRemoteData = async () => {
            try {
                if (userInput.length === 0) {
                    const remoteData = await getMovies.getMovies('batman');
                    setMovies(remoteData.Search);
                    setCurrent(remoteData.Search[0])
                    setFetching(false);
                } else {
                    const remoteData = await getMovies.getMovies(userInput);
                    if (remoteData.Response === 'False') {
                        setError(remoteData.Error)
                    } else {
                        setMovies(remoteData.Search);
                        setCurrent(remoteData.Search[0])
                        setFetching(false);
                    }
                }
                //pushing data to state and update the fetching
                // setMovies(remoteData.Search);
                // setCurrent(remoteData.Search[0])
                // setFetching(false);
            } catch (err) {
                setError(err.message)
            }
        }
        getRemoteData();

    }, [userInput]);

    const state = {
        movies,
        fetching,
        error,
        currentMovie,
        counter,
        myMovies,
        movieID,
        movieQ,
        isOpen,
        userInput
    }

    const cb = {
        setCurrent,
        setCounter,
        setMyMovies,
        setMovieID,
        setMovieQ,
        setOpen,
        setInput,
        setError
    }

    return (
        <Provider value={{ ...state, ...cb }}>
            {children}
        </Provider>
    )

};


export { MovieProvider, useData };
