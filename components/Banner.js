import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Banner() {
  const [showBanner, setShowBanner] = useState(true);
  let hideBanner = () => {
    localStorage.setItem('hideBanner', true);
    setShowBanner(false);
  };

  useEffect(() => {
    return () => {
      let userHidBanner = localStorage.getItem('hideBanner');
      setShowBanner(!userHidBanner);
    };
  }, []);

  return (
    <div
      className={
        showBanner
          ? 'max-w-[1440px] mx-auto bg-theme-light rounded-md my-2 fixed inset-x-0 isolate flex items-center gap-x-6 overflow-hidden border-2 border-theme-dark px-6 py-2.5 sm:px-3.5 sm:before:flex-1'
          : 'hidden'
      }
    >
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      ></div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">
            Welcome drinks location has changed!
          </strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join us at Jaffa from 8 – 10pm on Friday November 3rd..
        </p>
        <a
          href="#events"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Learn more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          onClick={() => hideBanner()}
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
