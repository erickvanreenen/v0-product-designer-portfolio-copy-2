import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">
              Designed with curiosity and care in Cape Town
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} Erick van Reenen
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link
              href="mailto:erickvanreenen@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Mail size={18} />
              <span>erickvanreenen@gmail.com</span>
            </Link>
            <Link
              href="https://linkedin.com/in/erickvanreenen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
