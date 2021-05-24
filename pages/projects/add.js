import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import Link from "next/link";

import styles from "@/styles/Form.module.css";

export default function AddProjects({ token }) {
  const [values, setValues] = useState({
    name: "",
    description: "",
    tech: "",
    link: "",
  });
  const router = useRouter();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    //Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }

    const res = await fetch(`${API_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error("No token included");
        return;
      } else if (res.status === 500) {
        toast.error("Project name already exist. Use another project name");
        return false;
      }
      toast.error("Something went wrong");
    } else {
      const evt = await res.json();
      toast.success("Event created successfully, Redirecting...");
      router.push(`/project/${evt.slug}`);
    }
  };

  return (
    <Layout title="Add Project">
      <Link href="/">Go Back</Link>
      <h1>Add Project</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="Name">Project Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Name">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="Name">Tech</label>
            <input
              type="text"
              id="tech"
              name="tech"
              value={values.tech}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="Name">Link</label>
            <input
              type="text"
              id="link"
              name="link"
              value={values.link}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <input type="submit" value="Add Event" className="btn" />
      </form>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  console.log(token);
  return {
    props: {
      token,
    },
  };
}
