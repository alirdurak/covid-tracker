import styles from "./styles.module.scss";
import Image from "next/image";
import { TbMoon } from "react-icons/tb";
import covidLogo from "@/public/covid-logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={covidLogo}
        width={75}
        height={75}
        alt="This is the last pandemic purpose!"
      />
      <TbMoon className={styles.darkmode} />
    </header>
  );
}
