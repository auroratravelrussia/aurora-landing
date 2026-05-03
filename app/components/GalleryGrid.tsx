"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Camera, Film, Volume2, VolumeX } from "lucide-react";

type GalleryItem = {
  id: number;
  type: "photo" | "video";
  category: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  featured?: boolean;
  videoSrc?: string;
};

const items: GalleryItem[] = [
  // Moscow
  {
    id: 1,
    type: "photo",
    category: "moscow",
    src: "https://images.unsplash.com/photo-1656542664242-70ccd54f4337?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Red Square at sunset, Moscow",
    title: "Red Square at Sunset",
    location: "Moscow",
    featured: true,
  },
  {
    id: 2,
    type: "photo",
    category: "moscow",
    src: "https://images.unsplash.com/photo-1563025349-1a7095564408?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "St. Basil's Cathedral domes",
    title: "St. Basil's Cathedral",
    location: "Moscow",
  },
  {
    id: 3,
    type: "photo",
    category: "moscow",
    src: "https://plus.unsplash.com/premium_photo-1697729939290-40a6275148cd?q=80&w=3762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Moscow cityscape",
    title: "Moscow Skyline",
    location: "Moscow",
  },
  {
    id: 4,
    type: "video",
    category: "moscow",
    src: "",
    alt: "Russian imperial outfit at Tsaritsyno",
    title: "Tsaritsyno Royal Russian Outfit Experience",
    location: "Tsaritsyno, Moscow",
    videoSrc: "/vid1.MP4",
  },

  // Saint Petersburg
  {
    id: 5,
    type: "photo",
    category: "saint-petersburg",
    src: "/saintp.avif",
    alt: "Saint Petersburg waterfront",
    title: "St. Petersburg at Dusk",
    location: "St. Petersburg",
    featured: true,
  },
  {
    id: 6,
    type: "photo",
    category: "saint-petersburg",
    src: "https://images.unsplash.com/photo-1556610961-2fecc5927173?w=800&q=80",
    alt: "Night at Saint Petersburg",
    title: "Night at Saint Petersburg",
    location: "St. Petersburg",
  },
  {
    id: 7,
    type: "video",
    category: "murmanks",
    src: "",
    alt: "Aurora Hunting Journey",
    title: "Aurora Hunting Journey",
    location: "Murmanks",
    videoSrc: "/vid2.MP4",
  },

  // Murmansk
  {
    id: 8,
    type: "photo",
    category: "murmansk",
    src: "/aurora.avif",
    alt: "Northern lights over Murmansk",
    title: "Chasing the Aurora",
    location: "Murmansk",
    featured: true,
  },
  // {
  //   id: 9,
  //   type: "photo",
  //   category: "murmansk",
  //   src: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80",
  //   alt: "Northern lights dancing in the sky",
  //   title: "Arctic Nights",
  //   location: "Murmansk",
  // },
  // {
  //   id: 10,
  //   type: "video",
  //   category: "murmansk",
  //   src: "",
  //   alt: "Northern lights timelapse",
  //   title: "Northern Lights Experience",
  //   location: "Murmansk",
  //   videoSrc: "/vid1.MP4",
  // },

  // Stories
  {
    id: 11,
    type: "photo",
    category: "stories",
    src: "/p1.jpeg",
    alt: "Aurora travelers on a trip",
    title: "Shared Moments",
    location: "Russia",
  },
  {
    id: 12,
    type: "photo",
    category: "stories",
    src: "/p2.jpeg",
    alt: "Group photo on tour",
    title: "Aurora Travelers",
    location: "Russia",
  },
  {
    id: 13,
    type: "photo",
    category: "stories",
    src: "/p3.jpeg",
    alt: "Memorable trip moment",
    title: "Memories Made",
    location: "Russia",
    featured: true,
  },
];

const categories = [
  { id: "all", label: "All Trips" },
  { id: "moscow", label: "Moscow" },
  { id: "saint-petersburg", label: "St. Petersburg" },
  { id: "murmansk", label: "Murmansk" },
  { id: "stories", label: "Our Stories" },
];

function VideoCard({
  item,
  isWide,
  onClick,
}: {
  item: GalleryItem;
  isWide: boolean;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setMuted(true);
    v.muted = true;
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-lift transition-shadow duration-300 bg-aurora-900 ${isWide ? "sm:col-span-2 aspect-video" : "aspect-[4/3]"
        }`}
    >
      <video
        ref={videoRef}
        src={item.videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient — always, so text readable */}
      <div className="absolute inset-0 bg-linear-to-t from-aurora-900/80 via-aurora-900/10 to-transparent" />

      {/* Bottom info */}
      <div className="absolute bottom-0 inset-x-0 p-4">
        <p className="text-white font-display font-bold text-lg leading-tight drop-shadow">
          {item.title}
        </p>
        <p className="flex items-center gap-1 text-aurora-200 text-sm mt-0.5">
          <MapPin size={11} />
          {item.location}
        </p>
      </div>

      {/* Type badge */}
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft">
        <Film size={12} className="text-aurora-700" />
      </div>

      {/* Mute toggle — visible on hover */}
      <button
        onClick={toggleMute}
        className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? (
          <VolumeX size={12} className="text-aurora-700" />
        ) : (
          <Volume2 size={12} className="text-aurora-700" />
        )}
      </button>
    </motion.div>
  );
}

function PhotoCard({
  item,
  isWide,
  onClick,
}: {
  item: GalleryItem;
  isWide: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-lift transition-shadow duration-300 ${isWide ? "sm:col-span-2 aspect-video" : "aspect-[4/3]"
        }`}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      <div className="absolute inset-0 bg-linear-to-t from-aurora-900/80 via-aurora-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 inset-x-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        <p className="text-white font-display font-bold text-lg leading-tight drop-shadow">
          {item.title}
        </p>
        <p className="flex items-center gap-1 text-aurora-200 text-sm mt-0.5">
          <MapPin size={11} />
          {item.location}
        </p>
      </div>

      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft">
        <Camera size={12} className="text-aurora-700" />
      </div>
    </motion.div>
  );
}

export default function GalleryGrid() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [videoModal, setVideoModal] = useState<GalleryItem | null>(null);

  const filtered =
    active === "all" ? items : items.filter((i) => i.category === active);

  const handleOpen = (item: GalleryItem) => {
    if (item.type === "video") setVideoModal(item);
    else setLightbox(item);
  };

  return (
    <section className="py-16 md:py-24 bg-aurora-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-bold uppercase tracking-widest text-xs text-aurora-600 mb-3">
            Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">
            Every trip, a{" "}
            <span className="aurora-text italic">story worth telling</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-lg">
            Photos and videos from our journeys — the smiles, the landscapes,
            the moments that stay with you forever.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${active === cat.id
                  ? "bg-aurora-gradient text-white shadow-glow"
                  : "bg-white border border-aurora-100 text-muted hover:border-aurora-300 hover:text-aurora-700 shadow-soft"
                }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-sm text-muted mb-8">
          Showing{" "}
          <span className="font-semibold text-aurora-600">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "moment" : "moments"} captured
        </p>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const isWide = active === "all" && !!item.featured;
              return item.type === "video" ? (
                <VideoCard
                  key={item.id}
                  item={item}
                  isWide={isWide}
                  onClick={() => handleOpen(item)}
                />
              ) : (
                <PhotoCard
                  key={item.id}
                  item={item}
                  isWide={isWide}
                  onClick={() => handleOpen(item)}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-aurora-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden shadow-lift"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[90vh] object-contain bg-aurora-900/50"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-aurora-900 to-transparent">
                <p className="text-white font-display font-bold text-2xl">
                  {lightbox.title}
                </p>
                <p className="flex items-center gap-1.5 text-aurora-300 text-sm mt-1">
                  <MapPin size={13} />
                  {lightbox.location}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-aurora-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden shadow-lift"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videoModal.videoSrc}
                className="w-full h-full object-contain bg-aurora-900"
                controls
                autoPlay
                playsInline
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-linear-to-t from-aurora-900/80 to-transparent pointer-events-none">
                <p className="text-white font-display font-bold text-xl">
                  {videoModal.title}
                </p>
                <p className="flex items-center gap-1.5 text-aurora-300 text-sm mt-0.5">
                  <MapPin size={12} />
                  {videoModal.location}
                </p>
              </div>
              <button
                onClick={() => setVideoModal(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close video"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
