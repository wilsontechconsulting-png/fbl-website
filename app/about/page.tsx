import Link from 'next/link';

export const metadata = {
  title: "About | Fellowship of Business Leaders",
  description: "Learn about FBL's vision, structure, and mission to build leaders who build with conviction and accountability.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0F111E] text-center mb-8">
            About FBL
          </h1>
          <p className="text-xl md:text-2xl text-[#0F111E]/70 text-center max-w-3xl mx-auto leading-relaxed">
            A faith-driven network built for business leaders who are done leaving growth to chance.
          </p>
        </div>
      </section>

      {/* Why FBL Exists */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why FBL Exists</h2>
          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Most business leaders carry the weight alone.
            </p>
            <p>
              They make decisions no one else understands. They face challenges they can't share openly. They want to lead with conviction—but they're surrounded by noise, hype, and surface-level advice that doesn't hold up under real pressure.
            </p>
            <p>
              FBL exists because you don't grow in isolation—and you definitely don't lead well without alignment.
            </p>
            <p>
              So instead of leaving growth to chance, FBL creates a system where that growth happens on purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-8">Our Mission</h2>
          <p className="text-lg text-[#0F111E]/70 leading-relaxed max-w-3xl">
            To build a high-trust, high-accountability network of serious business leaders who are committed to growing the right way—and doing it together.
          </p>
        </div>
      </section>

      {/* What Makes FBL Different */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Makes FBL Different</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#22C55E]">Curated Membership</h3>
              <p className="text-white/80 leading-relaxed">
                Every member completes an application, signs a leadership covenant, and goes through an assessment process. We evaluate for alignment—not just success. If you don't protect the room, the room loses value.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#22C55E]">Structured Community</h3>
              <p className="text-white/80 leading-relaxed">
                Members are placed into a living ecosystem: Circle Community Platform for daily interaction, FBL Tables and Chapters for in-person connection, and direct relationships with other operators and leaders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#22C55E]">Business + Leadership Integration</h3>
              <p className="text-white/80 leading-relaxed">
                Most environments separate business strategy from faith and values. FBL brings them together. Business decisions are discussed through a values lens. Leadership is refined through accountability and truth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#22C55E]">Real Conversations</h3>
              <p className="text-white/80 leading-relaxed">
                No polished answers. No "rah-rah" motivation. Just honest feedback, real experiences, and direct input from people who've been there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-12">How FBL Works</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">Regional Chapters</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                Local groups of aligned leaders meeting consistently across major cities in the U.S. Chapters host FBL Tables, leadership discussions, and regional gatherings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">Circle Platform</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                Our members-only digital community for daily interaction, collaboration, and ongoing conversations. Not a social network—a structured space for real connection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">National Network</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                A connected network where relationships extend beyond geography. Members collaborate across chapters and cities, creating a true advantage in business and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who FBL Serves */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who FBL Serves</h2>
          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              FBL is built for business owners, operators, and executives who:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Are actively building something (not just thinking about it)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Want to lead with conviction, not just chase profit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Value accountability, truth, and real conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Are open to being challenged and sharpened</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-[#0F111E]/70 mb-10 max-w-2xl mx-auto">
            FBL is selective by design. If you're committed to growth through accountability and truth, we'd like to meet you.
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
