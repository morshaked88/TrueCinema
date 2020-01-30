import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useData } from '../../../Store/movieProvider';
import Loading from '../../Loading/Loading';
import Movie from './Movie/Movie';

const MovieDetails = () => {

    let { movieID, movieQ, setMovieQ, error, setError } = useData();

    useEffect(() => {
        fetchMovie(movieID);
        console.log(movieQ)
    }, [movieID])

    const fetchMovie = async (query) => {
        try {
            const result = await fetch(`http://www.omdbapi.com/?apikey=db4253d6&i=${query}`)
            const data = await result.json();
            setMovieQ(data)
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <Box>
            {movieQ === null ? <Loading></Loading> : <Movie />}
        </Box>
    )
};

export default MovieDetails;

const Box = styled.div`
color: white;
`;