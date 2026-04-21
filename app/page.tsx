import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0F111E]">
            Fellowship of Business Leaders
          </h1>
          <p className="text-xl md:text-2xl text-[#0F111E]/70 mt-6 max-w-3xl mx-auto leading-relaxed">
            A faith-driven network of high-caliber business owners, operators, and executives who are serious about building both their businesses and their leadership the right way.
          </p>
          <div className="mt-10">
            <Link 
              href="/apply"
              className="inline-block bg-[#22C55E] text-white px-10 py-4 text-base font-medium rounded-lg hover:bg-[#16A34A] transition-colors"
            >
              Apply for Membership
            </Link>
          </div>
        </div>
      </section>

      {/* What FBL Is NOT */}
      <section className="py-24 md:py-32 bg-[#0F111E] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            This is not a networking group.
          </h2>
          <div className="mt-8 space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
            <p>
              It's not a church group.<br/>
              And it's definitely not a pay-to-play membership club.
            </p>
            <p>
              FBL is a structured environment for growth, accountability, and alignment—where business, leadership, and faith are intentionally integrated.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0F111E] mb-16">
            What FBL Is Built On
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">High Trust</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                Every member is vetted through application, covenant, and assessment. If you don't protect the room, the room loses value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">High Expectation</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                Members are actively building something, want real accountability, and are committed to growth through truth and challenge.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">High Accountability</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                Real relationships, ongoing conversations, and proximity to people who are actually doing things—not surface-level contacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 md:py-32 bg-[#0F111E] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
            You belong here if:
          </h2>
          <ul className="space-y-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-left">
            <li className="flex items-start gap-3">
              <span className="text-[#22C55E] mt-1">•</span>
              <span>You're actively building something (not just thinking about it)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22C55E] mt-1">•</span>
              <span>You want to lead with conviction, not just chase profit</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22C55E] mt-1">•</span>
              <span>You value accountability, truth, and real conversations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22C55E] mt-1">•</span>
              <span>You're open to being challenged and sharpened</span>
            </li>
          </ul>
          <p className="mt-12 text-lg md:text-xl text-white/80">
            If that's you, we'd like to meet you.
          </p>
          <div className="mt-10">
            <Link 
              href="/apply"
              className="inline-block bg-[#22C55E] text-white px-10 py-4 text-base font-medium rounded-lg hover:bg-[#16A34A] transition-colors"
            >
              Apply for Membership
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-6">
            You don't grow in isolation.
          </h2>
          <p className="text-xl text-[#0F111E]/70 mb-10 max-w-2xl mx-auto">
            FBL creates a system where growth happens on purpose—through structure, accountability, and the right people.
          </p>
          <Link 
            href="/apply"
            className="inline-block bg-[#22C55E] text-white px-10 py-4 text-base font-medium rounded-lg hover:bg-[#16A34A] transition-colors"
          >
            Apply for Membership
          </Link>
        </div>
      </section>
    </>
  );
}
