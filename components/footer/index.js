import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Developed by Ali Rıza Durak</p>
      <div>
        <Link target="_blank" href="https://github.com/alirdurak" passHref>
          <FaGithub className={styles.icon} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/alirızadurak/"
          passHref
        >
          <FaLinkedin className={styles.icon} />
        </Link>
      </div>
    </footer>
  );
}
