import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#09332C] text-[#F7EDDA]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-2xl font-serif text-[#F7EDDA] mb-3">
              Let&apos;s work together
            </p>
            <p className="text-sm text-[#F7EDDA]/50 max-w-md leading-relaxed">
              Designed with curiosity and care in Cape Town.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="mailto:erickvanreenen@gmail.com"
              className="flex items-center gap-2 text-sm text-[#F7EDDA]/60 hover:text-[#FFA74F] transition-colors duration-200 group"
            >
              <Mail size={16} />
              <span>Email</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
            <Link
              href="https://linkedin.com/in/erickvanreenen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#F7EDDA]/60 hover:text-[#FFA74F] transition-colors duration-200 group"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F7EDDA]/10">
          <p className="text-xs text-[#F7EDDA]/30">
            &copy; {new Date().getFullYear()} Erick van Reenen
          </p>
        </div>
      </div>
    </footer>
  );
}
