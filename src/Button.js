import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, handleSubmit, disabled }) => (
  <button disabled={disabled} onClick={handleSubmit}>
    {text}
  </button>
);
Button.propTypes = {
  text: PropTypes.string,
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool
};
export default Button;
