import './style.css';
import PropTypes from 'prop-types';

export default function Button({ content }) {
  return (
    <main>
      <button type="button">{content}</button>
    </main>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
};
