import React from 'react';
import styled from 'styled-components'

const ErrorMsg = ({ msg }) => (
    <Box>
        <Title>{msg}</Title>
    </Box>
);

export default ErrorMsg;


const Box = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
`;

const Title = styled.h1`
color: white;

@media (min-width: 1000px) and (min-height: 700px){
    font-size: 60px;
    margin-top: 30px;
}
`;