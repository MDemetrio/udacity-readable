import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline
`


export const StyledTitle = styled.span`
    font-size: 1.8em;
    color: #95989A;
`

export const StyledLink = styled(Link)`
  color: #95989A;
  text-decoration: none;
  text-align: center;

  &:active {
    color: #812DCB;
  }
`

export const IconButton = styled.button`
background: none;
border: none;
`

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    color: #95989A;


`

export const FooterItemContainer = styled.div`
    display: flex;
    font-size: 1.2em;
`

export const BodyContainer = styled.div`
    margin: 32px 0;
    color: #95989A;
`

export const UpVoteIcon = () => (
  <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="1225 522 20 16">
      <path fill="#000" d="M12,7.77,18.39,18H5.61L12,7.77M12,4,2,20H22Z" transform="translate(1223 518)" />
  </svg>
);

export const DownVoteIcon = () => (
  <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="1249 522 20 16">
      <path fill="#000" d="M12,7.77,18.39,18H5.61L12,7.77M12,4,2,20H22Z" transform="translate(1271 542) rotate(180)" />
  </svg>
);