import Head from 'next/head';
import Link from 'next/link';
import DateCard from './components/DateCard';
import HorizontalGallery from './components/HorizontalGallery';
import WilliamValeImage from '../public/hotel-images/william_vale.jpg';
import HoxtonImage from '../public/hotel-images/hoxton.jpg';
import WytheImage from '../public/hotel-images/wythe.jpg';
import PennyImage from '../public/hotel-images/penny.jpg';
import MoxyImage from '../public/hotel-images/moxy.jpg';
import CharityImage from '../public/charity.png';
import Food52Image from '../public/food52.png';
import PatagoniaImage from '../public/patagonia.png';
import { useEffect, useState } from 'react';
import RegistryCard from './components/RegistryCard';
import MemoryGallery from './components/MemoryGallery';

export default function Home() {
  const date_cards = [
    {
      date: 11.3,
      event: 'Welcome Drinks',
      time: '9:30pm',
      location: 'Spritzenhauss',
      location_website: 'https://spritzenhaus33.business.site/',
      address: '33 Nassau Avenue Brooklyn, NY 11222',
      google_maps_url:
        'https://www.google.com/maps/place/Spritzenhaus33/data=!3m1!4b1!4m2!3m1!1s0x89c259448f9fe1fd:0xdb8de662ae8f43ca',
      content:
        'Join us as we kick off our weekend right and celebrate our last night legally unbound. It’s totally optional, but we’d love to ring in the weekend with you at one of our favorite Greenpoint spots.',
    },
    {
      date: 11.4,
      event: 'Reception',
      time: '5:30pm',
      location: 'Rule of Thirds',
      location_website: 'https://www.thirdsbk.com/',
      address: '171 Banker Street, Brooklyn, NY 11222',
      google_maps_url:
        'https://www.google.com/maps/place/171+Banker+St,+Brooklyn,+NY+11222/@40.7247503,-73.95503,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25943963050d9:0xf80191169ebe093a!8m2!3d40.7247503!4d-73.95503',
      content:
        'Ceremony followed by dinner, dancing, and festivities. You won’t want to miss it! Stay tune for after party details...',
    },
    {
      date: 11.5,
      event: 'Sunday Funday',
      time: '12:30pm',
      location: 'Pigs Beach',
      location_website: 'https://www.thirdsbk.com/',
      address: '171 Banker Street, Brooklyn, NY 11222',
      google_maps_url:
        'https://www.google.com/maps/place/171+Banker+St,+Brooklyn,+NY+11222/@40.7247503,-73.95503,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25943963050d9:0xf80191169ebe093a!8m2!3d40.7247503!4d-73.95503',
      content:
        'We’re lucky to be sharing our weekend with one of the best days in New York City, the NYC Marathon! We invite you to meet us after you’ve cheered along the runners at our favorite neighborhood spot to eat more food (if you can), and watch some football (with Matt…) ',
    },
  ];

  const hotels = [
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Book $400',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'The Hoxton',
      link: 'https://thehoxton.com/williamsburg/',
      price: 'Book $400',
      distance: '7 minute walk',
      tagline: 'Fantastic views!',
      image: HoxtonImage,
    },
    {
      name: 'The Wythe',
      link: 'https://www.wythehotel.com/',
      price: 'Book $400',
      distance: '6 minute walk',
      tagline: 'Terrific bar and restaurant',
      image: WytheImage,
    },
    {
      name: 'The Penny',
      link: 'https://www.penny-hotel.com/',
      price: 'Book $400',
      distance: '15 minute walk',
      tagline: 'Slightly further away but a great spot.',
      image: PennyImage,
    },
    {
      name: 'The Moxy',
      link: 'https://www.marriott.com/en-us/hotels/nycxb-moxy-brooklyn-williamsburg/overview/',
      price: 'Book $400',
      distance: '23 minute walk',
      tagline: 'Slightly further away but a great spot.',
      image: MoxyImage,
    },
  ];
  const restuarants = [
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Make a Resy',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Make a Resy',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Make a Resy',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Make a Resy',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
  ];
  const activites = [
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Plan your visit',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'The Hoxton',
      link: 'https://www.thewilliamvale.com/',
      price: 'Plan your visit',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Plan your visit',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Plan your visit',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
  ];

  const faqs = [
    [
      {
        question: 'Can I bring my kids?',
        answer:
          'We love kids, we even love your kids, but this is an adults only event. If you have concerns or needs regarding a babysitter, feel free to contact us directly.',
      },
      {
        question: 'What’s the deal with technology at this thing?',
        answer:
          'We encourage you to unplug for most of the evening. Once you’ve posted that picture, we ask that you turn your phone on silent and try to be present. We’ve hired some spectacular photographers, so you’ll get your moment in the spotlight.',
      },
    ],
    [
      {
        question: 'How did you two meet?',
        answer:
          'It was a beautiful early fall night in Oberlin, Ohio, in the fall of 2015. It was the first Splitchers of the year (a weekly event during which pitchers of PBR were half off and the DJ often played the greatest hits of a 2010 Bar/Bat Mitzvah). Sylvie went into the night knowing she wanted to catch the eye of a certain fella named Matt Basile, and the rest is history ;) We owe it all to the Sco, PBR, and a few friends who helped us along the way (you know who you are).',
      },
      {
        question: 'Where should I stay?',
        answer:
          'There are lots of places within walking distance to stay if you’re visiting from out of town. Find a few of our suggestions above.',
      },
    ],
    [
      {
        question: 'I have dietary restrictions, should I plan to eat before?',
        answer:
          'Don’t worry! If you’re concerned about specific dietary restrictions or allergies, please email us and we will do our best to accommodate so you, too, can enjoy the wonderful feast being prepared for us!',
      },
      {
        question: 'What should I wear?',
        answer:
          'Formal festive attire! We want you to be comfortable while eating and dancing your heart out. That being said, we’d love for you to use this as an excuse to dress up a little, get fancy, feel pretty!',
      },
    ],
  ];

  const registry = [
    {
      image: PatagoniaImage,
      content: 'Contribute to our honeymoon adventure!',
      link: 'https://test.com',
    },
    {
      image: Food52Image,
      content:
        'Help us throw epic dinner parties and fill our home with meaningful, beautiful things.',
      link: 'https://food52.com/shop/registry/15180-matthew-and-sylvie',
    },
    {
      image: CharityImage,
      content: 'Donate in our honor to an organization we care deeply about.',
      link: 'https://test.com',
    },
  ];

  return (
    <div className=" mx-auto bg-theme-light">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="max-w-[1440px] mx-auto w-full bg-header h-[700px] md:h-[955px] pb-[78px] flex flex-col justify-between">
        <nav className="flex flex-wrap w-full justify-center md:justify-between items-center px-[32px] md:px-[76px] py-[24px]">
          <Link href="/">
            <h1 className="font-newsreader uppercase font-bold text-[32px] text-theme-light">
              Sylvie and Matt
            </h1>
          </Link>
          <div className="space-x-4 md:space-x-6 flex flex-wrap md:font-bold text-[12px] md:text-[20px] text-theme-light">
            <a href="#events">Events</a>
            <a href="#travel">Hotel and Travel</a>
            <a href="#faqs">FAQs</a>
            <a href="#gift">Gift</a>
            <a href="#gallery">Gallery</a>
          </div>
        </nav>
        <div className="px-[32px] md:px-[76px]">
          <h1 className="font-newsreader text-[52px] md:text-[96px] font-bold text-theme-light">
            Sylvie and Matt
          </h1>
          <div className="flex text-theme-light items-center space-x-2 text-[16px] md:text-[24px]">
            <p>November 4th, 2023</p>
            <span className="text-[10px]">&#9711;</span>
            <p>Brooklyn, New York</p>
          </div>
        </div>
      </header>
      <main className="max-w-[1440px] mx-auto w-full">
        <section
          id="intro"
          className="px-[32px] md:px-[76px] py-[72px] md:py-[144px] bg-theme-light text-theme-dark"
        >
          <div className="space-y-2 text-center">
            <span className="uppercase text-[16px] md:text-[24px]">
              Join us in Brooklyn
            </span>
            <h2 className="font-newsreader  text-[40px] md:text-[96px] font-bold ">
              Marriage Celebration
            </h2>
          </div>
          <p className="font-light text-[16px] md:text-[24px] leading-[32px] md:leading-[44px] max-w-[1010px] mx-auto">
            We will be married in Brooklyn, the place we love and call home, on
            November 4, 2023, and we can’t wait to commemorate this special
            event with all of you! We hope to toast, eat, and dance the weekend
            away with everyone.
          </p>
        </section>
        <section
          id="events"
          className="px-[32px] md:px-[76px] py-[72px] md:py-[144px] bg-theme-dark text-theme-light"
        >
          <div className="space-y-2 ">
            <span className="uppercase text-[16px] md:text-[24px]">
              What&apos;s the Plan?
            </span>
            <h2 className="font-newsreader text-[40px] md:text-[96px] font-bold ">
              Weekend Schedule
            </h2>
          </div>
          <div className="grid gap-x-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full justify-between">
            {date_cards.map((card) => (
              <DateCard key={card.event} card={card} />
            ))}
          </div>
        </section>
        <section
          id="travel"
          className="py-[72px] md:py-[144px] bg-theme-light text-theme-dark"
        >
          <div className="px-[32px] md:px-[76px] space-y-2 text-center">
            <span className="uppercase text-[16px] md:text-[24px] ">
              Where to stay? What to do?
            </span>
            <h2 className="font-newsreader text-[40px] md:text-[80px] font-bold ">
              Travel & Our Recommendations
            </h2>
          </div>
          <p className="font-light px-[32px] md:px-[76px] text-[16px] md:text-[24px] leading-[32px] md:leading-[44px] max-w-[1252px] mx-auto text-center">
            There are loads of hotels in marvelous New York City. Here are a few
            that we suggest. Use the links below to access our discount codes
            for the small block of rooms we’ve reserved. Please try and book
            early to secure your spot.
          </p>

          <div className="pl-[32px] md:pl-[76px] mt-[72px]">
            <h2 className="font-newsreader text-[40px] font-bold">Hotels</h2>
            <HorizontalGallery gallery={hotels} />
          </div>
          <div className="pl-[32px] md:pl-[76px] mt-[72px]">
            <h2 className="font-newsreader text-[40px] font-bold">
              Where to Eat
            </h2>
            <HorizontalGallery gallery={restuarants} />
          </div>
          <div className="pl-[32px] md:pl-[76px] mt-[72px]">
            <h2 className="font-newsreader text-[40px] font-bold">
              What to Do
            </h2>
            <HorizontalGallery gallery={activites} />
          </div>
        </section>
        <section
          id="faqs"
          className="px-[32px] md:px-[76px] py-[72px] md:py-[144px] bg-theme-light text-theme-dark"
        >
          <div className="space-y-2 ">
            <span className="uppercase text-[16px] md:text-[24px] ">
              Some Important, Some Not so Important Details
            </span>
            <h2 className="font-newsreader text-[40px] md:text-[72px] font-bold ">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-[32px] grid grid-cols-1 md:grid-cols-3 ">
            {faqs.map((row, index) => {
              return (
                <div key={index} className="flex flex-col md:gap-y-8">
                  {row.map((item) => {
                    return (
                      <div
                        key={item.question}
                        className="md:px-[24px] py-[20px] md:px-[24px] md:py-[48px]"
                      >
                        <h3 className="text-[24px] font-bold font-newsreader">
                          {item.question}
                        </h3>
                        <p className="text-[16px] leading-[30px] mt-[12px]">
                          {item.answer}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
        <section
          id="gift"
          className="px-[32px] md:px-[76px] py-[72px] md:py-[144px] bg-theme-dark text-theme-light"
        >
          <div className="space-y-2 text-center">
            <span className="uppercase text-[16px] md:text-[24px] ">
              Registry
            </span>
            <h2 className="font-newsreader text-[40px] md:text-[72px] font-bold ">
              Your Presence is a Present!
            </h2>
            <p className="font-light text-[16px] md:text-[24px] leading-[32px] md:leading-[44px] max-w-[936px] mx-auto">
              Having family and friends to celebrate with us is the best gift of
              all, but if you wish to honor us with a wedding gift, we’ve
              compiled some ideas:
            </p>
          </div>
          <div className="registry-grid grid gap-x-[20px] w-full mt-[56px] justify-center gap-y-8">
            {registry.map((gift) => {
              return <RegistryCard key={gift.link} gift={gift} />;
            })}
          </div>
        </section>
        <section
          id="gallery"
          className="py-[72px] md:py-[144px] bg-theme-light text-theme-dark"
        >
          <div className="px-[32px] md:px-[76px] space-y-2">
            <span className="uppercase text-[16px] md:text-[24px] ">
              A FEW PHOTOS
            </span>
            <h2 className="font-newsreader text-[40px] md:text-[72px] font-bold ">
              Some highlights from our time together so far…
            </h2>
          </div>
          <div className="h-[500px] relative overflow-x-hidden mt-[32px]">
            <MemoryGallery />
          </div>
        </section>
        <section
          id="contact"
          className="py-[72px] md:py-[144px] bg-theme-light text-theme-dark text-center"
        >
          <div className="px-[32px] md:px-[76px] space-y-2">
            <span className="uppercase text-[16px] md:text-[24px] ">
              NEED MORE INFO?
            </span>
            <h2 className="font-newsreader text-[40px] md:text-[64px] font-bold ">
              Feel free to send us a note here
            </h2>
            <a
              href="mailto:Flormanbasile@gmail.com"
              className=" text-[40px] md:text-[64px] font-light underline hover:bg-theme-dark hover:text-theme-light "
            >
              Flormanbasile@gmail.com
            </a>
          </div>
        </section>
      </main>
      <footer className="max-w-[1440px] mx-auto w-full bg-theme-dark text-theme-light flex flex-wrap justify-center md:justify-between px-[32px] md:px-[76px] py-[36px] items-baseline space-y-2">
        <p className="font-light text-[16px] md:text-[24px]">
          Design and coded with ❤️ by Matt.
        </p>
        <div className="font-light space-x-4 md:space-x-6 flex flex-wrap text-[12px] md:text-[20px] text-theme-light">
          <a className="hover:underline" href="#events">
            Events
          </a>
          <a className="hover:underline" href="#travel">
            Hotel and Travel
          </a>
          <a className="hover:underline" href="#faqs">
            FAQs
          </a>
          <a className="hover:underline" href="#gift">
            Gift
          </a>
          <a className="hover:underline" href="#gallery">
            Gallery
          </a>
        </div>
      </footer>
    </div>
  );
}
