"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  italicWord: string;
  subtitle: string;
  imageSrc?: string; // optional
};

export default function PageHero({ eyebrow, title, italicWord, subtitle, imageSrc }: Props) {
  return (
    <section className="relative pt-40 pb-16 overflow-hidden">
      {/* Background — image if provided, else default soft gradient */}
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover -z-10"
            priority
            loading="eager"
          />
          <div className="absolute inset-0 bg-aurora-900/70 -z-10" />
        </>
      ) : (
        <div className="absolute inset-0 bg-aurora-soft -z-10" />
      )}

      <div className="absolute top-20 -left-40 w-125 h-125 aurora-glow -z-10" />
      <div className="absolute top-20 right-10 w-32 h-32 dots-pattern opacity-50 -z-10" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`font-bold uppercase tracking-widest text-sm mb-4 ${
            imageSrc ? "text-aurora-200" : "text-aurora-600"
          }`}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight ${
            imageSrc ? "text-white" : "text-ink"
          }`}
        >
          {title}{" "}
          <span className="aurora-text italic">{italicWord}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className={`text-lg max-w-2xl mx-auto ${
            imageSrc ? "text-aurora-100" : "text-muted"
          }`}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}