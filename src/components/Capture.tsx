"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

type CardType = {
  id: number;
  content: JSX.Element;
  className: string;
  thumbnail: string;
};

type SkeletonProps = {
  title: string;
  quote: string;
};

type CardSectionProps = {
  cards: CardType[];
};

const Capture = () => {
  return (
    <section className="py-40" id="captures">
      <div className="h-screen w-full">
      <h1 className="text-2xl md:text-7xl text-center font-bold text-green">
      Eyes Before Lens
      </h1>
      <div className="px-3 text-center my-4 italic dark:text-neutral-200">
      "Trying to capture the moments I see before the camera does."
      </div>
        <CardSection cards={cards.slice(0, 4)} />
        <CardSection cards={cards.slice(4, 8)} />
        <CardSection cards={cards.slice(8, 14)} />
      </div>
    </section>
  );
};

export default Capture;

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return <LayoutGrid cards={cards} className="hover:cursor-pointer" />;
};

const Skeleton: React.FC<SkeletonProps> = ({ title, quote }) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200 italic">"{quote}"</p>
    </div>
  );
};

const cards: CardType[] = [
  { id: 1, content: <Skeleton title="Nature's Web" quote="Every leaf speaks bliss to me, fluttering from the autumn tree." />, className: "md:col-span-2", thumbnail: "/Capture/1.webp" },
  { id: 2, content: <Skeleton title="Northern Lights" quote="Nature's light show dancing in the dark, painting the sky with ethereal colors." />, className: "col-span-1", thumbnail: "/Capture/aurora.jpg" },
  { id: 3, content: <Skeleton title="Shadow Play" quote="Where there is light, there must be shadow." />, className: "col-span-1", thumbnail: "/Capture/3.webp" },
  { id: 7, content: <Skeleton title="Cloud Symphony" quote="Every cloud has its own story to tell, painted across the canvas of the sky." />, className: "md:col-span-2", thumbnail: "/Capture/cloud.jpg" },

  { id: 10, content: <Skeleton title="Vancouver Twilight" quote="A city of lights, where the urban constellation meets the mountain's embrace, viewed from heaven's window." />, className: "md:col-span-2", thumbnail: "/Capture/plane.jpg" },
  { id: 4, content: <Skeleton title="Mystic Moon" quote="The moon is a friend for the lonesome to talk to." />, className: "col-span-1", thumbnail: "/Capture/4.jpg" },
  { id: 5, content: <Skeleton title="Sunset Bliss" quote="The sky broke like an egg into full sunset and the water caught fire." />, className: "col-span-1", thumbnail: "/Capture/yellow.jpg" },
  { id: 6, content: <Skeleton title="Green Canopy" quote="Look deep into nature, and then you will understand everything better." />, className: "md:col-span-2", thumbnail: "/Capture/5.webp" },

  { id: 9, content: <Skeleton title="Mountain Majesty" quote="Where earth touches sky, and sunlight paints the peaks in gold, nature reveals its grandest canvas." />, className: "md:col-span-2", thumbnail: "/Capture/view.jpeg" },
  { id: 11, content: <Skeleton title="Ocean's Guardian" quote="Where ancient stone meets eternal waves, standing sentinel over the endless blue." />, className: "col-span-1", thumbnail: "/Capture/rock.jpeg" },
  { id: 12, content: <Skeleton title="City's Heart" quote="Where city lights dance with midnight dreams in Toronto's beating heart." />, className: "col-span-1", thumbnail: "/Capture/dundas.jpeg" },
  { id: 13, content: <Skeleton title="Dome Experience" quote="The universe is under no obligation to make sense to you." />, className: "col-span-1", thumbnail: "/Capture/20230502_135537.webp" },
  { id: 14, content: <Skeleton title="Rain Vortex" quote="Where nature meets architecture, creating the world's tallest indoor waterfall, a symphony of water and light." />, className: "md:col-span-1", thumbnail: "/Capture/changi.jpeg" }
];
