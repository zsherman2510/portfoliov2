import styles from "@/styles/Projects.module.css";
import ProjectItem from "@/components/ProjectItem";

export default function Projects({ projects }) {
  return (
    <>
      <h1>Some of my work..</h1>
      <div className={styles.wrapper}>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}
