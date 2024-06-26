import { Button } from "./Button";
import styles from "../styles/Category.module.scss";
import { MdOutlineCleaningServices, MdPlumbing, MdElectricBolt } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { PiPaintBrushHouseholdBold } from "react-icons/pi";
import { FaTruckMoving } from "react-icons/fa6";
import { IconContext } from "react-icons";

export function Category() {
  const categories = [
    { icon: MdOutlineCleaningServices, color: "#BA1FED", text: "Cleaning" },
    { icon: GiAutoRepair, color: "#EEB625", text: "Repair" },
    { icon: PiPaintBrushHouseholdBold, color: "#049B9D", text: "Painting" },
    { icon: FaTruckMoving, color: "#E53E3E", text: "Shifting" },
    { icon: MdPlumbing, color: "#E99114", text: "Plumbing" },
    { icon: MdElectricBolt, color: "#0064C2", text: "Electric" },
  ];

  return (
    <div className={styles.categoryContainer}>
      {categories.map((category, index) => (
        <Button key={index} buttonType="square">
          <div>
            <IconContext.Provider value={{ color: category.color, size: "2em" }}>
              <category.icon />
            </IconContext.Provider>
            {category.text}
          </div>
        </Button>
      ))}
    </div>
  );
}
