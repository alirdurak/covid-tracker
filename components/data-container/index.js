import Card from "../card";
import styles from "./style.module.scss";
import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContinentsData, fetchCountriesData } from "@/services";
export default function DataContainer() {
  const dispatch = useDispatch();
  const dataType = useSelector((state) => state.covidSlice.dataType);
  const fetchStatus = useSelector((state) => state.covidSlice.dataStatus);
  const location = useSelector((state) => state.covidSlice.locationValue);
  const data = useSelector((state) => state.covidSlice.data);
  // Data fetch options
  useEffect(() => {
    if (dataType === "Countries") {
      dispatch(fetchCountriesData());
    } else {
      dispatch(fetchContinentsData());
    }
  }, [dataType]);

  // Showed data
  const showedData = data.filter((item) => {
    if (dataType === "Countries") {
      return item.country === location;
    } else if (dataType === "Continents") {
      return item.continent === location;
    } else {
      return null;
    }
  });
  console.log(showedData);
  return (
    <div className={styles.container}>
      <Card
        status="case"
        fetchStatus={fetchStatus}
        data={showedData[0] ? showedData[0].totalCases : NaN}
      />
      <Card
        status="recovered"
        fetchStatus={fetchStatus}
        data={showedData[0] ? showedData[0].totalRecovered : NaN}
      />
      <Card
        status="death"
        fetchStatus={fetchStatus}
        data={showedData[0] ? showedData[0].totalDeaths : NaN}
      />
    </div>
  );
}
