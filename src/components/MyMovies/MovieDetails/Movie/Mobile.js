import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieMobile = ({ obj }) => {

    const starStyle = {
        color: '#f9ca24',
        fontSize: '30px',
    }

    const info = {
        ...obj
    }

    return (
        <Box>
            <InfoBox>
                <TitleBox>
                    <Title>{info.Title}</Title>
                    <Year>({info.Year})</Year>
                </TitleBox>
                <Info>
                    <InfoTxt>{info.Rated}</InfoTxt> |
                    <InfoTxt>{info.Runtime}</InfoTxt> |
                    <InfoTxt>{info.Genre}</InfoTxt>
                </Info>
            </InfoBox>
            <InfoBox2>
                <Poster alt='poster' src={info.Poster} />
                <PlotBox>
                    {info.Plot}
                </PlotBox>
            </InfoBox2>
            <RatingBox>
                <StarsBox>
                    <FontAwesomeIcon icon={faStar} style={starStyle} />
                    <Rating>{info.imdbRating}/10</Rating>
                </StarsBox>
                <VoteBox>
                    <Rating>Votes: {info.imdbVotes}</Rating>
                </VoteBox>
            </RatingBox>
            <MovieBox>
                <DataBox>
                    <DataTitle>
                        <Rating>Director: </Rating>
                    </DataTitle>
                    <DataInfo>
                        {info.Director}
                    </DataInfo>
                </DataBox>
                <DataBox>
                    <DataTitle>
                        <Rating>Writers: </Rating>
                    </DataTitle>
                    <DataInfo>
                        {info.Writer}
                    </DataInfo>
                </DataBox>
                <DataBox>
                    <DataTitle>
                        <Rating>Stars: </Rating>
                    </DataTitle>
                    <DataInfo>
                        {info.Actors}
                    </DataInfo>
                </DataBox>
                <DataBox>
                    <DataTitle>
                        <Rating>Awards: </Rating>
                    </DataTitle>
                    <DataInfo>
                        {info.Awards}
                    </DataInfo>
                </DataBox>
                <DataBox>
                    <DataTitle>
                        <Rating>Box Office: </Rating>
                    </DataTitle>
                    <DataInfo>
                        {info.BoxOffice}
                    </DataInfo>
                </DataBox>
            </MovieBox>
        </Box>
    )
};

export default MovieMobile;

const Box = styled.div`
width: 100%;
height: 100%;
overflow: auto;
font-family: 'Oswald', sans-serif;
background-color: white;
color: black;
`;

const StarsBox = styled.div`
height: 100%;
width: 50%;
display: flex;
align-items: center;
`;

const DataInfo = styled.div`
margin-left: 10px;
`;

const MovieBox = styled.div`
width: 100%;
display: flex;
height: 100%;
flex-direction:column;
`;

const DataBox = styled.div`
width: 100%;
display: flex;
align-items: center;
border-bottom: 0.3px solid #dbdbdb;
flex: 1;
`;

const DataTitle = styled.div`

`;

const VoteBox = styled.div`
height: 100%;
width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;
`;

const Rating = styled.h6`
font-size: 16px;
margin-left: 10px;
`;

const RatingBox = styled.div`
background-color: #eaeaea;
border-bottom: 0.3px solid #dbdbdb;
width: 100%;
height: 10vh;
display: flex;
padding: 0 10%;
`;

const InfoBox = styled.div`
background-color: #eaeaea;
border-bottom: 0.3px solid #dbdbdb;
height: auto;
`;

const InfoBox2 = styled.div`
display: flex;
height: 20%;
padding: 10px;
border-bottom: 0.3px solid #dbdbdb;
height: auto;
`;

const TitleBox = styled.div`
display: flex;
width: 100%;
padding: 5px;
text-align: left;
`;

const Title = styled.h1`
font-size: 40px;
`;

const Info = styled.div`
display: flex;
width: 100%;
padding: 0 5px 1px 5px;
height: auto;
text-align: left;
align-items: center;
`;

const InfoTxt = styled.p`
margin: 0 5px;
font-size: 10px;
`;

const Year = styled.h6`
display: flex;
align-items: center;
margin-left: 3%;
font-size: 15px;
`;



const Poster = styled.img`
height: 150px;
`;

const PlotBox = styled.div`
text-align: left;
margin-left: 10px;
font-size: 18px;
`;