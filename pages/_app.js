import "../css/index.css";

import Layout from "@components/layout";
import Head from "next/head";

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
