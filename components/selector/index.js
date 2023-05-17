import styles from "./style.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeDataType } from "@/redux/covidSlice";

export default function Selector() {
  const [selected, setSelected] = useState("Continents");
  const disptach = useDispatch();

  const handleSelect = (e) => {
    setSelected(e.target.value);
    disptach(changeDataType(e.target.value));
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
