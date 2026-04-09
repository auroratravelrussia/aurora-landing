"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    formRef.current?.reset();
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-5">
        <div className="w-20 h-20 rounded-full bg-aurora-100 flex items-center justify-center">
          <CheckCircle className="text-aurora-500 w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-aurora-800">
            Message Sent!
          </h3>
          <p className="text-aurora-600 max-w-sm">
            Thanks for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="px-6 py-3 rounded-xl border border-aurora-300 text-aurora-700 font-semibold hover:bg-aurora-50 transition-all text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-aurora-800 mb-2">
            Name
          </label>
          <div className="relative">
            <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-aurora-400 pointer-events-none" />
            <input
              name="from_name"
              type="text"
              required
              disabled={status === "loading"}
              className="w-full pl-10 pr-5 py-3.5 rounded-xl bg-white border border-aurora-200 outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-100 transition-all disabled:opacity-60"
              placeholder="Your full name"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-aurora-800 mb-2">
            Email
          </label>
          <div className="relative">
            <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-aurora-400 pointer-events-none" />
            <input
              name="reply_to"
              type="email"
              required
              disabled={status === "loading"}
              className="w-full pl-10 pr-5 py-3.5 rounded-xl bg-white border border-aurora-200 outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-100 transition-all disabled:opacity-60"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-aurora-800 mb-2">
          Tour Type
        </label>
        <select
          name="tour_type"
          disabled={status === "loading"}
          className="w-full px-5 py-3.5 rounded-xl bg-white border border-aurora-200 outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-100 transition-all disabled:opacity-60"
        >
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
        <div className="relative">
          <MessageSquare size={15} className="absolute left-4 top-4 text-aurora-400 pointer-events-none" />
          <textarea
            name="message"
            rows={5}
            required
            disabled={status === "loading"}
            className="w-full pl-10 pr-5 py-3.5 rounded-xl bg-white border border-aurora-200 outline-none focus:border-aurora-500 focus:ring-4 focus:ring-aurora-100 transition-all resize-none disabled:opacity-60"
            placeholder="Tell us about your dream journey..."
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full md:w-auto px-8 py-4 bg-aurora-gradient text-white font-semibold rounded-xl shadow-glow hover:scale-[1.02] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}