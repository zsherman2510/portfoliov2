import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>iamZavion</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>Courses</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>Experience</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
