import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_text_container}>
          <div className={styles.hero_intro}>
            I'm Zavion, full stack developer
          </div>
          <div className={styles.hero_subline}>
            Crafting web applications from front to back - considering every
            aspect. Specializing in bringing your visions to life.
          </div>
          <a href="./Resume1.pdf" target="_blank" className={styles.button}>
            View Resume
          </a>
        </div>
        <div className={styles.image_wrapper}>
          <div className={styles.hero_image}></div>
        </div>
      </div>
    </>
  );
}
