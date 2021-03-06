import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import React from 'react';

import buildSchema from '../lib/buildSchema';
import getPostMetaData from '../lib/getPostMetaData';

const META_DESC = `A Web Developer from Philadelphia, PA, specializing in React, Next.js, and Tailwind CSS`;
const META_TITLE = `Andrew Davis`;

// what projects to include?

const PROJECTS = [
  {
    name: `progressive Trello client`,
    description: `a rewrite of the popular list making client, Trello.`,
    url: `https://trello-lite.netlify.app`,
    tags: [{ name: `TypeScript` }, { name: `React.js` }],
  },
  {
    name: `emoji-search-tool`,
    description: `a tool to search for your favorite emojis by keyword!`,
    url: `https://tuf75588.github.io/emojis-search/`,
    tags: [{ name: `React.js` }, { name: `CSS` }],
  },
  {
    name: `Github Profile - Cloned in React`,
    description: `My own version of GitHub's user profile interface using React.js and GraphQL`,
    url: `https://react-github1.netlify.app/`,
    tags: [{ name: `React.js` }, { name: `GraphQL` }, { name: `CSS` }],
  },
  {
    name: `Netflix lite`,
    description: `A recreation of the Netflix video player, using pure HTML, CSS and JavaScript`,
    url: `https://netflix-video-player-atd285.vercel.app/`,
    tags: [{ name: `CSS` }, { name: `JavaScript` }],
  },
  {
    name: `Hot Ones Hot Sauce Tracker`,
    description: `An application tracking the hot sauces used over various seasons of the popular YouTube series, "Hot Ones", from the channel First We Feast`,
    url: `https://elegant-jang-48e480.netlify.app/`,
    tags: [{ name: `React.js` }, { name: `CSS` }],
  },
];

function IndexPage() {
  return (
    <>
      <Head>
        {/*  meta information for each page for SEO purposes */}
        {buildSchema({
          '@context': `http://schema.org`,
          '@type': `Person`,
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
            Hi, I&apos;m Andrew. <span aria-hidden="true">👋</span>
          </h1>

          <p className="mb-12 text-xl leading-relaxed">
            A Web Developer from the Philadelphia area. . In my spare time, I
            build, and design
            {` `}
            {/* eslint-disable-next-line */}
            <a
              href="https://imgur.com/a/JX6dduc#8wsMfLs"
              rel="noopener noreferrer"
              target="_blank"
            >
              mechanical keyboards
            </a>
            ,{` `}
            build<a href="#projects"> side projects</a>
            {` `}and{` `}
            <a href="#writing">write about </a> new technologies and techniques
            I discover through{` `}
            <a
              href="https://www.swyx.io/learn-in-public/"
              rel="noopener noreferrer"
              target="_blank"
            >
              learning in public.
            </a>
            {` `}
            My resume can be viewed{` `}
            <a
              href="https://www.dropbox.com/s/u7pf5abrh3pm5w1/Andrew_resume.pdf?dl=0"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <ul className="flex space-x-8">
            {[
              {
                url: `https://github.com/tuf75588`,
                icon: faGithub,
                title: `Github`,
              },
              {
                url: `https://twitter.com/booleanvalue1`,
                icon: faTwitter,
                title: `Twitter`,
              },
              {
                url: `https://www.linkedin.com/in/andrew-t-davis/`,
                icon: faLinkedin,
                title: `LinkedIn`,
              },
              {
                url: `https://instagram.com/flyersfan1`,
                icon: faInstagram,
                title: `Instagram`,
              },
            ].map((item) => (
              <li key={item.title}>
                <a
                  className="text-3xl no-underline block text-black"
                  href={item.url}
                >
                  <FontAwesomeIcon
                    className="w-8 h-8"
                    icon={item.icon}
                    title={item.title}
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="flex flex-col max-w-3xl px-3 mx-auto md:px-6 md:justify-between md:flex-row">
        <div className="md:w-1/3">
          <h2 className="mb-6 text-3xl font-bold md:mb-0" id="projects">
            Side projects
          </h2>
        </div>
        <div className="space-y-6 md:w-2/3">
          {PROJECTS.map(({ name, url, description }) => (
            <article key={name}>
              <h3 className="mb-3 text-xl">
                <a href={url} rel="noreferrer" target="_blank">
                  {name}
                </a>
              </h3>
              <p className="leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="flex flex-col max-w-3xl px-3 mx-auto md:px-6 md:justify-between md:flex-row">
        <div className="md:w-1/3">
          <h2 className="mb-6 text-3xl font-bold md:mb-0" id="writing">
            Writing
          </h2>
        </div>
        <div className="space-y-6 md:w-2/3">
          {getPostMetaData()
            .filter(({ meta }) => meta.publish)
            .map(({ meta, link }) => (
              <article key={meta.title}>
                <h3 className="mb-3 text-xl">
                  <Link href={link}>
                    <a>{meta.title}</a>
                  </Link>
                </h3>
                <p className="leading-relaxed">{meta.description}</p>
              </article>
            ))}
        </div>
      </section>
    </>
  );
}

export default IndexPage;
