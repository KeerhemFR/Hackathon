import PropTypes from 'prop-types';
import './style.css';

export default function EnnemyCard({ ennemyImg, ennemyName }) {
  return (
    <article className="ennemyCard">
      <img src={ennemyImg} alt={ennemyName} />
      <p>{ennemyName}&nbsp;&nbsp;</p>
    </article>
  );
}

EnnemyCard.propTypes = {
  ennemyImg: PropTypes.string.isRequired,
  ennemyName: PropTypes.string.isRequired,
};
