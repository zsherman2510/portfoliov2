import styles from "@/styles/CourseItem.module.css";
import projectStyles from "@/styles/ProjectItem.module.css";

export default function CourseItem({ course }) {
  const techSplits = course.technology.split("/");
  return (
    <div>
      <div className={styles.course}>
        <div className={styles.title_group}>
          <span>Course</span>
          <div className={styles.title}>{course.title}</div>
          <div className={styles.complete_wrapper}>
            <span
              className={
                course.completed ? styles.completed : styles.incomplete
              }
            ></span>
            <span className={styles.status}>
              {course.completed ? "Completed" : "In-development"}
            </span>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.tech_wrapper}>
            {techSplits.map((tech) => (
              <span key={tech} className={projectStyles.project_tech}>
                {tech}
              </span>
            ))}
          </div>
          <div className={styles.desc}>{course.description}</div>
          <button className={styles.button}>Enroll</button>
        </div>
      </div>
    </div>
  );
}
