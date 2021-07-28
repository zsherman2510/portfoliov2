import styles from "@/styles/CourseItem.module.css";
import projectStyles from "@/styles/ProjectItem.module.css";
import { NEXT_URL } from "@/config/index";
import AuthProvider from "@/context/AuthProvider";
import { useContext } from "react";
export default function CourseItem({ course }) {
  const { user, error } = useContext(AuthProvider);
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
              {course.completed ? "Completed" : "Filming now"}
            </span>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.tech_wrapper}>
            {techSplits.map((tech) => (
              <span key={tech} className={styles.course_tech}>
                {tech}
              </span>
            ))}
          </div>
          <div className={styles.desc}>{course.description}</div>
          <div className={styles.wrapper}>
            {course.completed ? (
              <a href={course.link} target="_blank" className={styles.button}>
                Enroll
              </a>
            ) : (
              <span className={styles.button_disable}>
                Unavaliable at this time
              </span>
            )}

            {user ? (
              <a
                className={styles.button}
                href={`${NEXT_URL}/courses/edit/${course.id}`}
              >
                Edit Course
              </a>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
