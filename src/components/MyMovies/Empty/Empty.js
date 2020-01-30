import React from 'react';
import styled from 'styled-components'

const Empty = ({ amount }) => (
    <Box>
        <Title>You have {amount} movies on your watchlist</Title>
    </Box>
);

export default Empty;

const Box = styled.div`
width: 100%;
padding-top: 20px;
text-align: center;
`;

const Title = styled.h4`
color: white;
`;