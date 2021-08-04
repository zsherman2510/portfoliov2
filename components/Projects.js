import styles from "@/styles/Projects.module.css";
import ProjectItem from "@/components/ProjectItem";
import { Fade } from "react-awesome-reveal";

export default function Projects({ projects }) {
  return (
    <>
      <Fade cascade>
        <div className={styles.wrapper}>
          {projects.map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </div>
      </Fade>
    </>
  );
}
