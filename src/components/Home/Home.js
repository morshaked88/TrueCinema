import React from 'react';
import styled from 'styled-components'
import { useData } from '../../Store/movieProvider';

import Loader from '../Loading/Loading';
import Slider from '../Home/Slider/Slider';

const Home = () => {

    let { movies, currentMovie, fetching, setCurrent, counter, setCounter } = useData();


    const nextMovie = () => {
        if (counter >= 9) {
            setCounter(0)
            setCurrent(movies[counter])
        } else if (counter < 10) {
            setCurrent(movies[counter])
            setCounter(counter + 1)
        }
    }

    const previousMovie = () => {
        if (counter === 0) {
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
                moveB={previousMovie} />
            }
        </Box >
    )
};

export default Home;

const Box = styled.div`
height: 100%;
width: 100%;
`;