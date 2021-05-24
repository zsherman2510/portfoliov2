import Layout from "../components/Layout";
import styles from "../styles/404.module.css";
import Link from "next/link";

export default function notAuthorized() {
  return (
    <Layout title="Not Authorized">
      <div className={styles.error}>
        <h1>401</h1>
        <h4>Access Restricted</h4>
        <Link href="/">Go back to Safety</Link>
      </div>
    </Layout>
  );
}
