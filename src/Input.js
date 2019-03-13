import React from 'react';
import PropTypes from 'prop-types';
const Input = ({ option, handleChange }) => (
  <label>
    <input
      type="radio"
      сhecked={option.checked}
      value={option.name}
      name="country"
      onChange={handleChange}
      disabled={option.disabled}
    />
    {option.name}
  </label>
);
Input.propTypes = {
  option: PropTypes.object,
  handleChange: PropTypes.func
};
export default Input;
