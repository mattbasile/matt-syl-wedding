import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function thankyou() {
  return (
    <div className="mx-auto bg-theme-light h-screen">
      <Head>
        <title>Sylvie and Matt | Thank you!</title>
        <meta
          name="description"
          content="Sylvie and Matt's Wedding Website. Learn more about the events and fun we plan on having."
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <nav className="max-w-[1440px] mx-auto w-full flex flex-wrap w-full justify-center md:justify-between items-center px-[32px] md:px-[76px] py-[24px]">
        <Link href="/">
          <h1 className="font-newsreader uppercase font-bold text-[32px] text-theme-dark">
            Sylvie and Matt
          </h1>
        </Link>
      </nav>
      <div className="px-[32px] md:px-[76px] text-center py-24  md:py-[72px] space-y-4">
        <h1 className="font-newsreader text-[52px] md:text-[96px] font-bold text-theme-dark">
          Thank you!
        </h1>
        <img
          className="mx-auto"
          src="https://media.giphy.com/media/bNPjW5skN4EH6/giphy.gif"
          alt=""
          width={500}
          height={500}
        />
        <div className=" text-theme-dark text-[16px] md:text-[24px]">
          <p>We&apos;re looking forward to celebrating with you soon!</p>
        </div>
        <Link
          href="/"
          className="text-[12px] md:text-[16px] text-theme-dark underline mt-4"
        >
          Return to our home page to learn more about the weekend.
        </Link>
      </div>
    </div>
  );
}
