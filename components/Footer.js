import Link from "next/link";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Created by: Zavion</p>
      <p>
        <Link href="/about">About the creator</Link>
      </p>
    </footer>
  );
}
