import Image from "next/image";
import styles from "@/styles/ProjectItem.module.css";
import Link from "next/link";
export default function ProjectItem({ project }) {
  console.log(project);
  console.log("here");

  const techSplits = project.tech.split("/");

  return (
    <>
      <div className={styles.project}>
        <div className={styles.img}>
          {/* <Image
            src={
              project.thumbnail
                ? project.thumbnail.formats.small.url
                : "/images/default.jpg"
            }
            width={400}
            height={400}
          /> */}
          <img
            src={
              project.thumbnail
                ? project.thumbnail.formats.small.url
                : "/images/default.jpg"
            }
            alt="thumbnail"
          />
        </div>

        <div className={styles.project_desc}>
          <div className={styles.project_tag}>
            {techSplits.map((tech) => (
              <div className={styles.project_tech}>{tech}</div>
            ))}
          </div>
          <div className={styles.project_title}>{project.name}</div>

          <div className={styles.project_info}>{project.description}</div>

          <button
            href={project.link}
            className={styles.project_link}
            target="_blank"
          >
            View live demo
          </button>
        </div>
      </div>
    </>
  );
}
