export const metadata = {
  title: "Terms of Service | Fellowship of Business Leaders",
  description: "FBL Terms of Service - membership terms and conditions.",
};

export default function TermsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F111E] mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            <strong>Last Updated:</strong> April 21, 2026
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            By applying for membership or accessing Fellowship of Business Leaders ("FBL") services, you agree to be bound by these Terms of Service and our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Membership</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-4">
            <strong>Application and Assessment:</strong> FBL membership requires completion of an application, signing of the Leadership Covenant, and approval through our assessment process. Application does not guarantee acceptance.
          </p>
          <p className="text-[#0F111E]/70 leading-relaxed mb-4">
            <strong>Membership Fees:</strong> Membership includes a one-time assessment fee ($195) and monthly membership dues ($95). Fees are non-refundable except in cases where FBL denies membership after payment.
          </p>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            <strong>Member Obligations:</strong> Members are expected to participate actively, maintain confidentiality, contribute to the community, and uphold the Leadership Covenant.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Code of Conduct</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-4">
            Members agree to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-[#0F111E]/70 mb-6">
            <li>Engage respectfully and professionally with other members</li>
            <li>Maintain confidentiality of information shared within FBL</li>
            <li>Contribute constructively to discussions and gatherings</li>
            <li>Uphold the values and mission of FBL</li>
            <li>Refrain from solicitation or self-promotion without proper context</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Termination</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            FBL reserves the right to suspend or terminate membership for violation of these Terms, the Leadership Covenant, or conduct detrimental to the community. Members may cancel their membership at any time, with no refund for the current billing period.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Confidentiality</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            Members agree to maintain strict confidentiality regarding information shared within FBL, including but not limited to: business strategies, personal challenges, financial information, and private discussions. What's shared in FBL stays in FBL.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Intellectual Property</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            All content provided by FBL, including materials, resources, and platform content, is the property of FBL and protected by copyright. Members may not reproduce, distribute, or create derivative works without permission.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            FBL provides a community platform and membership experience but does not provide professional, legal, financial, or therapeutic advice. Members are responsible for their own business and personal decisions.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Changes to Terms</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            FBL reserves the right to modify these Terms at any time. Members will be notified of significant changes. Continued membership constitutes acceptance of modified Terms.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Governing Law</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            These Terms are governed by the laws of the United States. Any disputes will be resolved through binding arbitration.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Contact Us</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            If you have questions about these Terms of Service, please contact us at:<br/>
            <a href="mailto:member@fblconnect.com" className="text-[#22C55E] hover:underline">member@fblconnect.com</a>
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">About FBL</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            Fellowship of Business Leaders is a 501(c)(3) nonprofit organization dedicated to building a high-trust, high-accountability network of business leaders who are committed to growing with conviction and purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
