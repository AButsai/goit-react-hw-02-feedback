import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;

  return (
    <button
      className={s.button}
      type="button"
      onClick={onLeaveFeedback}
      onMouseDown={e => {
        e.target.style.backgroundColor = '#0a95ff';
      }}
      onMouseUp={e => {
        e.target.style.backgroundColor = 'transparent';
      }}
    >
      {options.title}
    </button>
  );
};

FeedbackOptions.propsType = {
  options: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
