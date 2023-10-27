/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Italy from '../public/gallery-images/S_M_Italy.jpg';
import LA from '../public/gallery-images/S_M_LA.jpg';
import Maine from '../public/gallery-images/S_M_Maine.jpg';
import Marathon from '../public/gallery-images/S_M_Marathon.jpg';
import Napa from '../public/gallery-images/S_M_Napa.jpg';
import Oberlin from '../public/gallery-images/S_M_Oberlin.jpg';
import Thanksgiving from '../public/gallery-images/S_M_Thanksgiving.jpg';
import Shelter from '../public/gallery-images/S_M_Shelter.jpg';
import Slovania from '../public/gallery-images/S_M_Slovania.jpg';
import Subway from '../public/gallery-images/S_M_Subway.jpg';
import Engagement_1 from '../public/gallery-images/S_M_Engagement_1.jpg';
import Engagement_2 from '../public/gallery-images/S_M_Engagement_2.jpg';
import Engagement_3 from '../public/gallery-images/S_M_Engagement_3.jpg';
import Engagement_4 from '../public/gallery-images/S_M_Engagement_4.jpg';
import Engagement_5 from '../public/gallery-images/S_M_Engagement_5.jpg';
import Engagement_6 from '../public/gallery-images/S_M_Engagement_6.jpg';
import Engagement_7 from '../public/gallery-images/S_M_Engagement_7.jpg';
import Engagement_8 from '../public/gallery-images/S_M_Engagement_8.jpg';
import Engagement_9 from '../public/gallery-images/S_M_Engagement_9.jpg';
import Engagement_10 from '../public/gallery-images/S_M_Engagement_10.jpg';
import Engagement_11 from '../public/gallery-images/S_M_Engagement_11.jpg';
import Engagement_12 from '../public/gallery-images/S_M_Engagement_12.jpg';
import Engagement_13 from '../public/gallery-images/S_M_Engagement_13.jpg';
import Engagement_14 from '../public/gallery-images/S_M_Engagement_14.jpg';

export default function MemoryGallery() {
  const images = [
    {
      image: Engagement_10,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: LA,
      tag: 'Andrew’s Graduation - Los Angeles - 2019',
      tilt: '',
    },
    {
      image: Engagement_1,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Slovania,
      tag: 'Afternoon Hiking - Slovania - 2022',
      tilt: 'right',
    },
    {
      image: Engagement_12,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Shelter,
      tag: 'Friend’s Weekend - Shelter Island - 2018',
      tilt: 'left',
    },
    {
      image: Engagement_2,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Engagement_13,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    { image: Italy, tag: 'Sunset Selfies - Sicily - 2022', tilt: '' },
    {
      image: Engagement_11,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Engagement_7,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    {
      image: Engagement_3,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'left',
    },
    {
      image: Engagement_4,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    {
      image: Maine,
      tag: 'Annie’s Graduation - Portland - 2021',
      tilt: 'right',
    },
    {
      image: Engagement_6,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    { image: Marathon, tag: 'Brooklyn Half - Brooklyn - 2022', tilt: '' },
    {
      image: Engagement_14,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    {
      image: Oberlin,
      tag: '“The Boy’s Hole” - Oberlin - 2015',
      tilt: 'left',
    },
    {
      image: Engagement_8,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Engagement_5,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'left',
    },
    { image: Subway, tag: 'Subway Selfie - NYC - 2019', tilt: '' },
    { image: Napa, tag: "Mellen's Belated Bday - Napa - 2021", tilt: 'right' },
    {
      image: Engagement_9,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Thanksgiving,
      tag: 'Covid Thanksgiving - Brooklyn - 2020',
      tilt: 'right',
    },
    {
      image: Engagement_10,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: LA,
      tag: 'Andrew’s Graduation - Los Angeles - 2019',
      tilt: '',
    },
    {
      image: Engagement_1,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Slovania,
      tag: 'Afternoon Hiking - Slovania - 2022',
      tilt: 'right',
    },
    {
      image: Engagement_12,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Shelter,
      tag: 'Friend’s Weekend - Shelter Island - 2018',
      tilt: 'left',
    },
    {
      image: Engagement_2,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Engagement_13,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    { image: Italy, tag: 'Sunset Selfies - Sicily - 2022', tilt: '' },
    {
      image: Engagement_11,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Engagement_7,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    {
      image: Engagement_3,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'left',
    },
    {
      image: Engagement_4,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    {
      image: Maine,
      tag: 'Annie’s Graduation - Portland - 2021',
      tilt: 'right',
    },
    {
      image: Engagement_6,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    { image: Marathon, tag: 'Brooklyn Half - Brooklyn - 2022', tilt: '' },
    {
      image: Engagement_14,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'right',
    },
    {
      image: Oberlin,
      tag: '“The Boy’s Hole” - Oberlin - 2015',
      tilt: 'left',
    },
    {
      image: Engagement_8,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Engagement_5,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: 'left',
    },
    { image: Subway, tag: 'Subway Selfie - NYC - 2019', tilt: '' },
    { image: Napa, tag: "Mellen's Belated Bday - Napa - 2021", tilt: 'right' },
    {
      image: Engagement_9,
      tag: 'Engagement Pic - Brooklyn - 2023',
      tilt: '',
    },
    {
      image: Thanksgiving,
      tag: 'Covid Thanksgiving - Brooklyn - 2020',
      tilt: 'right',
    },
  ];

  return (
    <div className="flex items-center memory-gallery mt-4 py-5">
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
      <Image
        priority="true"
        width={275}
        height="450"
        src={image.image.src}
        alt={image.tag}
      />
      <p className="py-[10px] font-cedarville text-[14px]">{image.tag}</p>
    </div>
  );
}
