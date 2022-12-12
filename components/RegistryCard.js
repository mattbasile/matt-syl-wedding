import React, { useState, useEffect } from 'react';

export default function RegistryCard({ gift, index }) {
  return (
    <a
      key={gift.link}
      target="_blank"
      className={`w-full block flex flex-col items-center border-2 border-theme-light bg-theme-light text-theme-dark mt-8 py-8 ${
        index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
      }`}
      href={gift.link || '#'}
      rel="noreferrer"
    >
      <img
        src={gift.image.src}
        className="px-8 py-6 aspect-[3/2] object-contain	w-3/4"
      ></img>
      {/* <span className="px-8 py-4 text-[16px] leading-[30px]">
        {gift.content}
      </span> */}
    </a>
  );
}


