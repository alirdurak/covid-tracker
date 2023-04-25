import styles from "./styles.module.scss";
import Header from "../header";
import Footer from "../footer";
import { useSelector } from "react-redux";
export default function Layout({ children }) {
  const currenTheme = useSelector((state) => state.covidSlice.theme);
  let style;
  if (currenTheme == "light") {
    style = styles.layoutLight;
  } else {
    style = styles.layoutDark;
  }

  return (
    <div className={style}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
