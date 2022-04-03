import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { AuthContext } from "@/context/AuthProvider";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";
import Error from "next/error";

export default function EditCoursePage({ course, errorCode }) {
  console.log(course.id, 'course');
  const router = useRouter();
  const { user } = useContext(AuthContext);
  
  const [values, setValues] = useState({
    title: course.title,
    desc: course.description,
    releaseDate: course.releaseDate,
    technology: course.technology,
    link: course.link
  })
  
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

		const res = await fetch(`${API_URL}/courses/${course.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.jwt}`,
			},
			body: JSON.stringify(values),
		});

		if (!res.ok) {
			if (res.status === 403 || res.status === 401) {
				toast.error("No token included");
				return;
			} else if (res.status === 500) {
				toast.error(
					"Course name already exist. Use another course name"
				);
				return false;
			}
			toast.error("Something went wrong");
		} else {
			const course = await res.json();
			toast.success("Course created successfully, Redirecting...");
			router.push('/');
		}
   };
  
	return (
		<Layout title="Edit Course">
			<Link href="/">Go Back</Link>
			<h1>Edit Course</h1>
			<ToastContainer />
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.grid}>
					<div>
						<label htmlFor="Name">Course Name</label>
						<input
							type="text"
							id="name"
							name="title"
              placeholder="Title of Course"
							value={values.title}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="Name">Description</label>
						<input
							type="text"
							id="description"
							name="desc"
              placeholder="Description"
							value={values.desc}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label htmlFor="Name">Tech</label>
						<input
							type="text"
							id="tech"
							name="technology"
              placeholder="Technology"
							value={values.technology}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="Name">Link</label>
						<input
							type="text"
							id="link"
							name="link"
              placeholder="Link to Course"
							value={values.link}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="Name">Release Date</label>
						<input
							type="date"
							id="releaseDate"
							name="releaseDate"
              placeholder="Release Date of Course"
							value={values.releaseDate}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<input type="submit" value="Add Course" className="btn" />
			</form>
		</Layout>
	);
}
export async function getServerSideProps({ params: { id }, req }) {
	const res = await fetch(`${API_URL}/courses/${id}`);

	const errorCode = res.ok ? null : res.statusText;

	const course = await res.json();

	return {
		props: {
			errorCode,
			course,
		},
	};
}



