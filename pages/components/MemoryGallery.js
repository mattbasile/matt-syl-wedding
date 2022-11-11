/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Italy from '../../public/gallery-images/S_M_Italy.jpg';
import LA from '../../public/gallery-images/S_M_LA.jpg';
import Maine from '../../public/gallery-images/S_M_Maine.jpg';
import Marathon from '../../public/gallery-images/S_M_Marathon.jpg';
import Napa from '../../public/gallery-images/S_M_Napa.jpg';
import Oberlin from '../../public/gallery-images/S_M_Oberlin.jpg';
import Thanksgiving from '../../public/gallery-images/S_M_Thanksgiving.jpg';
import Shelter from '../../public/gallery-images/S_M_Shelter.jpg';
import Slovania from '../../public/gallery-images/S_M_Slovania.jpg';
import Subway from '../../public/gallery-images/S_M_Subway.jpg';

export default function MemoryGallery() {
  const images = [
    {
      image: LA,
      tag: 'Andrew’s Graduation - Los Angeles - 2019',
      tilt: '',
    },
    {
      image: Slovania,
      tag: 'Afternoon Hiking - Slovania - 2022',
      tilt: 'right',
    },
    {
      image: Shelter,
      tag: 'Friend’s Weekend - Shelter Island - 2018',
      tilt: 'left',
    },
    { image: Italy, tag: 'Sunset Selfies - Sicily - 2022', tilt: '' },
    {
      image: Thanksgiving,
      tag: 'Covid Thanksgiving - Brooklyn - 2020',
      tilt: 'right',
    },
    {
      image: Maine,
      tag: 'Annie’s Graduation - Portland - 2021',
      tilt: 'left',
    },
    { image: Marathon, tag: 'Brooklyn Half - Brooklyn - 2022', tilt: '' },
    {
      image: Oberlin,
      tag: '“The Boy’s Hole” - Oberlin - 2015',
      tilt: 'left',
    },
    { image: Napa, tag: "Mellen's Belated Bday - Napa - 2021", tilt: 'right' },
    { image: Subway, tag: 'Subway Selfie - NYC - 2019', tilt: '' },
    {
      image: LA,
      tag: 'Andrew’s Graduation - Los Angeles - 2019',
      tilt: '',
    },
    {
      image: Slovania,
      tag: 'Afternoon Hiking - Slovania - 2022',
      tilt: 'right',
    },
    {
      image: Shelter,
      tag: 'Friend’s Weekend - Shelter Island - 2018',
      tilt: 'left',
    },
    { image: Italy, tag: 'Sunset Selfies - Sicily - 2022', tilt: '' },
    {
      image: Thanksgiving,
      tag: 'Covid Thanksgiving - Brooklyn - 2020',
      tilt: 'right',
    },
    {
      image: Maine,
      tag: 'Annie’s Graduation - Portland - 2021',
      tilt: 'left',
    },
    { image: Marathon, tag: 'Brooklyn Half - Brooklyn - 2022', tilt: '' },
    {
      image: Oberlin,
      tag: '“The Boy’s Hole” - Oberlin - 2015',
      tilt: 'left',
    },
    { image: Napa, tag: "Mellen's Belated Bday - Napa - 2021", tilt: 'right' },
    { image: Subway, tag: 'Subway Selfie - NYC - 2019', tilt: '' },
  ];

  return (
    <div className="flex items-center memory-gallery mt-4">
      {images.map((image, index) => (
        <Polaroid key={image.image.src} image={image} index={index} />
      ))}
    </div>
  );
}

function Polaroid({ image, index }) {
  const [tiltClass, setTiltClass] = useState('');

  const tiltConstructor = () => {
    const tilt = image.tilt;
    if (tilt === 'right') {
      setTiltClass('z-20 -mx-[25px] w-auto rotate-2');
    }
    if (tilt === 'left') {
      setTiltClass('z-20 -mx-[25px] w-auto -rotate-2');
    }
  };

  useEffect(() => {
    tiltConstructor();
  }, [tiltConstructor]);

  return (
    <div
      className={
        'memory-card bg-white shadow-lg pt-[14px] px-[14px] z-10 mt-4 w-auto text-center relative ' +
        `${tiltClass}`
      }
    >
      <Image width={275} height="450" src={image.image.src} alt={image.tag} />
      <p className="py-[10px] font-cedarville text-[14px]">{image.tag}</p>
    </div>
  );
}
