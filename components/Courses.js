import styles from "@/styles/Courses.module.css";
import CourseItem from "@/components/CourseItem";
export default function Courses({ courses }) {
  return (
    <div className={styles.wrapper}>
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
