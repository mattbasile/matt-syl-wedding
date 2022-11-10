import React, { useState, useEffect } from 'react';

export default function RegistryCard({ gift }) {
  return (
    <a
      key={gift.link}
      className="registry-card inline-flex h-[450px] w-300px rounded-[20px] flex-col justify-end"
      href={gift.link}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 244, 0.1), rgba(255, 255, 244, 0.1)), url(${gift.image.src})`,
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <span className="flex items-center justify-center h-[70px] px-[8px] font-bold text-[14px] text-theme-dark bg-theme-light rounded-b-[20px] text-center">
        {gift.content}
      </span>
    </a>
  );
}
