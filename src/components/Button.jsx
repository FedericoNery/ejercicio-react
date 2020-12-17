import React from 'react'
import PropTypes from 'prop-types';

const Button = props => {
    const { id, disabled, type } = props
    return <>
        <button id={id} type={type} disabled={disabled} {...props}>{props.children}</button>
    </>
};

Button.propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
  };

export default Button;