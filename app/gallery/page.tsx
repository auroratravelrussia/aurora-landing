import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";
import FinalCTA from "../components/FinalCTA";

export const metadata: Metadata = {
  title: "Gallery – Aurora Trip",
  description:
    "Explore photos and videos from our unforgettable journeys across Russia — Moscow, St. Petersburg, Murmansk, and beyond.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story in Frames"
        title="Gallery of"
        italicWord="Memories"
        subtitle="Every road we've walked, every horizon we've chased — captured in moments worth a thousand words."
        imageSrc="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1600&q=80"
      />
      <GalleryGrid />
      <FinalCTA />
    </>
  );
}
