import Projects from "@/components/Projects";
import { useContext, useState } from "react";
import { Link } from "next/link";
import { API_URL, NEXT_URL } from "@/config/index";
import Layout from "@/components/Layout";
import { AuthContext } from "@/context/AuthProvider";
import styles from "@/styles/Projects.module.css";

export default function ProjectsPage({ projects }) {
  
  return (
    <Layout>
      <h1>My Projects</h1>
      <Projects projects={projects} />
      {/* {user ? (
        <Link>
          <a className={styles.button__add} href={`${NEXT_URL}/projects/add`}>
            Add Project
          </a>
        </Link>
      ) : (
        <span></span>
      )} */}
    </Layout>
  );
}

export async function getStaticProps() {
  // const res = await fetch(`${API_URL}/projects`);
  console.log(API_URL);
  const res = await fetch(`${API_URL}/projects?_sort=releaseDate:desc`);
  const projects = await res.json();

  console.log(projects);

  return {
    props: { projects },
  };
}
