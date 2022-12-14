import React, { useEffect } from 'react';
import Link from 'next/link';

export default function HorizontalGallery({ gallery }) {
  return (
    <div
      className="full scrolling-wrapper space-x-[24px] md:space-x-[50px] mt-[12px]"
      style={{
        gridTemplateColumns: `25px repeat(${
          gallery.length || 4
        }, calc(50% - 20px * 2)) 25px`,
      }}
    >
      {gallery.map((card) => (
        <Card key={card.name} card={card} />
      ))}
    </div>
  );
}

function Card({ card }) {
  return (
    <Link
      target="_blank"
      href={card.link}
      className="w-[300px] h-[200px] md:w-[500px] md:h-[400px] inline-flex flex-col justify-between p-[20px] gallery-card "
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(100, 108, 54, 0.4), rgba(100, 108, 54, 0.4)), url(${card.image.src})`,
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full flex justify-end text-wrap">
        <div className="rounded-full shadow-lg font-semibold text-[12px] md:text-[20px] px-[12px] py-[8px] md:px-[24px] md:py-[12px] bg-theme-light">
          {card.price}
        </div>
      </div>
      <div className="text-theme-light whitespace-normal">
        <span className="block font-bold text-[24px] md:text-[30px]">
          {card.name}
        </span>
        {card.distance ? (
          <span className="block font-semibold text-[12px] md:text-[16px]">
            {card.distance}
          </span>
        ) : null}
        <span className="block font-semibold text-[12px] md:text-[16px]">
          {card.tagline}
        </span>
      </div>
    </Link>
  );
}
