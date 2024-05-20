import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({
  options,
  onOptionClick,
  isResetButtonVisible,
  handleResetFeedback,
}) => {
  return (
    <div className={styles.optionsWrapper}>
      {options.map((item) => (
        <button
          className={styles.btn}
          onClick={() => onOptionClick(item)}
          key={item}
        >
          {item}
        </button>
      ))}
      {isResetButtonVisible && (
        <button className={styles.btn} onClick={handleResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;

Options.propTypes = {
  options: PropTypes.array,
  onOptionClick: PropTypes.func,
  isResetButtonVisible: PropTypes.bool,
  handleResetFeedback: PropTypes.func,
};