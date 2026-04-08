"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-aurora-800 mb-2">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full px-5 py-3.5 rounded-xl bg-white border border-aurora-200 outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-100 transition-all"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-aurora-800 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-5 py-3.5 rounded-xl bg-white border border-aurora-200 outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-100 transition-all"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-aurora-800 mb-2">
          Tour Type
        </label>
        <select className="w-full px-5 py-3.5 rounded-xl bg-white border border-aurora-200 outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-100 transition-all">
          <option>Private Tour</option>
          <option>Corporate Tour</option>
          <option>VIP Tour</option>
          <option>Education Tour</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-aurora-800 mb-2">
          Message
        </label>
        <textarea
          rows={5}
          required
          className="w-full px-5 py-3.5 rounded-xl bg-white border border-aurora-200 outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-100 transition-all resize-none"
          placeholder="Tell us about your dream journey..."
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-4 bg-aurora-gradient text-white font-semibold rounded-xl shadow-glow hover:scale-[1.02] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
      >
        {sent ? "Message Sent ✓" : "Send Message"}
        {!sent && <Send size={16} />}
      </button>
    </form>
  );
}
