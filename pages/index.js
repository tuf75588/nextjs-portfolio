import Head from "next/head";
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
      <div className="flex flex-col justify-center">
        <section className="max-w-3xl px-3 mx-auto md:px-6">
          <h1 className="mb-3 text-4xl font-bold">
            Hi, I&apos;m Andrew, <span aria-hidden="true">👋</span>
          </h1>

          <p className="mb-12 text-xl leading-relaxed">
            A Web Developer from the Philadelphia area. . In my spare time, I
            {` `}
            <a
              href="https://soundcloud.com/taylorbryant"
              rel="noopener noreferrer"
              target="_blank"
            >
              build and design mechanical keyboards
            </a>
            ,{` `}
            <a href="#projects">build side projects</a>
            {` `}and{` `}
            <a href="#writing">write about </a> new technologies and techniques
            I discover through self learning.
          </p>
        </section>
      </div>
    </>
  );
}

export default IndexPage;
