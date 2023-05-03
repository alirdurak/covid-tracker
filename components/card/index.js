import styles from "./styles.module.scss";
import { TailSpin } from "react-loader-spinner";
import { BsExclamationOctagon } from "react-icons/bs";
export default function Card({ status, data, fetchStatus }) {
  let style;

  switch (status) {
    case "case":
      style = styles.case;
      break;
    case "recovered":
      style = styles.recovered;
      break;
    case "death":
      style = styles.death;
      break;
  }
  return (
    <div className={style}>
      {fetchStatus === "success" && (
        <>
          <div>{data}</div>
          <h3>{status.toString().toUpperCase()}</h3>
        </>
      )}
      {fetchStatus === "loading" && (
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {fetchStatus === "failed" && (
        <>
          <BsExclamationOctagon />
          <h3>Not Loading</h3>
        </>
      )}
    </div>
  );
}
