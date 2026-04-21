'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-[#0F111E]/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-[#22C55E] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FBL</span>
            </div>
            <span className="font-bold text-lg text-[#0F111E] hidden sm:inline">Fellowship</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-medium text-[#0F111E]/70 hover:text-[#0F111E] hover:bg-[#0F111E]/5 rounded-lg transition-all"
            >
              About
            </Link>
            <Link 
              href="/membership" 
              className="px-4 py-2 text-sm font-medium text-[#0F111E]/70 hover:text-[#0F111E] hover:bg-[#0F111E]/5 rounded-lg transition-all"
            >
              Membership
            </Link>
            <Link 
              href="/chapters" 
              className="px-4 py-2 text-sm font-medium text-[#0F111E]/70 hover:text-[#0F111E] hover:bg-[#0F111E]/5 rounded-lg transition-all"
            >
              Chapters
            </Link>
            <div className="w-px h-6 bg-[#0F111E]/10 mx-2"></div>
            <Link 
              href="/apply"
              className="ml-2 bg-[#22C55E] text-white px-5 py-2.5 text-sm font-semibold rounded-lg hover:bg-[#16A34A] hover:shadow-md transition-all"
            >
              Apply
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#0F111E] hover:bg-[#0F111E]/5 rounded-lg transition-all"
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
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-2 border-t border-[#0F111E]/5 mt-5">
            <Link 
              href="/about" 
              className="px-4 py-3 text-sm font-medium text-[#0F111E]/70 hover:text-[#0F111E] hover:bg-[#0F111E]/5 rounded-lg transition-all"
            >
              About
            </Link>
            <Link 
              href="/membership" 
              className="px-4 py-3 text-sm font-medium text-[#0F111E]/70 hover:text-[#0F111E] hover:bg-[#0F111E]/5 rounded-lg transition-all"
            >
              Membership
            </Link>
            <Link 
              href="/chapters" 
              className="px-4 py-3 text-sm font-medium text-[#0F111E]/70 hover:text-[#0F111E] hover:bg-[#0F111E]/5 rounded-lg transition-all"
            >
              Chapters
            </Link>
            <Link 
              href="/apply"
              className="mt-2 bg-[#22C55E] text-white px-5 py-3 text-sm font-semibold rounded-lg hover:bg-[#16A34A] text-center transition-all"
            >
              Apply for Membership
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
