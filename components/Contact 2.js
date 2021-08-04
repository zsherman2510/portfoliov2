import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contact_text}>
          <h1>Contact me</h1>
          If you have any questions or would like to meet for coffee to discuss
          future business adventures, then please email me{" "}
          <a
            target="_blank"
            className={styles.button}
            href="mailto: shermanzavion@gmail.com"
          >
            here.
          </a>
        </div>
        {/* <div className={styles.background_container}>
          <div className={styles.image}></div>
        </div> */}
      </div>
    </>
  );
}
