import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link) `
  color: #95989A;
  text-decoration: none;
  text-align: center;
  font-size: 18px;

  &:active {
    color: #812DCB;
  }
`

export const IconButton = styled.button`
background: none;
border: none;
`