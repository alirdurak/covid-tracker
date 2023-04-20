import styles from "./style.module.scss";
import { useState } from "react";

export default function Selector() {
  const [selected, setSelected] = useState("Continents");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className={styles.selectors}>
      <button
        className={
          selected == "Continents" ? styles.activeButton : styles.button
        }
        value="Continents"
        onClick={handleSelect}
      >
        Continents
      </button>
      <button
        className={
          selected == "Countries" ? styles.activeButton : styles.button
        }
        value="Countries"
        onClick={handleSelect}
      >
        Countries
      </button>
    </div>
  );
}
