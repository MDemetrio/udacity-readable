import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import { connect } from 'react-redux'
import NavBar from './NavBar';
import { fetchCategories } from "../../actions";

const HomeLink = styled(Link) `
    display: flex;
    justify-content: center;
    margin: 16px;
`
const StyledImg = styled.img`
    width: 12em;
`

class Header extends Component {
    componentDidMount() {
        this.props.fetchCategories();
      }
    render() {
        const { categories } = this.props
        return (
            <div>
                <HomeLink to="/">
                    <StyledImg src={logo} alt="readable-logo" />
                </HomeLink>
                {categories.length > 0 &&
                    <NavBar categories={categories} />
                }
            </div>
        );
    }
}

Header.propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  }

function mapStateToProps({ categories }) {
    return {
        categories: categories.categoriesList
    }
}

function mapDispatchToProps (dispatch) {
    return {
      fetchCategories: () => dispatch(fetchCategories()),
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Header)