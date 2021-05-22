import styles from "@/styles/CourseItem.module.css";
export default function CourseItem({ course }) {
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
        <div className={styles.description}></div>
      </div>
    </div>
  );
}
