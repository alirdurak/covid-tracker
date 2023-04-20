import Card from "../card";
import styles from "./styles.module.scss";

export default function WorldContainer() {
  return (
    <div className={styles.worldContainer}>
      <h1>Worldwide Covid Statistics</h1>
      <div className={styles.cardContainer}>
        <Card status="case"></Card>
        <Card status="recovered"></Card>
        <Card status="death"></Card>
      </div>
    </div>
  );
}
