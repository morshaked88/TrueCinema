import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { useData } from '../../../Store/movieProvider';

const Card = ({ poster, name, year, item, id }) => {

    const { setMovieID, myMovies, setMyMovies } = useData();

    const styleTrash = {
        fontSize: '25px',
        cursor: 'pointer'
    }

    const removeMovie = () => {
        let newArr = myMovies.filter(item => {
            if (item.imdbID !== id) {
                return item;
            }
        })
        setMyMovies(newArr)
    }


    return (
        <MainBox>
            <StyledLink to='/movie'>
                <Box onClick={() => setMovieID(item)}>
                    <ImagePoster alt='poster' src={poster} />
                    <Box2>
                        <Title>{name}</Title>
                        <YearTitle>{year}</YearTitle>
                    </Box2>
                </Box>
            </StyledLink>
            <Box3 onClick={() => removeMovie()} id={id}>
                <FontAwesomeIcon icon={faTrashAlt} style={styleTrash}></FontAwesomeIcon>
            </Box3>
        </MainBox>

    );
}

export default Card;

const Box3 = styled.div`
width: 20%;
height: inherit;
display: flex;
align-items: center;
justify-content: center;
`;

const MainBox = styled.div`
display: flex;
width: 100%;
box-shadow: -1px 0px 17px -2px rgba(112,112,112,1);
padding: 5%;

@media (min-width: 1000px) and (min-height: 700px){
    padding: 30px;
    }
`;

const Box = styled.div`
color: white;
display: flex;
width: 100%;
cursor: pointer;

@media (min-width: 1000px) and (min-height: 700px){
    padding: 30px 0 30px 20%;
    }

`;

const StyledLink = styled(Link)`
list-style: none;
text-decoration: none;
height: auto;
width: 100%;
margin: 0;
`;

const ImagePoster = styled.img`
height: 80px;
margin-right: 20px;

@media (min-width: 1000px) and (min-height: 700px){
    height: 200px;
    }
`;

const Box2 = styled.div`
width:80%;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
`;

const Title = styled.h2`
margin: 0;
padding: 0;
font-size: 20px;

@media (min-width: 1000px) and (min-height: 700px){
    font-size: 40px;
    }
`;

const YearTitle = styled.h4`
margin: 0;
padding: 0;
@media (min-width: 1000px) and (min-height: 700px){
    font-size: 30px;
    }
`;