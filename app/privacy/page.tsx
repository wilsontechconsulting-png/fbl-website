export const metadata = {
  title: "Privacy Policy | Fellowship of Business Leaders",
  description: "FBL Privacy Policy - how we handle member information and data.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0F111E] mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            <strong>Last Updated:</strong> April 21, 2026
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Overview</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            Fellowship of Business Leaders ("FBL," "we," "us," or "our") is committed to protecting the privacy and confidentiality of our members and applicants. This Privacy Policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Information We Collect</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-[#0F111E]/70 mb-6">
            <li>Name, email address, phone number</li>
            <li>Business information (company name, role, industry)</li>
            <li>Professional background and experience</li>
            <li>Application and covenant information</li>
            <li>Payment information (processed securely through third-party providers)</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-[#0F111E]/70 mb-6">
            <li>Process membership applications and assessments</li>
            <li>Facilitate chapter meetings and member connections</li>
            <li>Communicate about FBL events, updates, and opportunities</li>
            <li>Manage membership accounts and billing</li>
            <li>Improve our services and member experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Information Sharing</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            We do not sell or rent your personal information to third parties. We may share your information only:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-[#0F111E]/70 mb-6">
            <li>With other FBL members as part of the member directory and community platform</li>
            <li>With service providers who assist in operating our platform (under strict confidentiality agreements)</li>
            <li>When required by law or to protect our rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Data Security</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Member Confidentiality</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            FBL members are expected to maintain confidentiality regarding information shared within the community. What's shared in FBL stays in FBL.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Your Rights</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            You have the right to access, update, or request deletion of your personal information. To exercise these rights, contact us at member@fblconnect.com.
          </p>

          <h2 className="text-2xl font-bold text-[#0F111E] mt-8 mb-4">Contact Us</h2>
          <p className="text-[#0F111E]/70 leading-relaxed mb-6">
            If you have questions about this Privacy Policy or our data practices, please contact us at:<br/>
            <a href="mailto:member@fblconnect.com" className="text-[#22C55E] hover:underline">member@fblconnect.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
