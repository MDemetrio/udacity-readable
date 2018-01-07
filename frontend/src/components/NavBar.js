import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TinySlider from "tiny-slider-react";
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const IconButton = styled.button`
  background: none;
  border: none;
  flex: 2 2 auto
`

const StyledLink = styled(Link) `
  color: #95989A;
  text-decoration: none;
  text-align: center;
  font-size: 1em;

  &:active {
    color: #812DCB;
  }
`
const TinySliderContainer = styled.div`
  @media (max-width: 700px) {
    width: 70%;
}
`

class NavBar extends Component {
    onGoTo = dir => this.ts.slider.goTo(dir)
    render() {
        const settings = {
            nav: false,
            mouseDrag: true,
            controls: false,
            loop: false,
            items: 3,
            responsive: {
                700: {
                    items: 5
                }
            }
        }
        return (
            <Container>
                <IconButton type="button" onClick={() => this.onGoTo('prev')}><MdKeyboardArrowLeft size={30} /></IconButton>
                <TinySliderContainer>
                    <TinySlider settings={settings} ref={ts => this.ts = ts}>
                        <StyledLink to="/categories/1">Category 1</StyledLink>
                        <StyledLink to="/categories/2">Category 2</StyledLink>
                        <StyledLink to="/categories/3">Category 3</StyledLink>
                        <StyledLink to="/categories/4">Category 4</StyledLink>
                        <StyledLink to="/categories/5">Category 5</StyledLink>
                        <StyledLink to="/categories/6">Category 6</StyledLink>
                        <StyledLink to="/categories/7">Category 7</StyledLink>
                        <StyledLink to="/categories/8">Category 8</StyledLink>
                    </TinySlider>
                </TinySliderContainer>

                <IconButton type="button" onClick={() => this.onGoTo('next')}><MdKeyboardArrowRight size={30} /></IconButton>
            </Container>
        );
    }
}

export default NavBar;
