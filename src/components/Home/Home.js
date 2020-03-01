import React, { memo } from 'react';
import styled from 'styled-components'
import { useData } from '../../Store/movieProvider';

import Loader from '../Loading/Loading';
import Slider from '../Home/Slider/Slider';

const Home = () => {

    let { movies, currentMovie, fetching, setCurrent, counter, setCounter } = useData();


    const nextMovie = () => {
        if (movies.length === 1) {
            return
        } else if (counter >= movies.length - 1) {
            setCounter(0)
            setCurrent(movies[counter])
        } else if (counter < movies.length) {
            setCurrent(movies[counter])
            setCounter(counter + 1)
        }
    }

    const previousMovie = () => {
        if (movies.length === 1) {
            return
        } else if (counter === 0) {
            setCounter(9);
            setCurrent(movies[counter])
        } else {
            setCounter(counter - 1)
            setCurrent(movies[counter])
        }
    }

    return (
        < Box >
            {fetching ? <Loader /> : <Slider title={currentMovie.Title}
                year={currentMovie.Year}
                poster={currentMovie.Poster}
                moveF={nextMovie}
                moveB={previousMovie}
                list={movies.length} />
            }
        </Box >
    )
};

export default memo(Home);

const Box = styled.div`
height:90%;
width: 100%;
margin: 60px auto 0;

@media (max-width: 900px) and (max-height: 450px) {
    height: 85%;
    padding-top: 20px;
}
`;