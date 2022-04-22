import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div>
      <p className={s.title}>Good: {good}</p>
      <p className={s.title}>Neutral: {neutral}</p>
      <p className={s.title}>Bad: {bad}</p>
      <p className={s.title}>Total: {total}</p>
      <p className={s.title}>Positive feddback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export { Statistics };
