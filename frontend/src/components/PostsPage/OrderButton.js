import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import MdKeyboardArrowUp from 'react-icons/lib/md/keyboard-arrow-up';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';

const IconButton = styled.button`
  background: none;
  border: none;
`
const OrderButton = (props) => {
  const { clickHandler, field, orderBy } = props;
  const icon = orderBy.ascending ? <MdKeyboardArrowDown size={30} /> : <MdKeyboardArrowUp size={30} />;

  return (
    <IconButton onClick={(e) => clickHandler(e, field)}>
      {field === orderBy.field && icon}
      {props.children}
    </IconButton>
  )
}

OrderButton.PropTypes = {
    clickHandler: PropTypes.func.isRequired, 
    field: PropTypes.string.isRequired, 
    orderBy: PropTypes.object.isRequired
};

export default OrderButton;