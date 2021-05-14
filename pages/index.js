import Layout from "../components/Layout";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <h1>Welcome</h1>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);

//   return {
//     props: { events },
//     revalidate: 100,
//   };
// }
