import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
      </Head>
      <Header />

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Zavion Sherman Software Developer Portfolio",
  description: "",
};
