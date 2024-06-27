import PropTypes from "prop-types";
import { Card } from "./Card";
import { cardProps } from "../constants/cardData";
import styles from "../styles/CardGrid.module.scss";

export const CardGrid = ({ category }) => {
  const filteredItems = category
    ? cardProps.filter((props) => props.serviceCategory.toLocaleLowerCase() === category)
    : cardProps;

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Popular Business</h3>
      <div className={styles.grid}>
        {filteredItems.map((props, index) => (
          <Card key={index} {...props} />
        ))}
      </div>
    </div>
  );
};

CardGrid.propTypes = {
  category: PropTypes.string,
  serviceCategory: PropTypes.string,
};
