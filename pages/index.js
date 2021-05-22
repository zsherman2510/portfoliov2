import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Link from "next/link";
import Projects from "@/components/Projects";
import ProjectItem from "@/components/ProjectItem";
import Courses from "@/components/Courses";
import { API_URL } from "@/config/index";
export default function HomePage({ projects }) {
  return (
    <Layout>
      <Hero />
      <h1>Some of my work..</h1>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}

      <Courses />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/projects`);
  const projects = await res.json();

  console.log(projects);

  return {
    props: { projects },
  };
}
