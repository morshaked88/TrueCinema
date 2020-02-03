import React, { useEffect } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useData } from '../../../Store/movieProvider';
import { Link } from 'react-router-dom';

import ErrorMsg from '../../404/Error';

const Slider = ({ title, year, poster, moveB, moveF }) => {

    let { currentMovie, myMovies, setMyMovies, setMovieID, movies, error, userInput, setError } = useData();

    useEffect(() => {

        return () => {
            setError(null)
        }
    }, [userInput])

    const style = {
        color: '#fff',
        fontSize: '50px',
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

    const BtnPhrase = myMovies.includes(currentMovie) ? <Like>Remove from Watchlist</Like> : <Like>Add to Watchlist</Like>;



    return (
        <Box>
            {error !== null ? <ErrorMsg msg={error} /> :
                <>
                    <ButtonArrow>
                        <FontAwesomeIcon icon={faArrowLeft} style={style} onClick={() => moveB()} />
                    </ButtonArrow>
                    <Movie>
                        <Box2 onClick={() => likeClicked()}>
                            {BtnPhrase}
                        </Box2>
                        <StyledLink to='/movie'>
                            <Poster src={poster} alt='Movie Poster' onClick={() => setMovieID(currentMovie.imdbID)} />
                        </StyledLink>
                        <DetailsBox>
                            <Title>{title}</Title>
                            <Year>{year}</Year>
                        </DetailsBox>
                    </Movie>
                    <ButtonArrow>
                        <FontAwesomeIcon icon={faArrowRight} style={style} onClick={() => moveF()} />
                    </ButtonArrow>
                    <MobileArrows>
                        <MobileArrowLeft>
                            <FontAwesomeIcon icon={faArrowLeft} style={style} onClick={() => moveB()} />
                        </MobileArrowLeft>
                        <MobileArrowRight>
                            <FontAwesomeIcon icon={faArrowRight} style={style} onClick={() => moveF()} />
                        </MobileArrowRight>
                    </MobileArrows>
                </>
            }
        </Box>
    )
};

export default Slider;

const Box = styled.div`
height: 100%;
width: 100%;
display: flex;
font-family: 'Oswald', sans-serif;
flex-direction: column;
overflow: auto;
padding: 0 20%;

@media (min-width: 1000px) and (min-height: 700px){
    flex-direction: row;
}
`;

const StyledLink = styled(Link)`
height: 70%;
cursor: pointer;

@media (min-width: 1000px) and (min-height: 700px){
    height: 60%;
    }
`;


const Poster = styled.img`
height: 100%
`;

const MobileArrows = styled.div`
display: flex;
width: 100%;
height: 20%;
box-sizing: border-box;
padding-bottom: 10%;


@media (min-width: 1000px) and (min-height: 700px){
    display: none;
}

@media (min-width: 768px) and (min-height: 1024px){
    height: auto;
}
`;

const MobileArrowLeft = styled.div`
width: 50%;
display: flex;
height: 100%;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;
`;

const MobileArrowRight = styled.div`
height: 100%;
width: 50%;
display: flex;
height: 100%;
flex: 1;
align-items: center;
justify-content: center;
`;

const Box2 = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
height: 10%;

@media (min-width: 1000px) and (min-height: 700px){
    height: 50px;
}
`;



const Like = styled.h4`
color: white;
margin-bottom: 10px;
font-size: 25px;
cursor: pointer;
transition: all 0.5s linear;
-webkit-tap-highlight-color: transparent;

&:hover{
    transform: scale(1.1);
    color: #d2dae2
}

@media (max-width: 360px) and (max-height: 570px){
    font-size: 22px;

}
`;


const ButtonArrow = styled.div`

display: none;

    @media (min-width: 1000px) and (min-height: 700px){
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-basis: 20%;
    cursor: pointer;
    height: 100%;
    flex-direction: column;
    -webkit-tap-highlight-color: transparent;
    }
`;

const Movie = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-top: 20px;
height: 70%;

@media (min-width: 1000px) and (min-height: 700px){
    margin-top: 80px;
    flex-basis: 60%;
    }

    @media (min-width: 768px) and (min-height: 1024px){
    height: 60%;
    margin-top: 90px;
}
`;

const DetailsBox = styled.div`
text-align: center;
`;


const Title = styled.h1`
color: white;
font-size: 20px;

@media (min-width: 1000px) and (min-height: 700px){
    font-size: 40px;
    }
`;

const Year = styled.h3`
color: white;
font-size: 35px;
`;