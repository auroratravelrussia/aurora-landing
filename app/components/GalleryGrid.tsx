"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, MapPin, Camera, Film } from "lucide-react";

type GalleryItem = {
  id: number;
  type: "photo" | "video";
  category: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  featured?: boolean; // col-span-2 in "all" view
  videoId?: string;   // YouTube video ID — replace with real ID
};

const items: GalleryItem[] = [
  // Moscow
  {
    id: 1,
    type: "photo",
    category: "moscow",
    src: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1400&q=80",
    alt: "Red Square at sunset, Moscow",
    title: "Red Square at Sunset",
    location: "Moscow",
    featured: true,
  },
  {
    id: 2,
    type: "photo",
    category: "moscow",
    src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    alt: "St. Basil's Cathedral domes",
    title: "St. Basil's Cathedral",
    location: "Moscow",
  },
  {
    id: 3,
    type: "photo",
    category: "moscow",
    src: "/msc.avif",
    alt: "Moscow cityscape",
    title: "Moscow Skyline",
    location: "Moscow",
  },
  {
    id: 4,
    type: "video",
    category: "moscow",
    src: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
    alt: "Moscow city tour",
    title: "Moscow City Tour",
    location: "Moscow",
    videoId: "YOUR_VIDEO_ID",
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
    alt: "Palace Square, St. Petersburg",
    title: "Palace Square",
    location: "St. Petersburg",
  },
  {
    id: 7,
    type: "video",
    category: "saint-petersburg",
    src: "https://images.unsplash.com/photo-1556610961-2fecc5927173?w=800&q=80",
    alt: "St. Petersburg white nights",
    title: "White Nights Journey",
    location: "St. Petersburg",
    videoId: "YOUR_VIDEO_ID",
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
  {
    id: 9,
    type: "photo",
    category: "murmansk",
    src: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80",
    alt: "Northern lights dancing in the sky",
    title: "Arctic Nights",
    location: "Murmansk",
  },
  {
    id: 10,
    type: "video",
    category: "murmansk",
    src: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=800&q=80",
    alt: "Northern lights timelapse",
    title: "Northern Lights Experience",
    location: "Murmansk",
    videoId: "YOUR_VIDEO_ID",
  },

  // Stories — our travelers
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
        {/* Section header */}
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
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat.id
                  ? "bg-aurora-gradient text-white shadow-glow"
                  : "bg-white border border-aurora-100 text-muted hover:border-aurora-300 hover:text-aurora-700 shadow-soft"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Item count */}
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
              const isWide = active === "all" && item.featured;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => handleOpen(item)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-soft hover:shadow-lift transition-shadow duration-300 ${
                    isWide ? "sm:col-span-2 aspect-video" : "aspect-[4/3]"
                  }`}
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-aurora-900/80 via-aurora-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Video play overlay (always visible for videos) */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300">
                        <Play
                          size={20}
                          className="text-aurora-700 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  )}

                  {/* Bottom info — slides up on hover */}
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <p className="text-white font-display font-bold text-lg leading-tight drop-shadow">
                      {item.title}
                    </p>
                    <p className="flex items-center gap-1 text-aurora-200 text-sm mt-0.5">
                      <MapPin size={11} />
                      {item.location}
                    </p>
                  </div>

                  {/* Type badge — top right */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft">
                    {item.type === "video" ? (
                      <Film size={12} className="text-aurora-700" />
                    ) : (
                      <Camera size={12} className="text-aurora-700" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Photo Lightbox ── */}
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

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-aurora-900 to-transparent">
                <p className="text-white font-display font-bold text-2xl">
                  {lightbox.title}
                </p>
                <p className="flex items-center gap-1.5 text-aurora-300 text-sm mt-1">
                  <MapPin size={13} />
                  {lightbox.location}
                </p>
              </div>

              {/* Close */}
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

      {/* ── Video Modal ── */}
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
              {videoModal.videoId && videoModal.videoId !== "YOUR_VIDEO_ID" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoModal.videoId}?autoplay=1&rel=0`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={videoModal.title}
                />
              ) : (
                /* Placeholder shown when no real video ID is set yet */
                <div className="w-full h-full bg-aurora-900 flex flex-col items-center justify-center gap-5 px-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-aurora-gradient flex items-center justify-center shadow-glow">
                    <Play size={32} className="text-white ml-1.5" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-white font-display font-bold text-2xl mb-1">
                      {videoModal.title}
                    </p>
                    <p className="text-aurora-300 text-sm">
                      Video coming soon — replace{" "}
                      <code className="text-glow-cyan bg-aurora-800 px-1.5 py-0.5 rounded text-xs">
                        YOUR_VIDEO_ID
                      </code>{" "}
                      in GalleryGrid.tsx
                    </p>
                  </div>
                </div>
              )}

              {/* Close */}
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
