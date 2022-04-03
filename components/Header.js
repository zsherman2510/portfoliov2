import styles from "../styles/Header.module.css";
import styled from "styled-components";
import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { NEXT_URL } from "@/config/index";

export default function Header() {
 
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  console.log(user, 'user in header');
  console.log(user.auth);
  const showMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
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
				<div className={styles.menu_link}>
					<a target="_blank" href="mailto: shermanzavion@gmail.com">
						Contact Me
					</a>
				</div>
				{user.auth === true ? (
					<>
						<div className={styles.menu}>
							<div className={styles.menu_link}>
								<Link href={`/projects/add`}>
									Add Project
								</Link>
							</div>
							<div className={styles.menu_link}>
								<Link href={`/courses/add`}>
									Add Course
								</Link>
							</div>
							<a
								onClick={() => logout()}
								className={styles.button}
							>
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
