import React from 'react';
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import { useData } from '../../Store/movieProvider';

const SlideMenu = () => {

    const { myMovies } = useData();

    const styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '36px',
            left: '25px',
            top: '12px'

        },
        bmBurgerBars: {
            background: 'white'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#1e272e',
            padding: '2.5em 1.5em 0',
            display: 'flex',
            flexDirection: 'column'
        },
        bmMorphShape: {
            fill: '#1e272e'
        },
        bmItemList: {
            padding: '0.8em',
            display: 'flex',
            flexDirection: 'column'
        },
        bmItem: {
            display: 'inline-block',
            outline: 'none'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }


    return (
        <Menu styles={styles}>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/My-Movies'>My Movies: {myMovies.length}</StyledLink>
        </Menu>
    )

};

export default SlideMenu;

const StyledLink = styled(Link)`
text-decoration: none;
color: #fff;
font-family: 'Oswald', sans-serif;
font-size: 22px;
-webkit-tap-highlight-color: transparent;
border: 1px  white;
height: auto;
margin: 10px 0;
`;

