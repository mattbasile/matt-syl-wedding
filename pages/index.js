import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import DateCard from './components/DateCard';
import HorizontalGallery from './components/HorizontalGallery';
import WilliamValeImage from '../public/william_vale.jpg';

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
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Book $400',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Book $400',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
    },
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Book $400',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
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
    {
      name: 'William Vale',
      link: 'https://www.thewilliamvale.com/',
      price: 'Plan your visit',
      distance: '5 minute walk',
      tagline: 'Sylvie and Matt are staying here!',
      image: WilliamValeImage,
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
            <span className="uppercase text-[16px] md:text-[24px] font-semibold">
              Join us in Brooklyn
            </span>
            <h2 className="font-newsreader  text-[40px] md:text-[96px] font-bold ">
              Marriage Celebration
            </h2>
          </div>
          <p className="text-[16px] md:text-[24px] leading-[32px] md:leading-[44px] max-w-[1010px] mx-auto">
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
            <span className="uppercase text-[16px] md:text-[24px] font-semibold">
              What's the Plan?
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
            <span className="uppercase text-[16px] md:text-[24px] font-semibold">
              Where to stay? What to do?
            </span>
            <h2 className="font-newsreader text-[40px] md:text-[80px] font-bold ">
              Travel & Our Recommendations
            </h2>
          </div>
          <p className=" px-[32px] md:px-[76px]text-[16px] md:text-[24px] leading-[32px] md:leading-[44px] max-w-[1252px] mx-auto text-center">
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
      </main>
    </div>
  );
}
