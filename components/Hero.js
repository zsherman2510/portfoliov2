import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_text_container}>
          <div className={styles.hero_intro}>
            I'm Zavion, software engineer and entrepreneurial educator.
          </div>
          <div className={styles.hero_subline}>
            I specialize in front-end engineering, SEO, and helping individuals
            and businesses grow.
          </div>
          <a href="./Resume.pdf" target="_blank" className={styles.button}>
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}
