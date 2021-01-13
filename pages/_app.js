import "../css/index.css";

import Head from "next/head";

import getPostMetaData from "../lib/getPostMetaData";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Starter Tailwind</title>
        <meta
          content="A Next.js starter styled using Tailwind CSS."
          name="Description"
        />
      </Head>

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
