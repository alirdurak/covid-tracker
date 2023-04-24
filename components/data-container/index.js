import Card from "../card";
import styles from "./style.module.scss";
export default function DataContainer() {
  return (
    <div className={styles.container}>
      <Card status="case" />
      <Card status="recovered" />
      <Card status="death" />
    </div>
  );
}
