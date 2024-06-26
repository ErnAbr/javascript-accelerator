import { Card } from "./Card";
import { cardProps } from "../constants/cardData";
import styles from "../styles/CardGrid.module.scss";

export const CardGrid = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Popular Business</h3>
      <div className={styles.grid}>
        {cardProps.map((props, index) => (
          <Card key={index} {...props} />
        ))}
      </div>
    </div>
  );
};
