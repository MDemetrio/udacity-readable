import React, { Component } from 'react';
import styled from 'styled-components';
import TinySlider from "tiny-slider-react";
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';
import { StyledLink } from "../shared";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
    margin: 0 auto;
    max-width: 100%;
    
    @media (min-width: 700px) {
        max-width: 80%;
    }

    @media (min-width: 1080px) {
        max-width: 60%;
    }
`
const IconButton = styled.button`
  background: none;
  border: none;
`

const TinySliderContainer = styled.div`
  flex: 2 1 auto;
`

class NavBar extends Component {
    onGoTo = dir => this.ts.slider.goTo(dir);
    render() {
        const { categories } = this.props;
        const categoriesLength = categories.length;
        const settings = {
            nav: false,
            mouseDrag: true,
            controls: false,
            loop: false,
            responsive: {
                280: {
                    items: categoriesLength >= 2 ? 2 : categoriesLength
                },
                480: {
                    items: categoriesLength >= 3 ? 3 : categoriesLength
                },
                680: {
                    items: categoriesLength >= 6 ? 6 : categoriesLength
                }
            }
        }
        return (
            <Container>
                <IconButton type="button" onClick={() => this.onGoTo('prev')}><MdKeyboardArrowLeft size={30} /></IconButton>
                <TinySliderContainer>
                    <TinySlider settings={settings} ref={ts => this.ts = ts}>
                        {categories.map((c, index) => (
                            <StyledLink key={index} to={`/categories/${c.path}`}>{c.name}</StyledLink>
                        ))}
                    </TinySlider>
                </TinySliderContainer>

                <IconButton type="button" onClick={() => this.onGoTo('next')}><MdKeyboardArrowRight size={30} /></IconButton>
            </Container>
        );
    }
}

export default NavBar;