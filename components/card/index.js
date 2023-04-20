import styles from "./styles.module.scss";
export default function Card({ status }) {
  let style;
  const number = 200000000000;

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
      <div>{number.toLocaleString()}</div>
      <h3>{status.toString().toUpperCase()}</h3>
    </div>
  );
}
