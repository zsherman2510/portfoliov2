import styles from "@/styles/Projects.module.css";
import ProjectItem from "@/components/ProjectItem";

export default function Projects({ projects }) {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Some of my work..</h1>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}
