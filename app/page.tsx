import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-50"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 rounded-full mb-8">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
            <span className="text-sm font-medium text-[#0F111E]">Faith-Driven Leadership Network</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-[#0F111E] mb-8">
            Fellowship of<br/>
            <span className="text-[#22C55E]">Business Leaders</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#0F111E]/60 max-w-3xl mx-auto leading-relaxed mb-12">
            A high-trust network of business owners, operators, and executives building with conviction and accountability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 text-base font-semibold rounded-xl hover:bg-[#16A34A] hover:shadow-lg hover:shadow-[#22C55E]/25 transition-all"
            >
              Apply for Membership
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
            <Link 
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0F111E]/10 text-[#0F111E] px-8 py-4 text-base font-semibold rounded-xl hover:border-[#0F111E]/30 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What FBL Is NOT - Redesigned */}
      <section className="relative py-24 md:py-32 gradient-dark text-white overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="text-sm font-medium text-white/80">Setting Expectations</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            This is not a<br/>networking group.
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            <p>
              It's not a church group.<br/>
              And it's definitely not a pay-to-play membership club.
            </p>
            <p className="text-white/90 font-medium">
              FBL is a structured environment for growth, accountability, and alignment—where business, leadership, and faith are intentionally integrated.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars - Card Design */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/10 rounded-full mb-6">
              <span className="text-sm font-medium text-[#0F111E]">Built On</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F111E]">
              Three Core Pillars
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="group relative bg-gradient-to-br from-white to-[#22C55E]/5 p-8 rounded-2xl border border-[#0F111E]/5 hover:border-[#22C55E]/30 hover:shadow-xl hover:shadow-[#22C55E]/10 transition-all">
              <div className="w-14 h-14 bg-[#22C55E] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0F111E] mb-4">High Trust</h3>
              <p className="text-[#0F111E]/60 leading-relaxed">
                Curated membership through application, covenant, and assessment. Protected room = protected value.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group relative bg-gradient-to-br from-white to-[#22C55E]/5 p-8 rounded-2xl border border-[#0F111E]/5 hover:border-[#22C55E]/30 hover:shadow-xl hover:shadow-[#22C55E]/10 transition-all">
              <div className="w-14 h-14 bg-[#22C55E] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0F111E] mb-4">High Expectation</h3>
              <p className="text-[#0F111E]/60 leading-relaxed">
                Active builders committed to growth through truth, challenge, and real accountability.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group relative bg-gradient-to-br from-white to-[#22C55E]/5 p-8 rounded-2xl border border-[#0F111E]/5 hover:border-[#22C55E]/30 hover:shadow-xl hover:shadow-[#22C55E]/10 transition-all">
              <div className="w-14 h-14 bg-[#22C55E] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0F111E] mb-4">High Accountability</h3>
              <p className="text-[#0F111E]/60 leading-relaxed">
                Real relationships and ongoing collaboration—not surface-level networking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For - Modern List */}
      <section className="relative py-24 md:py-32 gradient-dark text-white overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="text-sm font-medium text-white/80">Membership Criteria</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              You belong here if:
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              "You're actively building something (not just thinking about it)",
              "You want to lead with conviction, not just chase profit",
              "You value accountability, truth, and real conversations",
              "You're open to being challenged and sharpened"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                <div className="flex-shrink-0 w-6 h-6 bg-[#22C55E] rounded-lg flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-lg text-white/90">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-white/70 mb-8">
              If that's you, we'd like to meet you.
            </p>
            <Link 
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 text-base font-semibold rounded-xl hover:bg-[#16A34A] hover:shadow-lg hover:shadow-[#22C55E]/25 transition-all"
            >
              Apply for Membership
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold Statement */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F111E] mb-6 leading-tight">
            You don't grow<br/>in isolation.
          </h2>
          <p className="text-xl md:text-2xl text-[#0F111E]/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            FBL creates a system where growth happens on purpose—through structure, accountability, and the right people.
          </p>
          <Link 
            href="/apply"
            className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 text-base font-semibold rounded-xl hover:bg-[#16A34A] hover:shadow-lg hover:shadow-[#22C55E]/25 transition-all"
          >
            Start Your Application
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
