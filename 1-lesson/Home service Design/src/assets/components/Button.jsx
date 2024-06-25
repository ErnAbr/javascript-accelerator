import PropTypes from "prop-types";
import styles from "../styles/Button.module.scss";

export function Button({ children, buttonType, onClick }) {
  return (
    <button
      className={`${styles.button} ${
        buttonType === "primary" ? styles.primary : buttonType === "search" ? styles.search : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
