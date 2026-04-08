import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "../lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-aurora-50/50 pt-20 pb-10 overflow-hidden border-t border-aurora-100">
      <div className="absolute top-0 right-0 w-96 h-96 aurora-glow opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-sm text-muted leading-relaxed mt-5 max-w-xs">
              Premium private, corporate, VIP, and educational travel
              experiences across Russia.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-aurora-800">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-aurora-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-aurora-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-aurora-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/values"
                  className="hover:text-aurora-600 transition-colors"
                >
                  Values
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-aurora-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-aurora-800">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>Private Tour</li>
              <li>Corporate Tour</li>
              <li>VIP Tour</li>
              <li>Education Tour</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-aurora-800">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 flex-shrink-0 text-aurora-500" />
                <span>{company.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 flex-shrink-0 text-aurora-500" />
                <span className="break-all">{company.contact.email}</span>
              </li>
              <li className="flex items-start gap-2">
                {/* <Instagram
                  size={14}
                  className="mt-1 flex-shrink-0 text-aurora-500"
                /> */}
                <span>{company.contact.instagram}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0 text-aurora-500" />
                <span>Russia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-aurora-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Aurora Trip. All rights reserved.</p>
          <p className="font-script text-base text-aurora-500">
            Crafted for travelers who love Russia
          </p>
        </div>
      </div>
    </footer>
  );
}
