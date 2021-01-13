import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import buildSchema from "../lib/buildSchema";

function PostPageLayout({ meta, children }) {
  const router = useRouter();
  const metaUrl = `https://andrewdavis.dev/${router.asPath}`;
  return (
    <>
      <Head>
        {buildSchema({
          "@context": `http://schema.org`,
          "@type": `BlogPosting`,
          headline: meta.title,
          description: meta.description,
          url: metaUrl,
          datePublished: meta.datePublished,
          author: {
            "@type": `Person`,
            name: `Andrew Davis`,
            url: `https://andrewdavis.dev`,
          },
          publisher: {
            "@type": `Person`,
            name: `Andrew Davis`,
            url: `https://andrewdavis.dev`,
          },
        })}
      </Head>
      <NextSeo
        canonical={metaUrl}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
          type: `article`,
          url: metaUrl,
        }}
        title={`Andrew Davis - ${meta.title}`}
      />
      <article className="flex-col max-w-3xl px-3 mx-auto md:px-6">
        <time className="block mb-3 text-sm tracking-widest uppercase">
          {new Intl.DateTimeFormat(`en-US`, {
            month: `long`,
            day: `numeric`,
            year: `numeric`,
          }).format(new Date(meta.date))}
        </time>
        <h1 className="mb-6 text-3xl font-bold leading-tight">{meta.title}</h1>
        <div className="markdown-body">{children}</div>
      </article>
    </>
  );
}
export default PostPageLayout;
