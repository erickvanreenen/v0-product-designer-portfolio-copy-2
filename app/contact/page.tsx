"use client";

import React from "react";
import { useState } from "react";
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#09332C] text-[#F7EDDA]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F7EDDA] mb-6 text-balance">
            Let&apos;s connect
          </h1>
          <p className="text-lg text-[#F7EDDA]/60 max-w-2xl leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want
            to say hello, I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* Contact Form */}
          <div className="mb-16 lg:mb-0">
            {isSubmitted ? (
              <div className="bg-[#F7EDDA] rounded-lg p-10 text-center">
                <h2 className="text-xl font-semibold text-[#09332C] mb-2">
                  Thank you for reaching out!
                </h2>
                <p className="text-[#09332C]/60 mb-6">
                  I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-[#F0531C] underline underline-offset-4 hover:text-[#09332C] transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-foreground font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-[#F0531C] focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-foreground font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-[#F0531C] focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-foreground font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-[#F0531C] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#09332C] text-[#F7EDDA] text-sm font-medium rounded-full hover:bg-[#F0531C] hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <aside className="space-y-8">
            <div className="bg-[#F7EDDA] rounded-lg p-6">
              <h2 className="text-xs text-[#09332C]/50 font-medium uppercase tracking-wider mb-5">Direct contact</h2>
              <div className="space-y-4">
                <Link
                  href="mailto:erickvanreenen@gmail.com"
                  className="flex items-center gap-3 text-[#09332C] hover:text-[#F0531C] transition-colors duration-200 group"
                >
                  <Mail size={16} className="text-[#09332C]/40 group-hover:text-[#F0531C] transition-colors duration-200" />
                  <span className="text-sm">erickvanreenen@gmail.com</span>
                  <ArrowUpRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
                <Link
                  href="tel:+27620969497"
                  className="flex items-center gap-3 text-[#09332C] hover:text-[#F0531C] transition-colors duration-200 group"
                >
                  <Phone size={16} className="text-[#09332C]/40 group-hover:text-[#F0531C] transition-colors duration-200" />
                  <span className="text-sm">+27 620 969 497</span>
                </Link>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-xs text-foreground/40 font-medium uppercase tracking-wider mb-5">Location</h2>
              <div className="flex items-start gap-3 text-foreground">
                <MapPin size={16} className="text-foreground/40 mt-0.5" />
                <span className="text-sm">Cape Town, South Africa</span>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-xs text-foreground/40 font-medium uppercase tracking-wider mb-5">Social</h2>
              <Link
                href="https://linkedin.com/in/erickvanreenen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-[#F0531C] transition-colors duration-200 group"
              >
                <Linkedin size={16} className="text-foreground/40 group-hover:text-[#F0531C] transition-colors duration-200" />
                <span className="text-sm">LinkedIn</span>
                <ArrowUpRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </div>

            <div className="bg-[#09332C] rounded-lg p-6">
              <h2 className="text-xs text-[#FFA74F] font-medium uppercase tracking-wider mb-3">Availability</h2>
              <p className="text-sm text-[#F7EDDA]/70 leading-relaxed">
                Currently open to contract work, full-time positions, and
                interesting freelance projects. I typically respond within 24-48
                hours.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
