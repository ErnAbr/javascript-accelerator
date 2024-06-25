import { IoLogoTux } from "react-icons/io";
import { Button } from "./Button";
import styles from "../styles/Topbar.module.scss";
import { IconContext } from "react-icons";

export function Topbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSideStyles}>
        <IconContext.Provider value={{ color: "#7A58EF", size: "4em", title: "Logoipsum" }}>
          <IoLogoTux />
        </IconContext.Provider>
        <span>Logoipsum</span>
        <nav className={styles.navStyles}>
          <ul className={styles.ulStyle}>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightSideStyles}>
        <Button buttonType={"primary"}>Login / Sign Up</Button>
      </div>
    </div>
  );
}
