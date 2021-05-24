import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useContext } from "react";
import AuthProvider from "@/context/AuthProvider";
export default function Header() {
  const { user, logout } = useContext(AuthProvider);
  console.log(user);
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
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <a>Courses</a>
            </Link>
          </li>
          <li>
            <Link href="mailto: shermanzavion@gmail.com">
              <a>Contact</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <a onClick={() => logout()} className={styles.button}>
                  Logout
                </a>
              </li>
              <div className={styles.loggedIn}></div>
            </>
          ) : (
            <span></span>
          )}
        </ul>
      </nav>
    </header>
  );
}
