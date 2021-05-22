import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Link from "next/link";
import Projects from "@/components/Projects";
import ProjectItem from "@/components/ProjectItem";
import Courses from "@/components/Courses";
import { API_URL } from "@/config/index";
export default function HomePage({ projects, courses }) {
  return (
    <Layout>
      <Hero />
      <h1>Some of my work..</h1>
      <Projects projects={projects} />

      <Courses courses={courses} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/projects`);
  const projects = await res.json();

  const courseRes = await fetch(`${API_URL}/courses`);

  const courses = await courseRes.json();
  console.log(projects);
  console.log(courses);

  return {
    props: { projects, courses },
  };
}
