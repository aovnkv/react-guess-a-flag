import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ optionSubmitted, correct, correctOption, userChoice }) => {
  const message = correct
    ? `You're right. The flag's country is ${userChoice}`
    : `Oops. Not right. The flag's country is ${correctOption.name}`;
  const style = optionSubmitted
    ? correct
      ? { display: 'block', color: 'green', border: '2px solid green' }
      : { display: 'block', color: 'red', border: '2px solid red' }
    : { display: 'none' };
  return (
    <div className="message" style={style}>
      <p>{message}</p>
    </div>
  );
};
Message.propTypes = {
  correct: PropTypes.bool,
  optionSubmitted: PropTypes.bool,
  userChoice: PropTypes.string,
  correctOption: PropTypes.object
};
export default Message;
