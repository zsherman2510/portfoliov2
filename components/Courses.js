import styles from "@/styles/Courses.module.css";
import CourseItem from "@/components/CourseItem";
export default function Courses({ courses }) {
  return (
    <div>
      <h1>Courses</h1>
      <div className={styles.wrapper}>
        {courses.map((course) => (
          <CourseItem course={course} />
        ))}
      </div>
    </div>
  );
}
