import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import { connect } from 'react-redux'
import NavBar from './NavBar';

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
        const { categories } = this.props
        return (
            <div>
                <StyledLink to="/">
                    <StyledImg src={logo} alt="readable-logo" />
                </StyledLink>
                {categories.length > 0 &&
                    <NavBar categories={categories} />
                }
            </div>
        );
    }
}

function mapStateToProps({ categories }) {
    return {
        categories: categories.categoriesList
    }
}

export default connect(mapStateToProps)(Header)