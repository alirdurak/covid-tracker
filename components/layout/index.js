import styles from "./styles.module.scss";
import Header from "../header";
import Footer from "../footer";
export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
