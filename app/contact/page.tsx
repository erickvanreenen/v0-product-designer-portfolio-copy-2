"use client";

import React from "react"

import { useState } from "react";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
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

    // Simulate form submission
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
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6 text-balance">
            Let&apos;s connect
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Whether you have a project in mind, want to collaborate, or just want
            to say hello, I&apos;d love to hear from you.
          </p>
        </header>

        <div className="lg:grid lg:grid-cols-[1fr_400px] lg:gap-16">
          {/* Contact Form */}
          <div className="mb-16 lg:mb-0">
            {isSubmitted ? (
              <div className="bg-card border border-border/50 rounded-sm p-8 text-center">
                <h2 className="text-xl font-medium text-foreground mb-2">
                  Thank you for reaching out!
                </h2>
                <p className="text-muted-foreground mb-6">
                  I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-accent underline underline-offset-4 hover:text-foreground transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-foreground font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-foreground font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-foreground font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-accent hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <aside>
            <div className="space-y-8">
              <div>
                <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-4">
                  Direct contact
                </h2>
                <div className="space-y-4">
                  <Link
                    href="mailto:erickvanreenen@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-200 group"
                  >
                    <Mail size={18} className="text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                    <span className="text-sm">erickvanreenen@gmail.com</span>
                  </Link>
                  <Link
                    href="tel:+27620969497"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-200 group"
                  >
                    <Phone size={18} className="text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                    <span className="text-sm">+27 620 969 497</span>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-4">Location</h2>
                <div className="flex items-start gap-3 text-foreground">
                  <MapPin size={18} className="text-muted-foreground mt-0.5" />
                  <span className="text-sm">Cape Town, South Africa</span>
                </div>
              </div>

              <div>
                <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-4">Social</h2>
                <Link
                  href="https://linkedin.com/in/erickvanreenen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-200 group"
                >
                  <Linkedin size={18} className="text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                  <span className="text-sm">LinkedIn</span>
                </Link>
              </div>

              <div className="pt-8 border-t border-border/50">
                <h2 className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-4">
                  Availability
                </h2>
                <p className="text-sm text-foreground leading-relaxed">
                  Currently open to contract work, full-time positions, and
                  interesting freelance projects. I typically respond within 24-48
                  hours.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
