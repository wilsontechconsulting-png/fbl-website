import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F111E] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#22C55E] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FBL</span>
              </div>
              <span className="font-bold text-lg">Fellowship of Business Leaders</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md">
              A faith-driven network of business leaders building with conviction and accountability.
            </p>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">
                501(c)(3) Nonprofit Organization
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#22C55E] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-white/60 hover:text-[#22C55E] transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/chapters" className="text-white/60 hover:text-[#22C55E] transition-colors">
                  Chapters
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-white/60 hover:text-[#22C55E] transition-colors">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-[#22C55E] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-[#22C55E] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Fellowship of Business Leaders. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:member@fblconnect.com" 
                className="text-white/50 hover:text-[#22C55E] text-sm transition-colors"
              >
                member@fblconnect.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
