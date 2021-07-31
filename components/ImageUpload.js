import { useState, useRef } from "react";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";
import { ToastContainer, toast } from "react-toastify";
//import usestate, apiurl, and styles
//pass in evtID, imageUploaded for props
//set image state
//return a form that allows a user to upload a file
//form needs handlesubmit and handlefilechange

//handle file change: console log e.target.files[0] to see values
//instiate a new formData object, append (files, image), (ref, events), (refId, evtid), (fiedl,image)

// make a post request to apiurl/upload
// body is formdata and if res is ok call imageuploaded

//make a request to get a latest image from /events set image preview to the thumbnail set show modal to false to close it

export default function ImageUpload({
  id,
  imageUploaded,
  token,
  reference,
  field,
}) {
  const [image, setImage] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const toastId = useRef(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const loading = () => toast.info("Cooking up some nice...");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", reference);
    formData.append("refId", id);
    formData.append("field", field);

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
      onUploadProgress: (p) => {
        const progress = p.loaded / p.total;
        console.log(progress);

        if (toastId.current === null) {
          toastId.current = toast("Upload in progress", {
            progress: progress,
          });
        } else {
          toast.update(toastId.current, {
            progress: progress,
          });
        }
      },
    });

    if (res.ok) {
      toast.success(toastId.current);
      imageUploaded();
    }
  };

  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className="btn" />
      </form>
    </div>
  );
}
