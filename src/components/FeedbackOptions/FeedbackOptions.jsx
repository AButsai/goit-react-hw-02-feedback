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
      {options.map((name, index) => {
        return (
          <button
            key={index} // Знаю что так делать нельзя но это чтобы не ругался React так как нет id;
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
