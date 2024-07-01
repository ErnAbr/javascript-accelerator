import { IoLogoTux } from "react-icons/io";
import { Button } from "../Button/Button";
import styles from "./Topbar.module.scss";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../navigation/routes";

const navLinks = [
  { name: "Home", path: routes.HOME },
  { name: "Services", path: routes.SERVICES },
  { name: "About Us", path: routes.ABOUT_US },
];

export function Topbar() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(routes.LOGIN);
  };

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.logoSection}>
        <IconContext.Provider value={{ color: "#7A58EF", size: "4em", title: "Logoipsum" }}>
          <IoLogoTux />
        </IconContext.Provider>
        <span>Logoipsum</span>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {navLinks.map((link, index) => (
              <li key={index} className={styles.navItem}>
                <Link className={styles.navLink} to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.authSection}>
        <Button onClick={onClick} buttonType="primary">
          Login / Sign Up
        </Button>
      </div>
    </div>
  );
}
