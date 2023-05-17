import styles from "./styles.module.scss";
import Dropdown from "react-dropdown";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function NameDropdown() {
  const data = useSelector((state) => state.covidSlice.data);
  const dataType = useSelector((state) => state.covidSlice.dataType);
  const [options, setOptions] = useState();
  const continentOptions = data.map((item) => {
    return {
      value: item.continent,
      label: item.continent,
      className: styles.item,
    };
  });
  const countryOptions = data.map((item) => {
    return {
      value: item.country,
      label: item.country,
      className: styles.item,
    };
  });
  //  Dropdown options change
  useEffect(() => {
    if (dataType === "Countries") {
      setOptions(countryOptions);
      console.log(options);
    } else {
      setOptions(continentOptions);
      console.log(options);
    }
  }, [data]);
  return (
    <div>
      <Dropdown
        menuClassName={styles.menu}
        controlClassName={styles.select}
        options={options}
      />
    </div>
  );
}
