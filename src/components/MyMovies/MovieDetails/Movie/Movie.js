import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../../Store/movieProvider';

import MovieDesktop from './Desktop';
import MovieMobile from './Mobile';


const Movie = () => {


    const { movieQ } = useData();


    const mobile = <MovieMobile obj={movieQ} />
    const desktop = <MovieDesktop obj={movieQ} />

    const screenWidth = window.innerWidth;
    const show = screenWidth < 768 ? mobile : desktop;



    return (
        <Box>
            {show}
        </Box>
    );

}


export default Movie;

const Box = styled.div`
height:100%;
width: 100%;
overflow: auto;
`;
