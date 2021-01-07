import "../css/index.css";

import Head from "next/head";

import Layout from "../components/layout";
import names from "../lib/getPostMetaData";

console.log(names);
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next.js Starter Tailwind</title>
        <meta
          content="A Next.js starter styled using Tailwind CSS."
          name="Description"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
