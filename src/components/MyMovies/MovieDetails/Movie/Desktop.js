import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieDesktop = ({ obj }) => {

    const styledIcon = {
        color: '#f9ca24',
        fontSize: '30px'
    }

    const info = {
        ...obj
    }

    return (
        <Box>
            <MainBox>
                <ImageBox>
                    <Poster src={info.Poster} alt='poster' />
                </ImageBox>
                <DetailsBox>
                    <MovieDetails>
                        <TitleBox>
                            <TitleName>
                                {info.Title}
                            </TitleName>
                        </TitleBox>
                        <Rating>
                            <Box2>
                                <FontAwesomeIcon icon={faStar} style={styledIcon} />
                                <Paragh>{info.imdbRating}/10</Paragh>
                            </Box2>
                            <Paragh>Votes: {info.imdbVotes}</Paragh>
                        </Rating>
                    </MovieDetails>
                    <DataBox>
                        <DataCont>Rated: {info.Rated}</DataCont>
                        |
                        <DataCont>Runtime: {info.Runtime}</DataCont>
                        |
                        <DataCont>Genre: {info.Genre}</DataCont>
                        |
                        <DataCont>Release Date: {info.Released}</DataCont>
                    </DataBox>
                </DetailsBox>
            </MainBox>
            <Seperator></Seperator>
            <Rest>
                <RestBox><RestDet>Plot: </RestDet>{info.Plot}</RestBox>
                <RestBox><RestDet>Director: </RestDet>{info.Director}</RestBox>
                <RestBox><RestDet>Writers: </RestDet>{info.Writer}</RestBox>
                <RestBox><RestDet>Stars: </RestDet>{info.Actors}</RestBox>
                <RestBox><RestDet>Awards: </RestDet>{info.Awards}</RestBox>
                <RestBox><RestDet>Box Office: </RestDet>{info.BoxOffice}</RestBox>
            </Rest>
        </Box>
    );

}


export default MovieDesktop;


const Box = styled.div`
height: 100vh;
width: 100%;
padding: 30px 20%;
font-family: 'Oswald', sans-serif;
overflow: auto;
background-color: white;
color: black;
`;

const Seperator = styled.div`
width: 100%;
height: 3px;
margin: 20px 0;
background-color: rgba(112,112,112,1);

`;

const Rest = styled.div`
display: flex;
width: 100%;
flex-direction: column;
flex-basis: 100%;
`;

const RestBox = styled.div`
display: flex;
margin: 10px 0;
height: auto;
align-items: center;
`;

const RestDet = styled.h3`
font-size: 20px;
margin-right: 10px;
`;

const Box2 = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;

const MainBox = styled.div`
width:100%;
display: flex;
height: 40%;
`;

const ImageBox = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const Poster = styled.img`
height:300px;
`;

const DetailsBox = styled.div`
display: flex;
flex-direction: column;
height: 400px;
width: 100%;
margin-left: 50px;
`;

const MovieDetails = styled.div`
display: flex;
height: 70%;
width: 100%;
justify-content: space-between;
align-items: center;
`;

const DataBox = styled.div`
display: flex;
height: 30%;
flex-direction: row;
`;

const DataCont = styled.div`
margin: 0 30px;
font-size: 15px;
`;

const TitleBox = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
`;

const Rating = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-top: 10%;
`;

const TitleName = styled.h1`
font-size: 50px;
`;

const Paragh = styled.p`
font-size: 25px;
`;