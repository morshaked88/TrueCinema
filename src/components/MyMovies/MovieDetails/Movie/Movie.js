import React from 'react';
import styled from 'styled-components';
import { useData } from '../../../../Store/movieProvider';

import MovieDesktop from './Desktop';
import MovieMobile from './Mobile';
import Empty from '../../Empty/Empty';


const Movie = () => {

    const { movieQ, movieID } = useData();


    const mobile = <MovieMobile obj={movieQ} />
    const desktop = <MovieDesktop obj={movieQ} />

    const listFull = (movieID === null)

    const screenWidth = window.innerWidth;
    const show = screenWidth <= 768 ? mobile : desktop;


    return (
        <Box>
            {listFull ? <Empty /> : show}
        </Box>
    );

}


export default Movie;

const Box = styled.div`
height:100%;
width: 100%;
overflow: auto;
`;
