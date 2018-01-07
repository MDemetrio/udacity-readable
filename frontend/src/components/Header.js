import React, { Component } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const StyledLink = styled(Link) `
    display: flex;
    justify-content: center;
    margin: 16px;
`
const StyledImg = styled.img`
    width: 12em;
`

class Header extends Component {
    render() {
        return (
            <div>
                <StyledLink to="/">
                    <StyledImg src={logo} alt="readable-logo" />
                </StyledLink>
                <NavBar />
            </div>
        );
    }
}

export default Header;
