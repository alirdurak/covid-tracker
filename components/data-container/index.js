import Card from "../card";
import styles from "./style.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContinentsData, fetchCountriesData } from "@/services";
export default function DataContainer() {
  const dispatch = useDispatch();
  const dataType = useSelector((state) => state.covidSlice.dataType);
  const fetchStatus = useSelector((state) => state.covidSlice.dataStatus);
  useEffect(() => {
    if (dataType === "Countries") {
      dispatch(fetchCountriesData());
    } else {
      dispatch(fetchContinentsData());
    }
  }, [dataType]);
  return (
    <div className={styles.container}>
      <Card status="case" fetchStatus={fetchStatus} />
      <Card status="recovered" fetchStatus={fetchStatus} />
      <Card status="death" fetchStatus={fetchStatus} />
    </div>
  );
}
