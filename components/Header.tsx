'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0F111E] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl hover:text-[#22C55E] transition-colors">
            FBL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-white/80 hover:text-[#22C55E] transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/membership" className="text-white/80 hover:text-[#22C55E] transition-colors text-sm font-medium">
              Membership
            </Link>
            <Link href="/chapters" className="text-white/80 hover:text-[#22C55E] transition-colors text-sm font-medium">
              Chapters
            </Link>
            <Link 
              href="/apply"
              className="bg-[#22C55E] text-white px-6 py-2.5 text-sm font-medium rounded-lg hover:bg-[#16A34A] transition-colors"
            >
              Apply
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4">
            <Link href="/about" className="text-white/80 hover:text-[#22C55E] text-sm font-medium">
              About
            </Link>
            <Link href="/membership" className="text-white/80 hover:text-[#22C55E] text-sm font-medium">
              Membership
            </Link>
            <Link href="/chapters" className="text-white/80 hover:text-[#22C55E] text-sm font-medium">
              Chapters
            </Link>
            <Link 
              href="/apply"
              className="bg-[#22C55E] text-white px-6 py-2.5 text-sm font-medium rounded-lg hover:bg-[#16A34A] text-center mt-2"
            >
              Apply
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
