import { IoLogoTux } from "react-icons/io";
import { Button } from "./Button";
import styles from "../styles/Topbar.module.scss";
import { IconContext } from "react-icons";

export function Topbar() {
  const links = ["Home", "Services", "About Us"];

  return (
    <div className={styles.container}>
      <div className={styles.leftSideStyles}>
        <IconContext.Provider value={{ color: "#7A58EF", size: "4em", title: "Logoipsum" }}>
          <IoLogoTux />
        </IconContext.Provider>
        <span>Logoipsum</span>
        <nav className={styles.navStyles}>
          <ul className={styles.ulStyle}>
            {links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.rightSideStyles}>
        <Button buttonType={"primary"}>Login / Sign Up</Button>
      </div>
    </div>
  );
}
