
import { FaCommentsDollar, FaImage } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";
import { AuthContext } from "@/context/AuthProvider";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";
import Error from "next/error";

export default function EditProjectPage({ project, token, errorCode }) {
  const router = useRouter();

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  const { user } = useContext(AuthContext);
  
  token = user.jwt;
  
  console.log(user);

  const [values, setValues] = useState({
    name: project.name,
    description: project.description,
    tech: project.tech,
    link: project.link,
  });

  const [imagePreview, setImagePreview] = useState(
    project.thumbnail ? project.thumbnail.formats.thumbnail.url : null
  );

  const [showModal, setShowModal] = useState(false);

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

    const res = await fetch(`${API_URL}/projects/${project.id}`, {
      method: "PUT",
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
      const project = await res.json();
      toast.success("Project created successfully, Redirecting...");
      router.push('/');
    }
  };

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/projects/${project.id}`);
    const data = await res.json();
    console.log(data);
    setImagePreview(data.thumbnail.formats.thumbnail.url);
    setShowModal(false);
    
  };

  return (
    <Layout title="Edit Project">
      <Link href="/">Go Back</Link>
      <h1>Edit Project</h1>
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
        <input type="submit" value="Add Project" className="btn" />
      </form>
      <h2>Event Image</h2>
      {imagePreview ? (
        <Image src={imagePreview} height={100} width={170} />
      ) : (
        <div>
          <p>no image uploaded</p>
        </div>
      )}

      <div>
        <button
          className="btn-secondary btn-icon"
          onClick={() => setShowModal(true)}
        >
          <FaImage /> Set Image
        </button>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload
          id={project.id}
          imageUploaded={imageUploaded}
          token={token}
          reference="projects"
          field="thumbnail"
        />
      </Modal>
    </Layout>
  );
}
export async function getServerSideProps({ params: { id }, req }) {
  
 
  const res = await fetch(`${API_URL}/projects/${id}`);

  const errorCode = res.ok ? null : res.statusText;

  const project = await res.json();

  return {
    props: {
      errorCode,
      project,
      
    },
  };
}
