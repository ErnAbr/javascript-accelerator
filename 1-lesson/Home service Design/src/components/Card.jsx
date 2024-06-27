import PropTypes from "prop-types";
import { Button } from "./Button";
import styles from "../styles/Card.module.scss";

export const Card = ({ image, serviceCategory, serviceType, servicePersonName, serviceAddress }) => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.imgStyle} src={image} alt="card-image" />
        <div className={styles.cardBody}>
          <div>
            <div className={styles.serviceCategory}>{serviceCategory}</div>
          </div>
          <h4>{serviceType}</h4>
          <div>
            <div className={styles.servicePersonName}>{servicePersonName}</div>
            <p>{serviceAddress}</p>
          </div>
          <Button buttonType="primary">Book Now</Button>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  serviceCategory: PropTypes.string.isRequired,
  serviceType: PropTypes.string.isRequired,
  servicePersonName: PropTypes.string.isRequired,
  serviceAddress: PropTypes.string.isRequired,
};
