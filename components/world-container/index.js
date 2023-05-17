import Card from "../card";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorldData } from "@/services";
import { useEffect } from "react";

export default function WorldContainer() {
  const dispatch = useDispatch();
  const worldData = useSelector((state) => state.covidSlice.worldData);
  const worldDataStatus = useSelector(
    (state) => state.covidSlice.worldDataStatus
  );
  useEffect(() => {
    dispatch(fetchWorldData());
    console.log(worldData);
  }, [dispatch]);
  return (
    <div className={styles.worldContainer}>
      <h1>Worldwide Covid Statistics</h1>
      <div className={styles.cardContainer}>
        <Card
          fetchStatus={worldDataStatus}
          data={worldData ? worldData.totalCases : NaN}
          status="case"
        ></Card>
        <Card
          fetchStatus={worldDataStatus}
          data={worldData ? worldData.totalRecovered : NaN}
          status="recovered"
        ></Card>
        <Card
          fetchStatus={worldDataStatus}
          data={worldData ? worldData.totalDeaths : NaN}
          status="death"
        ></Card>
      </div>
    </div>
  );
}
