import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { useData } from '../../Store/movieProvider';


const Links = () => {

    const { myMovies } = useData();
    return (
        <Nav>
            <List>
                <StyledList to='/'>Home</StyledList>
            </List>
            <List>
                <StyledList to='/My-Movies'>My Movies: {myMovies.length}</StyledList>
            </List>
        </Nav>
    );
}


export default Links;

const Nav = styled.ul`
height: 100%;
display: flex;
align-items: center;
list-style: none;
`;

const StyledList = styled(Link)`
text-decoration: none;
color: #fff;
font-family: 'Oswald', sans-serif;
font-size: 22px;

&:visited{
    text-decoration: none;
}

`;

const List = styled.li`
margin: 15px;
transition: 0.5s all;

&:hover{
    transform: scale(1.1);
}

`;

