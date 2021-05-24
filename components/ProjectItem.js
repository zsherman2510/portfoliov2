import Image from "next/image";
import styles from "@/styles/ProjectItem.module.css";
import { useContext } from "react";
import Link from "next/link";
import AuthProvider from "@/context/AuthProvider";
import { NEXT_URL } from "@/config/index";
export default function ProjectItem({ project }) {
  console.log(project);
  console.log("here");
  const { user, error } = useContext(AuthProvider);
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
              <div key={tech} className={styles.project_tech}>
                {tech}
              </div>
            ))}
          </div>
          <div className={styles.project_title}>{project.name}</div>

          <div className={styles.project_info}>{project.description}</div>

          <a
            href={project.link}
            className={styles.project_link}
            target="_blank"
          >
            View live demo
          </a>
          {user ? (
            <>
              <a
                className={styles.project_link}
                href={`${NEXT_URL}/projects/edit/${project.id}`}
              >
                Edit Project
              </a>
            </>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </>
  );
}
