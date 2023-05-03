"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { TbMoon, TbSun } from "react-icons/tb";
import covidLogo from "@/public/covid-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@/redux/covidSlice";

export default function Header() {
  const currenTheme = useSelector((state) => state.covidSlice.theme);
  const dispatch = useDispatch();
  const handleTheme = () => {
    currenTheme === "light"
      ? dispatch(changeTheme("dark"))
      : dispatch(changeTheme("light"));
  };

  return (
    <header className={styles.header}>
      <Image
        src={covidLogo}
        width={75}
        height={75}
        alt="This is the last pandemic purpose!"
      />
      {currenTheme == "light" ? (
        <TbMoon onClick={handleTheme} className={styles.darkmode} />
      ) : (
        <TbSun onClick={handleTheme} className={styles.darkmode} />
      )}
    </header>
  );
}
