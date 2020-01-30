import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useData } from '../../../Store/movieProvider';

const Slider = ({ title, year, poster, moveB, moveF }) => {

    let { currentMovie, myMovies, setMyMovies } = useData();


    const style = {
        color: '#fff',
        fontSize: '50px'
    }


    const likeClicked = () => {
        if (myMovies.includes(currentMovie)) {
            const newMovies = myMovies.filter(obj => {
                if (obj.imdbID !== currentMovie.imdbID) {
                    return obj;
                }
            })

            setMyMovies(newMovies)
        } else {
            setMyMovies([...myMovies, currentMovie])
        }

    }

    console.log(myMovies)


    return (
        <Box>
            <ButtonArrow>
                <FontAwesomeIcon icon={faArrowLeft} style={style} onClick={() => moveB()} />
            </ButtonArrow>
            <Movie>
                <Box2 onClick={() => likeClicked()}>
                    <Like>Add to Watchlist</Like>
                </Box2>
                <Poster src={poster} alt='Movie Poster' />
                <DetailsBox>
                    <Title>{title}</Title>
                    <Year>{year}</Year>
                </DetailsBox>
            </Movie>
            <ButtonArrow>
                <FontAwesomeIcon icon={faArrowRight} style={style} onClick={() => moveF()} />
            </ButtonArrow>

        </Box>
    )
};

export default Slider;

const Box = styled.div`
height: 100%;
width: 100%;
display: flex;
font-family: 'Oswald', sans-serif;
`;

const Box2 = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
height: 50px;
`;

const Like = styled.h4`
color: white;
margin-bottom: 10px;
margin-right: 15px;
font-size: 30px;
cursor: pointer;
transition: all 0.5s linear;

&:hover{
    transform: scale(1.1);
    color: #d2dae2
}
`;

const Movie = styled.div`
flex-basis: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-top: 80px;
`;

const DetailsBox = styled.div`
text-align: center;
`;

const ButtonArrow = styled.div`
flex-basis: 20%;
align-items: center;
justify-content: center;
display: flex;
cursor: pointer;
`;


const Poster = styled.img`
height: 60%;
`;

const Title = styled.h1`
color: white;
font-size: 40px;
`;

const Year = styled.h3`
color: white;
font-size: 35px;
`;