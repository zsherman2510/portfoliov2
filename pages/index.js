import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Link from "next/link";
import Projects from "@/components/Projects";
import ProjectItem from "@/components/ProjectItem";
import Courses from "@/components/Courses";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Fade } from "react-awesome-reveal";
import { API_URL } from "@/config/index";
import AuthProvider from "@/context/AuthProvider";
export default function HomePage({ projects, courses }) {
	console.log(courses);
  return (
			<Layout>
				<Fade>
					<Hero />
					<h1>My Skills..</h1>
					<Skills />
					<h1>Some of my work..</h1>
					<Projects projects={projects} />
					<h1>Learn from me..</h1>

					<Courses courses={courses} />
					<Contact />
				</Fade>
			</Layout>
  );
}

export async function getStaticProps() {
  // const res = await fetch(`${API_URL}/projects`);
  const res = await fetch(`${API_URL}/projects?_sort=releaseDate:desc`);
  const projects = await res.json();

  const courseRes = await fetch(`${API_URL}/courses`);

  const courses = await courseRes.json();

  return {
    props: { projects, courses },
  };
}
