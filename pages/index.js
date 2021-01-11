import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import React from "react";

import buildSchema from "../lib/buildSchema";
import getPostMetaData from "../lib/getPostMetaData";

const META_DESC = `A Web Developer from Philadelphia, PA, specializing in React, Next.js, and Tailwind CSS`;
const META_TITLE = `Andrew Davis`;

// what projects to include?

const PROJECTS = [
  {
    name: `progressive-trello-client`,
    description: `a rewrite of the popular collaboration software, Trello.`,
    src: `netlify-slug-here`,
    tags: [{ name: `TypeScript` }, { name: `React.js` }],
  },
  {
    name: `emoji-search-tool`,
    description: `a tool to search for your favorite emojis by keyword`,
    src: `netlify-slug-here`,
    tags: [{ name: `React.js` }, { name: `CSS` }],
  },
];

function IndexPage() {
  return (
    <>
      <Head>
        {/*  meta information for each page for SEO purposes */}
        {buildSchema({
          "@context": `http://schema.org`,
          "@type": `Person`,
          name: `Andrew Davis`,
          url: `https://andrewdavis.dev`,
          gender: `male`,
          sameAs: [`https://twitter.com/booleanvalue1`],
        })}
      </Head>
      <NextSeo description={META_DESC} title={META_TITLE} />
      <h1>something new</h1>
    </>
  );
}

export default IndexPage;
