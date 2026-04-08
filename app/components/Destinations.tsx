"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { destinations } from "../lib/data";
import Reveal from "./Reveal";

export default function Destinations() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <Reveal>
              <p className="text-aurora-600 font-bold uppercase tracking-widest text-sm mb-3">
                Top Selling
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink">
                Top{" "}
                <span className="aurora-text italic">Destinations</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-muted max-w-md">
              From the golden domes of Moscow to the auroras of Murmansk — these
              are the journeys our travelers love most.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-aurora-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-aurora-700">
                  {d.price}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-script text-xl leading-none">
                    {d.subtitle}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={14} className="text-aurora-600" />
                  <h3 className="font-display text-xl font-bold text-ink">
                    {d.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted text-sm">
                    <Clock size={14} />
                    <span>{d.duration}</span>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-aurora-500 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
