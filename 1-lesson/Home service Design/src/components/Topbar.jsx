import { IoLogoTux } from "react-icons/io";
import { Button } from "./Button";
import styles from "../styles/Topbar.module.scss";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";

export function Topbar() {
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about-us" },
  ];

  const onClick = () => {
    navigate("/login");
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
