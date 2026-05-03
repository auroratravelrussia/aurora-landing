import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { company } from "../lib/data";
import PageHero from "../_components/PageHero";
import Reveal from "../_components/Reveal";

export const metadata: Metadata = {
  title: "About – Aurora Trip",
  description:
    "Learn about Aurora Trip, a professional travel agency specializing in Private, Corporate, VIP, and Educational tours across Russia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About"
        italicWord="Aurora Trip"
        subtitle="Your trusted travel partner for premium journeys across Russia and surrounding regions."
      />

      {/* Story */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="bg-white rounded-3xl shadow-soft p-10 md:p-14 space-y-6 border border-aurora-100">
              <p className="font-script text-3xl text-aurora-500">Our Story</p>
              <p className="text-muted text-lg leading-relaxed">{company.intro}</p>
              <p className="text-muted text-lg leading-relaxed">
                {company.commitment}
              </p>
              <p className="text-muted text-lg leading-relaxed">
                {company.networks}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="relative bg-aurora-900 text-white rounded-3xl p-10 md:p-12 overflow-hidden h-full">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-glow-violet/40 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-glow-cyan/30 blur-3xl" />
              <div className="relative">
                <p className="text-glow-cyan font-bold uppercase tracking-widest text-xs mb-3">
                  Our Mission
                </p>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Inspiring journeys,{" "}
                  <span className="aurora-text italic">everywhere.</span>
                </h2>
                <p className="text-aurora-100 leading-relaxed text-lg">
                  {company.mission}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="bg-linear-to-br from-aurora-50 to-white rounded-3xl p-10 md:p-12 h-full border border-aurora-100">
              <p className="text-aurora-600 font-bold uppercase tracking-widest text-xs mb-3">
                Our Vision
              </p>
              <h2 className="font-display text-3xl font-bold text-ink mb-6">
                The path we{" "}
                <span className="aurora-text italic">walk.</span>
              </h2>
              <ul className="space-y-4">
                {company.vision.map((v, i) => (
                  <li key={v} className="flex gap-3 text-muted">
                    <div className="w-7 h-7 rounded-full bg-aurora-gradient flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="leading-relaxed">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-12">
              Moments from the{" "}
              <span className="aurora-text italic">road</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/p2.jpeg",
              "/p3.jpeg",
              "/p1.jpeg",
              "https://images.unsplash.com/photo-1556610961-2fecc5927173?w=700&q=80",
            ].map((src, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className={`rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow ${
                    i % 2 === 0 ? "h-52" : "h-72 md:mt-8"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.2s] ease-out"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
