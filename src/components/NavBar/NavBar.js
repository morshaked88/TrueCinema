import React from 'react';
import styled from 'styled-components'

import Logo from '../Logo/Logo';
import Links from '../Links/Links';

const Navbar = () => {

    const deviceWidth = window.innerWidth;

    return (
        <Nav>
            <Logo />
            <Links />
        </Nav>)
}


export default Navbar;

const Nav = styled.div`
width: 100%;
background-color: #000;
height: 70px;
display: flex;
padding: 5px 0;
justify-content: space-between;

@media (min-width: 1000px) and (min-height: 700px){
    width: 100%;
    background-color: #1e272e;
    height: 70px;
    display: flex;
    padding: 5px 15%;
    justify-content: space-between;
    }
`;