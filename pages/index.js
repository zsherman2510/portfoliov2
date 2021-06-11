import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Link from "next/link";
import Projects from "@/components/Projects";
import ProjectItem from "@/components/ProjectItem";
import Courses from "@/components/Courses";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { API_URL } from "@/config/index";
export default function HomePage({ projects, courses }) {
  return (
    <Layout>
      <Hero />
      <h1>My Skills..</h1>
      <Skills />
      <Projects projects={projects} />
      <h1>Learn from me..</h1>
      <Courses courses={courses} />
      <Contact />
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
