import Link from 'next/link';

export const metadata = {
  title: "Chapters | Fellowship of Business Leaders",
  description: "FBL chapters across the U.S. - local groups of aligned leaders building together.",
};

export default function ChaptersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0F111E] text-center mb-8">
            FBL Chapters
          </h1>
          <p className="text-xl md:text-2xl text-[#0F111E]/70 text-center max-w-3xl mx-auto leading-relaxed">
            Local groups of aligned leaders meeting consistently across major cities in the U.S.
          </p>
        </div>
      </section>

      {/* What a Chapter Is */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What an FBL Chapter Is</h2>
          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              An FBL chapter is a local or regional group of business owners, operators, and executives who meet consistently to:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Build real relationships (not surface-level contacts)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Challenge and sharpen each other through accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Work through business, leadership, and personal challenges together</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Grow in a structured, intentional environment</span>
              </li>
            </ul>
            <p className="pt-4">
              Chapters host FBL Tables, leadership discussions, and regional gatherings—creating proximity to people who are actually doing things.
            </p>
          </div>
        </div>
      </section>

      {/* Current Chapters */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-12 text-center">Current Chapters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F111E]">St. Louis</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F111E]">Northern KY / Cincinnati</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#22C55E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F111E]">Tampa Bay</h3>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-[#0F111E]/70">
              More chapters launching soon. National expansion is underway.
            </p>
          </div>
        </div>
      </section>

      {/* National Vision */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">National Chapter Network</h2>
          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              FBL is actively working toward a connected national network where:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Chapters exist across major cities in the U.S.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Local groups meet consistently for in-person FBL Tables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Relationships extend beyond geography through the national network</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Members collaborate across chapters and cities</span>
              </li>
            </ul>
            <p className="pt-4">
              This isn't mass expansion—it's careful, structured growth through aligned leaders who are building with conviction.
            </p>
          </div>
        </div>
      </section>

      {/* Starting a Chapter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-8">Starting an FBL Chapter</h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#0F111E]/70">
            <p>
              FBL is looking for the right leaders in the right cities to host and build local chapters.
            </p>
            <p className="font-semibold text-[#0F111E]">
              You should consider starting a chapter if:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>You're an active FBL member (or committed to becoming one)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>You're a business owner, operator, or executive with leadership experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>You want to build something structured and lasting in your city</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>You're willing to commit time and energy to host and facilitate local gatherings</span>
              </li>
            </ul>
            <p className="pt-4 font-semibold text-[#0F111E]">
              What FBL provides:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Training and support for chapter leaders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Structure, resources, and tools for running a chapter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Connection to the national FBL network</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Ongoing coaching and collaboration with other chapter leaders</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Starting a Chapter?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            If you're committed to building something structured and lasting in your city, we'd like to hear from you.
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
