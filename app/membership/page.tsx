import Link from 'next/link';

export const metadata = {
  title: "Membership | Fellowship of Business Leaders",
  description: "What FBL membership includes, what's expected, and how to apply for the network.",
};

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0F111E] text-center mb-8">
            Membership
          </h1>
          <p className="text-xl md:text-2xl text-[#0F111E]/70 text-center max-w-3xl mx-auto leading-relaxed">
            High trust. High expectation. High accountability.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Membership Includes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#22C55E]">Access to Circle Community</h3>
              <p className="text-white/80 leading-relaxed">
                A members-only digital platform for daily interaction, collaboration, and ongoing conversations with other operators and leaders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#22C55E]">Local Chapter Membership</h3>
              <p className="text-white/80 leading-relaxed">
                Join a local or regional FBL chapter for in-person FBL Tables, leadership discussions, and structured gatherings with aligned leaders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#22C55E]">National Network Connection</h3>
              <p className="text-white/80 leading-relaxed">
                Direct relationships with business owners, operators, and executives across the country who are building with conviction and accountability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#22C55E]">Leadership Development</h3>
              <p className="text-white/80 leading-relaxed">
                Ongoing refinement through accountability, truth, and challenge—not just content consumption or one-time events.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#22C55E]">Real Conversations</h3>
              <p className="text-white/80 leading-relaxed">
                Honest feedback, real experiences, and direct input from people who've been there—not polished answers or surface-level advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Expected */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-12">What's Expected of Members</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">Active Participation</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                Show up. Engage. Contribute. This isn't a passive membership—it's a living community that requires your involvement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">Accountability</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                Be open to challenge. Be willing to give and receive honest feedback. Be committed to growth through truth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">Covenant Commitment</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                Every member signs a leadership covenant before joining. This isn't just paperwork—it's a commitment to how we lead and relate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">Contribution</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                Share your experience. Help other members. Add value to the room. FBL works when everyone brings something to the table.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F111E] mb-3">Confidentiality</h3>
              <p className="text-[#0F111E]/70 leading-relaxed">
                What's shared in FBL stays in FBL. High trust requires discretion and respect for the privacy of fellow members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FBL vs Networking */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">FBL vs. Networking Groups</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#22C55E]">Typical Networking</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1">×</span>
                  <span>Open enrollment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">×</span>
                  <span>Surface-level connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">×</span>
                  <span>Transactional relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">×</span>
                  <span>No accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">×</span>
                  <span>Passive participation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#22C55E]">FBL</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <span>Curated membership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <span>Real relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <span>Ongoing collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <span>High accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <span>Active contribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-12 text-center">Membership Investment</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#0F111E] text-white p-8 rounded-lg mb-8">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wide text-white/60 mb-2">One-Time Assessment</p>
                <p className="text-4xl font-bold mb-4">$195</p>
                <p className="text-white/80">Application review, covenant signing, and assessment process</p>
              </div>
            </div>
            <div className="bg-[#0F111E] text-white p-8 rounded-lg">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wide text-white/60 mb-2">Monthly Membership</p>
                <p className="text-4xl font-bold mb-4">$95</p>
                <p className="text-white/80">Access to Circle community, chapter membership, and national network</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-[#0F111E]/70 text-sm">
                Payment is required but not sufficient. Membership is contingent on alignment, not just investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Who Should Apply</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              FBL is built for business owners, operators, and executives who are actively building something, want to lead with conviction, and are committed to growth through accountability and truth.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              If that's you, we'd like to meet you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-[#0F111E]/70 mb-10 max-w-2xl mx-auto">
            Complete the application, sign the leadership covenant, and begin the assessment process.
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
