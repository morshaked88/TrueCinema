import React from 'react';
import styled from 'styled-components'

import siteLogo from '../../assets/images/Logo.png';

const logo = () => (
    <Frame>
        <LogoImg src={siteLogo} alt="logo" />
    </Frame>
);

export default logo;

const Frame = styled.div`
height: 100%;
display: flex;
box-sizing: border-box;
width: 100px;
`;

const LogoImg = styled.img`
height: 100%;
`;