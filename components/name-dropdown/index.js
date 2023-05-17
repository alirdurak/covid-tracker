import styles from "./styles.module.scss";
import Dropdown from "react-dropdown";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { changeLocationValue } from "@/redux/covidSlice";

export default function NameDropdown() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.covidSlice.data);
  const dataType = useSelector((state) => state.covidSlice.dataType);
  const [options, setOptions] = useState();
  const [locationValue, setLocationValue] = useState();
  // Value change handle
  const handleChange = (e) => {
    setLocationValue(e.value);
  };
  // Global locationValue Change
  useEffect(() => {
    dispatch(changeLocationValue(locationValue));
  }, [locationValue]);
  //  Dropdown options
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
    } else {
      setOptions(continentOptions);
    }
  }, [data]);
  return (
    <div>
      <Dropdown
        menuClassName={styles.menu}
        controlClassName={styles.select}
        options={options}
        value={locationValue}
        onChange={handleChange}
      />
    </div>
  );
}
