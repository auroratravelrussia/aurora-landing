import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Briefcase,
  Crown,
  GraduationCap,
  ArrowRight,
  Award,
  Handshake,
  Headphones,
} from "lucide-react";
import { services } from "../lib/data";
import PageHero from "../_components/PageHero";
import Reveal from "../_components/Reveal";

export const metadata: Metadata = {
  title: "Services – Aurora Trip",
  description:
    "Private, Corporate, VIP, and Educational tours in Russia. Customized premium travel experiences from Aurora Trip.",
};

const iconMap = { Compass, Briefcase, Crown, GraduationCap };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our"
        italicWord="Services"
        subtitle="Four ways to travel Russia — each one crafted around who you are and how you want to experience the journey."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <Reveal key={s.id} delay={i * 0.1}>
                  <div className="gradient-border group relative bg-white rounded-3xl p-10 shadow-soft hover:shadow-card transition-all h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-aurora-gradient flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <Icon size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-bold text-ink mb-3">
                          {s.title}
                        </h3>
                        <p className="text-muted leading-relaxed mb-6">
                          {s.short}
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-aurora-600 font-semibold group-hover:gap-3 transition-all"
                        >
                          Inquire Now
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional features */}
      <section className="py-20 bg-aurora-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-ink mb-14">
              What makes every trip{" "}
              <span className="aurora-text italic">effortless</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Strong Local Networks",
                text: "Trusted partnerships across Russia that unlock experiences most travelers never see.",
              },
              {
                icon: Award,
                title: "Experienced Tour Management",
                text: "Seasoned guides and coordinators who handle every detail with quiet expertise.",
              },
              {
                icon: Headphones,
                title: "24/7 Support During Trips",
                text: "A real human on the other end of the line, any hour of the day, anywhere on your journey.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 text-center shadow-soft hover:shadow-card transition-shadow border border-aurora-100 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-aurora-gradient flex items-center justify-center mx-auto mb-5 shadow-glow">
                    <f.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-3">
                    {f.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
