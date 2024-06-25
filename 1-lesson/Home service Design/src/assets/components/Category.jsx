import { Button } from "./Button";
import styles from "../styles/Category.module.scss";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { PiPaintBrushHouseholdBold } from "react-icons/pi";
import { FaTruckMoving } from "react-icons/fa6";
import { MdPlumbing } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { IconContext } from "react-icons";

export function Category() {
  return (
    <div className={styles.categoryContainer}>
      <Button buttonType="square">
        <div>
          <IconContext.Provider value={{ color: "#BA1FED", size: "2em" }}>
            <MdOutlineCleaningServices />
          </IconContext.Provider>
          Cleaning
        </div>
      </Button>
      <Button buttonType="square">
        <div>
          <IconContext.Provider value={{ color: "#EEB625", size: "2em" }}>
            <GiAutoRepair />
          </IconContext.Provider>
          Repair
        </div>
      </Button>
      <Button buttonType="square">
        <div>
          <IconContext.Provider value={{ color: "#049B9D", size: "2em" }}>
            <PiPaintBrushHouseholdBold />
          </IconContext.Provider>
          Painting
        </div>
      </Button>
      <Button buttonType="square">
        <div>
          <IconContext.Provider value={{ color: "#E53E3E", size: "2em" }}>
            <FaTruckMoving />
          </IconContext.Provider>
          Shifting
        </div>
      </Button>
      <Button buttonType="square">
        <div>
          <IconContext.Provider value={{ color: "#E99114", size: "2em" }}>
            <MdPlumbing />
          </IconContext.Provider>
          Plumbing
        </div>
      </Button>
      <Button buttonType="square">
        <div>
          <IconContext.Provider value={{ color: "#0064C2", size: "2em" }}>
            <MdElectricBolt />
          </IconContext.Provider>
          Electric
        </div>
      </Button>
    </div>
  );
}
