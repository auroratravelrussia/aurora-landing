"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/values", label: "Values" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isContact = pathname === "/contact";
  const isSolid = scrolled || isContact;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isSolid
        ? "bg-white/85 backdrop-blur-xl shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-[15px] font-medium text-muted hover:text-aurora-700 transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aurora-gradient group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex px-5 py-2.5 rounded-xl bg-aurora-gradient text-white text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
        >
          Get in Touch
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-aurora-800"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-aurora-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25, ease: "easeOut" }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all ${pathname === l.href
                      ? "bg-aurora-50 text-aurora-700"
                      : "text-ink hover:bg-aurora-50 hover:text-aurora-700"
                      }`}
                  >
                    {l.label}
                    {pathname === l.href && (
                      <span className="w-1.5 h-1.5 rounded-full bg-aurora-gradient" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}