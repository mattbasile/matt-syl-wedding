import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function form() {
  return (
    <div className=" mx-auto bg-theme-light">
      <Head>
        <title>Sylvie and Matt | Address Request Form</title>
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
      <div className="px-[32px] md:px-[76px] text-center py-24 md:pt-[144px] md:pb-[72px]">
        <h1 className="font-newsreader text-[52px] md:text-[96px] font-bold text-theme-dark">
          You&apos;re Invited!
        </h1>
        <div className=" text-theme-dark text-[16px] md:text-[24px]">
          <p>
            Something special is coming your way, <br /> we just need a little
            information to make it happen!
          </p>
        </div>
      </div>
      <form
        className="w-full space-y-6 max-w-[650px] mx-auto pb-24 px-[32px] md:px-[76px]"
        method="POST"
        action="https://forms.reform.app/headless/1e147r/address-request/wl8fou/submissions"
      >
        <div>
          <label
            className="block text-sm font-medium text-theme-dark"
            htmlFor="78f995a1-030f-4338-8782-e6bde31319c8"
          >
            What&apos;s your name?
          </label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-theme-dark focus:ring-theme-dark sm:text-sm"
            type="text"
            id="78f995a1-030f-4338-8782-e6bde31319c8"
            name="answers[78f995a1-030f-4338-8782-e6bde31319c8]"
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-theme-dark"
            htmlFor="c0008731-2308-4469-a0dc-bd7ac874a85f"
          >
            What&apos;s your email?
          </label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-theme-dark focus:ring-theme-dark sm:text-sm"
            type="email"
            id="c0008731-2308-4469-a0dc-bd7ac874a85f"
            name="answers[c0008731-2308-4469-a0dc-bd7ac874a85f]"
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-theme-dark"
            htmlFor="b03b8cee-fbed-4b41-ad20-80008904cf79"
          >
            What&apos;s your mailing Address?
          </label>
          <textarea
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-theme-dark focus:ring-theme-dark sm:text-sm"
            id="b03b8cee-fbed-4b41-ad20-80008904cf79"
            name="answers[b03b8cee-fbed-4b41-ad20-80008904cf79]"
            required
          ></textarea>
        </div>
        <button
          className="w-full text-center rounded-md border border-transparent bg-theme-dark px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-theme-dark focus:outline-none focus:ring-2 focus:ring-theme-light focus:ring-offset-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <footer className="max-w-[1440px] mx-auto w-full bg-theme-dark text-theme-light flex flex-wrap justify-center md:justify-between px-[32px] md:px-[76px] py-[36px] items-baseline space-y-2">
        <p className="font-light text-[16px] md:text-[24px]">
          Design and coded with ❤️ by Matt.
        </p>
        <div className="font-light space-x-4 md:space-x-6 flex flex-wrap text-[12px] md:text-[20px] text-theme-light">
          <Link className="hover:underline" href="/#events">
            Events
          </Link>
          <Link className="hover:underline" href="/#travel">
            Hotel and Travel
          </Link>
          <Link className="hover:underline" href="/#faqs">
            FAQs
          </Link>
          <Link className="hover:underline" href="/#gift">
            Gift
          </Link>
          <Link className="hover:underline" href="/#gallery">
            Gallery
          </Link>
        </div>
      </footer>
    </div>
  );
}
