export const metadata = {
  title: "Apply | Fellowship of Business Leaders",
  description: "Apply for FBL membership - complete the application, sign the covenant, and begin the assessment process.",
};

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0F111E] text-center mb-8">
            Apply for Membership
          </h1>
          <p className="text-xl md:text-2xl text-[#0F111E]/70 text-center max-w-3xl mx-auto leading-relaxed">
            FBL is selective by design. Complete the application, sign the leadership covenant, and begin the assessment process.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#22C55E]">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Application</h3>
              <p className="text-white/80 leading-relaxed">
                Complete the application form with your background, business, and leadership experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#22C55E]">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Covenant</h3>
              <p className="text-white/80 leading-relaxed">
                Read and sign the FBL Leadership Covenant—a commitment to how we lead and relate.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#22C55E]">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Assessment</h3>
              <p className="text-white/80 leading-relaxed">
                Our team reviews your application for alignment with FBL's mission and values.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-white/70 max-w-2xl mx-auto">
              Review typically takes 3-5 business days. You'll receive an email with next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Before You Apply */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-8">Before You Apply</h2>
          <div className="space-y-6 text-lg leading-relaxed text-[#0F111E]/70">
            <p className="font-semibold text-[#0F111E]">
              FBL is built for leaders who:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Are actively building a business (not just thinking about it)</span>
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
              <li className="flex items-start gap-3">
                <span className="text-[#22C55E] mt-1">•</span>
                <span>Are committed to integrating faith, business, and leadership</span>
              </li>
            </ul>
            <p className="pt-4">
              If this resonates with you, we'd like to meet you.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Reminder */}
      <section className="py-20 bg-[#0F111E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Membership Investment</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/5 p-8 rounded-lg">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wide text-white/60 mb-2">One-Time Assessment</p>
                <p className="text-4xl font-bold mb-2">$195</p>
                <p className="text-white/80 text-sm">Application + assessment process</p>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wide text-white/60 mb-2">Monthly Membership</p>
                <p className="text-4xl font-bold mb-2">$95</p>
                <p className="text-white/80 text-sm">Circle community + chapter access</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
              Payment is required after acceptance, but membership is contingent on alignment—not just investment.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F111E] mb-12 text-center">Ready to Start?</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-[#0F111E] text-white p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Application Opens Soon</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                FBL is currently refining our membership application and assessment process. Applications will open in the coming weeks.
              </p>
              <p className="text-white/70 text-sm">
                Want to be notified when applications open?<br/>
                Email: <a href="mailto:member@fblconnect.com" className="text-[#22C55E] hover:underline">member@fblconnect.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
