import React from 'react';
import styled from 'styled-components'

import Logo from '../Logo/Logo';
import Links from '../Links/Links';
import SlideMenu from './SlideMenu';
import { useData } from '../../Store/movieProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';


const Navbar = () => {
    const deviceWidth = window.innerWidth;
    const { isOpen, setOpen, setInput, userInput } = useData();

    const styledSearch = {
        color: 'white',
        fontSize: '20px',
        marginRight: '10px'
    }

    const styledX = {
        color: 'white',
        fontSize: '30px'
    }

    const getValue = (e) => {
        if (e.charCode === 13) {
            setInput(e.target.value)
            setOpen(false)

        }
    }


    const menu = deviceWidth < 770 ? <SlideMenu /> : <Logo />
    const searchInput = <Box2>
        <Input type='text' placeholder='Search Movie Title...' onKeyPress={(e) => getValue(e)}></Input>
        <FontA onClick={() => setOpen(!isOpen)}>
            <FontAwesomeIcon icon={faTimes} style={styledX} />
        </FontA>
    </Box2>;

    return (
        <>
            {isOpen ? searchInput :
                <Nav>
                    {menu}
                    <Box>
                        <SearchBox onClick={() => setOpen(!isOpen)} >
                            <FontAwesomeIcon icon={faSearch} style={styledSearch} />
                        </SearchBox>
                        <Links />
                    </Box>
                </Nav>
            }
        </>
    )
}


export default Navbar;

const FontA = styled.div`
height: 100%;
width: 20%;
display: flex;
justify-content: center;
align-items: center;

@media (min-width: 1000px) and (min-height: 700px){
    width:5%;
    justify-content: flex-end;
    }
`;

const Box2 = styled.div`
width: 100%;
background-color: #1e272e;
height: 60px;
display: flex;
justify-content: center;
`;

const Input = styled.input`
background-color: #1e272e;
height: 100%;
display: flex;
justify-content: space-between;
padding: 0 auto;
border: none;
margin: 0;
width: 80%;
outline: none;
color: white;
padding-left: 15px;
font-size: 25px;
font-family: 'Oswald', sans-serif;


@media (min-width: 1000px) and (min-height: 700px){
    width: 30%;
    background-color: rgba(255, 255 , 255, 0.6);
    color: black;
    }
`;

const Box = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`;

const SearchBox = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
width: auto;
`;

const Nav = styled.div`
width: 100%;
background-color: #1e272e;
height: 60px;
display: flex;
justify-content: space-between;
padding: 0 auto;


@media (min-width: 1000px) and (min-height: 700px){
    width: 100%;
    background-color: #1e272e;
    height: 70px;
    display: flex;
    padding: 5px 20%;
    justify-content: space-between;
    flex-direction: row;
    }
`;