import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "../lib/data";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact – Aurora Trip",
  description:
    "Get in touch with Aurora Trip to plan your premium Russian travel experience.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Talk"
        title="Get in"
        italicWord="Touch"
        imageSrc="/saintp.avif"
        subtitle="Ready to plan your journey? Tell us what you dream of, and we'll handle everything that comes next."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: Phone,
                label: "Phone / WhatsApp",
                value: company.contact.phone,
              },
              {
                icon: Mail,
                label: "Email",
                value: company.contact.email,
              },
              {
                icon: Mail,
                label: "Instagram",
                value: company.contact.instagram,
              },
              {
                icon: MapPin,
                label: "Operating Area",
                value: "Moscow · St. Petersburg · Murmansk",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="group bg-white rounded-3xl p-6 shadow-soft hover:shadow-card transition-all flex gap-4 items-start border border-aurora-100">
                  <div className="w-12 h-12 rounded-xl bg-aurora-gradient flex items-center justify-center shrink-0 shadow-glow group-hover:scale-110 transition-transform">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="font-semibold text-ink break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="bg-linear-to-br from-aurora-50 to-white rounded-3xl p-8 md:p-10 shadow-soft border border-aurora-100">
              <p className="font-script text-3xl text-aurora-500 mb-1">
                Say hello
              </p>
              <h2 className="font-display text-3xl font-bold text-ink mb-2">
                Send us a message
              </h2>
              <p className="text-muted mb-8">
                We typically reply within one business day.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-card h-80 bg-aurora-900">

              {/* Background image */}
              <Image
                src="/aurora.avif"
                alt="Russia"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
              />

              {/* Overlay — keeps your gradient on top of the image */}
              <div className="absolute inset-0 bg-linear-to-br from-aurora-900/90 via-aurora-800/80 to-aurora-900/90" />
              {/* <div className="absolute -top-20 -right-20 w-96 h-96 bg-glow-violet/40 blur-3xl" /> */}
              {/* <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-glow-cyan/30 blur-3xl" /> */}
              <div className="absolute inset-0 dots-pattern opacity-10" />

              <div className="relative h-full flex items-center justify-center text-center text-white">
                <div>
                  {/* <div className="w-16 h-16 rounded-2xl bg-aurora-gradient flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <MapPin size={28} className="text-white" />
                  </div> */}
                  <p className="font-display text-3xl font-bold mb-2">
                    Based in{" "}
                    <span className="aurora-text italic">Russia</span>
                  </p>
                  <p className="text-aurora-200 text-sm max-w-md mx-auto">
                    Serving travelers across Moscow, St. Petersburg, and the
                    Arctic North
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
