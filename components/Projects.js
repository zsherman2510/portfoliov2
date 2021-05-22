import styles from "@/styles/Projects.module.css";
export default function Projects({ children }) {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Projects</h1>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
}
