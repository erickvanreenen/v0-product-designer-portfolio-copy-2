"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="text-base font-medium tracking-tight text-foreground group-hover:text-[#F0531C] transition-colors duration-200">
            Erick van Reenen
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm px-4 py-2 rounded-full transition-all duration-200",
                  pathname === item.href
                    ? "bg-[#09332C] text-[#F7EDDA]"
                    : "text-foreground/60 hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-[#F0531C] transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/30 animate-in slide-in-from-top-2 duration-200">
          <ul className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-base py-3 px-4 rounded-lg transition-all duration-200",
                    pathname === item.href
                      ? "bg-[#09332C] text-[#F7EDDA] font-medium"
                      : "text-foreground/60 active:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
