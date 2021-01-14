import "../css/index.css";

import App from "next/app";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import React from "react";
import ReactGA from "react-ga";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head />
        <div className="flex flex-col min-h-screen space-y-12 text-lg md:space-y-24">
          <header className="flex items-center w-full max-w-3xl px-3 pt-3 mx-auto md:pt-6 md:px-6">
            <Link href="/">
              <a className="ml-3 text-2xl no-underline text-black">
                Andrew Davis
              </a>
            </Link>
          </header>
          <main className="flex-1 space-y-12 md:space-y-24">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </main>
          <footer className="w-full max-w-3xl px-3 pb-3 mx-auto text-sm text-center md:text-left md:pb-6 md:px-6">
            Built using{` `}
            <a
              href="https://nextjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Next.js
            </a>
            {` `}
            and{` `}
            <a
              href="https://tailwindcss.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tailwind CSS
            </a>
            .
          </footer>
        </div>
      </>
    );
  }
}

export default MyApp;
