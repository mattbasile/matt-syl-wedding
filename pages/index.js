import Head from 'next/head';
import Link from 'next/link';
import DateCard from '../components/DateCard';
import Banner from '../components/Banner';
import HorizontalGallery from '../components/HorizontalGallery';
import WilliamValeImage from '../public/hotel-images/william_vale.jpg';
import HoxtonImage from '../public/hotel-images/hoxton.jpg';
import WytheImage from '../public/hotel-images/wythe.jpg';
import PennyImage from '../public/hotel-images/penny.jpg';
import MoxyImage from '../public/hotel-images/moxy.jpg';
import CharityImage from '../public/charity.png';
import Food52Image from '../public/food52.png';
import PatagoniaImage from '../public/patagonia.png';
import ComodoreImage from '../public/eat-images/commodore.jpeg';
import LeIndustrieImage from '../public/eat-images/le-industrie.jpg';
import RamirezImage from '../public/eat-images/ramirez.jpeg';
import HaveImage from '../public/eat-images/have.jpeg';
import FiveLeavesImage from '../public/eat-images/fiveleaves.jpeg';
import DevocionImage from '../public/eat-images/devocion.jpeg';
import HomeComingImage from '../public/eat-images/homecoming.jpeg';
import DominoImage from '../public/do-images/domino.jpeg';
import MccarrenImage from '../public/do-images/mccarren.jpeg';
import GutterImage from '../public/do-images/gutter.jpeg';
import MomaImage from '../public/do-images/moma.jpeg';
import BloomingDalesLogo from '../public/registry_images/bloomingdale_logo.png';
import ZolaLogo from '../public/registry_images/zola_logo.png';
import ChipsLogo from '../public/registry_images/chips_logo.png';

import { useEffect, useState } from 'react';
import RegistryCard from '../components/RegistryCard';
import MemoryGallery from '../components/MemoryGallery';

export default function Home() {
  const date_cards = [
    {
      date: 11.3,
      event: 'Welcome Drinks',
      time: '8:00 - 10:00pm',
      location: 'Jaffa',
      location_website: 'https://www.jaffabrooklyn.com/',
      address: '97 Wythe Ave, Brooklyn, NY 11222',
      google_maps_url:
        'https://www.google.com/maps/place/The+Hoxton,+Williamsburg/@40.720831,-73.9587603,15z/data=!4m9!3m8!1s0x89c2595d67e022b9:0xeb5c58873aa07774!5m2!4m1!1i2!8m2!3d40.720831!4d-73.9587603!16s%2Fg%2F11gbk4yhjy?sa=X&ved=2ahUKEwjvnrLG9f_-AhWujYkEHX73DTQQ_BJ6BAh1EAc&shorturl=1',
      content:
        'Join us to kick off the weekend right! Drinks will be provided :) ',
    },
    {
      date: 11.4,
      event: 'Ceremony & Reception',
      time: '5:30 - 11:30pm',
      location: 'Rule of Thirds',
      location_website: 'https://www.thirdsbk.com/',
      address: '171 Banker Street, Brooklyn, NY 11222',
      google_maps_url:
        'https://www.google.com/maps/place/171+Banker+St,+Brooklyn,+NY+11222/@40.7247503,-73.95503,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25943963050d9:0xf80191169ebe093a!8m2!3d40.7247503!4d-73.95503',
      content:
        'Ceremony followed by dinner, dancing, and festivities. You won’t want to miss it!',
    },
    {
      date: 11.4,
      event: 'After Party',
      time: '11:30pm - 1:30am',
      location: "Paulie Gee's Slice Shop",
      location_website: 'https://pauliegee.com/slice-shop/',
      address: '110 Franklin Street Brooklyn, NY 11222',
      google_maps_url: 'https://goo.gl/maps/h9AmswaBTKidD8yx6',
      content:
        "And after the party it's a pizza party! Let's keep the night going with a slice, a drink and a sick DJ set from Dre Scott.",
    },
  ];

  const hotels = [
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Book',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'The Hoxton',
      link: 'https://thehoxton.com/williamsburg/',
      price: 'Book',
      distance: '7 minute walk',
      tagline: 'Use code HITCHED1123 to book!',
      image: HoxtonImage,
    },
    {
      name: 'The Penny',
      link: 'https://www.penny-hotel.com/',
      price: 'Book',
      distance: '16 minute walk',
      tagline: 'Click here to book now.',
      image: PennyImage,
    },
    {
      name: 'The Moxy',
      link: 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1668022047800&key=GRP&app=resvlink',
      price: 'Book',
      distance: '23 minute walk',
      tagline: 'Click here to book now',
      image: MoxyImage,
    },
    {
      name: 'The Wythe',
      link: 'https://www.wythehotel.com/',
      price: 'Book',
      distance: '6 minute walk',
      tagline: 'Terrific bar and restaurant',
      image: WytheImage,
    },
  ];
  const restuarants = [
    {
      name: 'The Commodore',
      link: 'https://www.thecommodorebrooklyn.com/',
      price: 'Fried Chicken & Frozen Drinks',
      distance: '366 Metropolitan Ave, Brooklyn, NY ',
      tagline: 'Order a frozen drink and fat fried chicken sando.',
      image: ComodoreImage,
    },
    {
      name: 'Le Industrie',
      link: 'https://www.lindustriebk.com/',
      price: 'Pizza',
      distance: '254 S 2nd St, Brooklyn, NY 11211',
      tagline: 'Find the best slice',
      image: LeIndustrieImage,
    },
    {
      name: 'Taqueria Ramirez',
      link: 'https://www.instagram.com/taqueria_ramirez_/?hl=en',
      price: 'Tacos',
      distance: '94 Franklin St, Brooklyn 11222',
      tagline: 'The line is worth it...',
      image: RamirezImage,
    },
    {
      name: 'Have and Meyer',
      link: 'https://www.haveandmeyer.com/',
      price: 'Natty Wine',
      distance: '103 Havemeyer St, Brooklyn, NY 11211',
      tagline: 'It wouldn’t be Brooklyn without natural wine',
      image: HaveImage,
    },
    {
      name: 'Five Leaves',
      link: 'http://fiveleavesny.com/',
      price: 'Brunch',
      distance: '18 Bedford Ave, Brooklyn, NY 11222',
      tagline: 'Brunch like a real Brooklyn-ite',
      image: FiveLeavesImage,
    },
    {
      name: 'Devocion',
      link: 'https://www.devocion.com/',
      price: 'Coffee',
      distance: '69 Grand St. (at Wythe), Brooklyn, NY 11249',
      tagline: 'Beans roasted on the premises',
      image: DevocionImage,
    },
    {
      name: 'Homecoming',
      link: 'https://home-coming.com/',
      price: 'Coffee & Flowers',
      distance: '92 Berry St, Brooklyn, NY 11249',
      tagline: 'Coffee with a side of florals, cards, and perfect home touches',
      image: HomeComingImage,
    },
  ];
  const activites = [
    {
      name: 'Domino Park',
      link: 'https://www.dominopark.com/visit',
      price: 'Outdoor Space',
      distance: 'River Street Brooklyn, NY 11249',
      tagline: 'Take in views of the east river.',
      image: DominoImage,
    },
    {
      name: 'McCarren Park',
      link: 'https://www.google.com/maps?t=h&daddr=40.72148812830,+-73.95268960300+(Center+of+McCarren+Park)',
      price: 'Outdoor Space',
      distance: 'Nassau Ave, Bayard, Leonard & N 12 Sts',
      tagline: 'Take in views of the east river.',
      image: MccarrenImage,
    },
    {
      name: 'The Gutter',
      link: 'https://www.thegutterbarles.com/williamsburg',
      price: 'Bowling',
      distance: '200 N. 14th St Brooklyn 11249',
      tagline: 'Knock down a few pins at this dive.',
      image: GutterImage,
    },
    {
      name: 'MOMA PS 1',
      link: 'https://www.momaps1.org/',
      price: 'Museum',
      distance: '22-25 Jackson Avenue, Queens, NY 11101',
      tagline: 'Take in some culture just north of Greenpoint.',
      image: MomaImage,
    },
  ];

  const faqs = [
    [
      {
        question: 'What does “Festive Formal” mean?',
        answer:
          'Think of it as formal’s fun, sophisticated and not-at-all-stuffy cousin. We want you to be comfortable while you eat and dance your heart out, but we’d love for you to take this as an opportunity to dress up and feel pretty! In other words: If you have a tux, you can wear it. If not, don’t rent one! Have a beautiful long dress you’ve been dying to wear? We’d love to see it! If you have any questions, email us and we’re happy to consult ;) ',
      },
    ],
    [
      {
        question: 'I have dietary restrictions, should I plan to eat before?',
        answer:
          'Rule of Thirds offers a creative, comforting twist on Japanese cuisine. If you’re concerned about specific dietary restrictions or allergies, please email us at flormanbasile@gmail.com and we will do our best to accommodate so you, too, can enjoy the wonderful feast being prepared for us. ',
      },
    ],
    [
      {
        question: 'What’s the deal with technology at this thing?',
        answer:
          'We encourage you to unplug for most of the evening and try to be present. We’ve hired some spectacular photographers, so you’ll get your moment in the spotlight.',
      },
    ],
    [
      {
        question: 'How do I get around?',
        answer:
          'It’s New York City! Uber and Lyfts are available at all hours from all spots of the city. This is the easiest way to get to the wedding. If you’re driving, please be advised there is street parking, but we will not have a valet and some streets may be closed due to the upcoming marathon. Another easy way to arrive is to take the subway! The Nassau Avenue G train stop is just a 5 minute walk.',
      },
    ],
  ];

  const registry = [
    {
      image: ZolaLogo,
      title: 'Honeymoon Fund',
      link: 'https://www.zola.com/registry/sylvieandmatt',
    },
    {
      image: BloomingDalesLogo,
      title: 'Home Registry',
      link: 'https://www.bloomingdales.com/registry/wedding/guest/SYLVIE-FLORMAN-MATT-BASILE/?registryId=7391579',
    },
    {
      image: ChipsLogo,
      title: 'Make a Donation.',
      link: 'https://give.chipsonline.org/give/181349/#!/donation/checkout',
    },
  ];

  return (
    <div className=" mx-auto bg-theme-light">
      <Banner />
      <Head>
        <title>Sylvie and Matt | Are Getting Married</title>
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
      <header className="max-w-[1440px] mx-auto w-full bg-theme-dark pb-[78px] flex flex-col justify-between">
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
        <img className="w-[500px] mx-auto	" src="M_S_sketch_white.png" alt="" />
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
          className=" py-[72px] md:py-[144px] bg-theme-light text-theme-dark"
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
              Where to Eat & Drink
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
          className="px-[32px] md:px-[76px] py-[72px]  bg-theme-light text-theme-dark"
        >
          <div className="space-y-2 ">
            <span className="uppercase text-[16px] md:text-[24px] ">
              Some Important Details
            </span>
            <h2 className="font-newsreader text-[40px] md:text-[72px] font-bold ">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 ">
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
          className="py-[72px] md:py-[144px] bg-theme-light text-theme-dark overflow-scroll-none"
        >
          <div className="px-[32px] md:px-[76px] space-y-2">
            <span className="uppercase text-[16px] md:text-[24px] ">
              A FEW PHOTOS
            </span>
            <h2 className="font-newsreader text-[40px] md:text-[72px] font-bold ">
              Some highlights from our time together so far…
            </h2>
          </div>
          <div className=" relative  mt-[32px]">
            <MemoryGallery />
          </div>
        </section>
        <section
          id="contact"
          className="max-w-[1440px] pb-[72px] md:pb-[144px] bg-theme-light text-theme-dark text-center"
        >
          <div className="px-[32px] md:px-[76px] md:space-y-2">
            <span className="uppercase text-[12px] md:text-[24px] ">
              NEED MORE INFO?
            </span>
            <h2 className="font-newsreader text-[24px] md:text-[48px] font-bold ">
              Feel free to send us a note here
            </h2>
            <a
              href="mailto:Flormanbasile@gmail.com"
              className="text-[16px] md:text-[48px] font-light underline hover:bg-theme-dark hover:text-theme-light "
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
