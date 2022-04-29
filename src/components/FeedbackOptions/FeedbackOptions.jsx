import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function firstСapital(str) {
  if (str === '') {
    return '';
  }

  return str[0].toUpperCase() + str.slice(1);
}

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;

  return (
    <div className={s.btnWrap}>
      {options.map(name => {
        return (
          <button
            key={name}
            className={s.button}
            type="button"
            onClick={() => {
              onLeaveFeedback(name);
            }}
            onMouseDown={e => {
              e.target.style.backgroundColor = '#0a95ff';
            }}
            onMouseUp={e => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            {firstСapital(name)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propsType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { FeedbackOptions };
