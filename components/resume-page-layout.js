import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import buildSchema from "../lib/buildSchema";

function ResumePageLayout({ meta, children }) {
  const { description } = meta;
  const router = useRouter();
  const metaUrl = `https://andrewdavis.dev/${router.asPath}`;
  return (
    <>
      <Head>
        {buildSchema({
          "@context": `http://schema.org`,
          "@type": `Person`,
          name: `Andrew Davis`,
          gender: `male`,
          email: `develop.it4@gmail.com`,
        })}
      </Head>
      <NextSeo
        canonical={metaUrl}
        description={description}
        openGraph={{
          title: meta.title,
          description: meta.description,
          type: `article`,
          url: metaUrl,
        }}
        title={`Andrew Davis - ${meta.title}`}
      />
      <article>{children}</article>
    </>
  );
}

export default ResumePageLayout;
