import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F111E] text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Links */}
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link href="/about" className="hover:text-[#22C55E] transition-colors">
              About
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/membership" className="hover:text-[#22C55E] transition-colors">
              Membership
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/chapters" className="hover:text-[#22C55E] transition-colors">
              Chapters
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/privacy" className="hover:text-[#22C55E] transition-colors">
              Privacy
            </Link>
            <span className="text-white/30">•</span>
            <Link href="/terms" className="hover:text-[#22C55E] transition-colors">
              Terms
            </Link>
          </nav>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
            <p>© {new Date().getFullYear()} Fellowship of Business Leaders</p>
            <span className="hidden sm:inline text-white/30">•</span>
            <p>501(c)(3) nonprofit organization</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
