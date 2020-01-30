import React from 'react';
import styled from 'styled-components'
import { useData } from '../../Store/movieProvider';

import Card from '../MyMovies/Card/Card';
import Empty from '../MyMovies/Empty/Empty';

const MyMoviesPage = () => {
    const { myMovies } = useData();


    return (
        <Box>
            {myMovies.length === 0 ? <Empty amount={myMovies.length} /> : myMovies.map(item => (
                <Card key={item.imdbID}
                    name={item.Title}
                    year={item.Year}
                    poster={item.Poster}
                    item={item.imdbID}
                />

            ))}
        </Box>
    )
};

export default MyMoviesPage;

const Box = styled.div`
height: 100%;
width: 100%;
color: white;
overflow: scroll;
`;