import React from 'react';

export default function DateCard({ card }) {
  return (
    <div className="py-[36px] px-[24px] bg-theme-dark text-theme-light border-t-[5px] border-theme-light">
      <h3 className="uppercase font-newsreader font-medium  text-[40px] md:text-[100px]">
        {card.date || 11.4}
      </h3>
      <div>
        <p className="text-[24px] md:text-[32px]">{card.event}</p>
        <span className="text-[16px] md:text-[20px] font-light flex space-x-2">
          <a
            className={card.location === 'TBD' ? 'block' : 'underline block '}
            href={card.location_website}
            target="_blank"
            rel="noreferrer"
          >
            {card.location}
          </a>
        </span>
        <a
          className="text-[16px]  md:text-[20px] font-light"
          href={card.google_maps_url}
          target="_blank"
          rel="noreferrer"
        >
          {card.address}
        </a>
        <span className="text-[16px]  md:text-[20px] font-light block">
          {card.time}
        </span>
      </div>
      <p className="text-[16px] md:text-[20px] font-light leading-[36px] mt-4 md:mt-6">
        {card.content}
      </p>
    </div>
  );
}
