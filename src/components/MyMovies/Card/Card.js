import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useData } from '../../../Store/movieProvider';

const Card = ({ poster, name, year, item }) => {

    const { setMovieID } = useData();


    return (
        <StyledLink to='/movie'>
            <Box onClick={() => setMovieID(item)}>
                <ImagePoster alt='poster' src={poster} />
                <Box2>
                    <Title>{name}</Title>
                    <YearTitle>{year}</YearTitle>
                </Box2>
            </Box>
        </StyledLink>
    );
}

export default Card;

const Box = styled.div`
color: white;
display: flex;
width: 100%;
padding: 30px;
cursor: pointer;
box-shadow: -1px 0px 17px -2px rgba(112,112,112,1);

@media (min-width: 1000px) and (min-height: 700px){
    padding: 30px 30%;
    }

`;

const StyledLink = styled(Link)`
list-style: none;
text-decoration: none;
`;

const ImagePoster = styled.img`
height: 200px;
margin-right: 20px;

@media (min-width: 1000px) and (min-height: 700px){
    height: 300px;
    }
`;

const Box2 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
`;

const Title = styled.h2`

@media (min-width: 1000px) and (min-height: 700px){
    font-size: 40px;
    }
`;

const YearTitle = styled.h4`
@media (min-width: 1000px) and (min-height: 700px){
    font-size: 30px;
    }
`;