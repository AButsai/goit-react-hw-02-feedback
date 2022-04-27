import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = props => {
  const { message } = props;
  return <span className={s.title}>{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
