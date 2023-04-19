import styles from "./styles.module.scss";
import { TbVirusSearch, TbMoon } from "react-icons/tb";
export default function Header() {
  return (
    <header className={styles.header}>
      <TbVirusSearch className={styles.virus} />
      <TbMoon className={styles.darkmode} />
    </header>
  );
}
