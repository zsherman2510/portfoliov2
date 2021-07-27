import styles from "../styles/Header.module.css";
import styled from "styled-components";
import Link from "next/link";
import { useContext, useState } from "react";
import AuthProvider from "@/context/AuthProvider";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useContext(AuthProvider);

  const showMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    console.log(isOpen);
  };
  console.log(user);
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <img src="/zavion4.png" alt="" />
          </a>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={() => showMenu()}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`${styles.menu} ${
          isOpen ? styles.show_menu : styles.close_menu
        }`}
      >
        {/* <div className={styles.menu_link}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className={styles.menu_link}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div className={styles.menu_link}>
          <Link href="/courses">
            <a>Courses</a>
          </Link>
        </div> */}
        <div className={styles.menu_link}>
          <a target="_blank" href="mailto: shermanzavion@gmail.com">
            Contact
          </a>
        </div>
        {user ? (
          <>
            <div>
              <a onClick={() => logout()} className={styles.button}>
                Logout
              </a>
            </div>
            <div className={styles.loggedIn}></div>
          </>
        ) : (
          <span></span>
        )}
      </div>
    </nav>
  );
}
