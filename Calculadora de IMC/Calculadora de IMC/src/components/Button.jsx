import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ id, text }) => {
  return <button id={id}>{text}</button>;
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button