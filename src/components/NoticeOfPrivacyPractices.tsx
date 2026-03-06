interface Props {
  onBack: () => void;
}

export function NoticeOfPrivacyPractices({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-silver-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="mb-8 text-brand-500 hover:text-brand-600 font-semibold flex items-center gap-2 transition-colors"
        >
          ← Back to Home
        </button>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold text-navy-900 mb-2">Notice of Privacy Practices</h1>
          <p className="text-slate-500 text-sm mb-2">Effective Date: January 1, 2025</p>
          <p className="text-brand-600 font-semibold text-sm mb-8">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">Our Responsibilities</h2>
              <p>Focal Point Vitality is required by law to maintain the privacy of your protected health information (PHI), provide you with notice of our legal duties and privacy practices, and notify you following a breach of your unsecured PHI.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">How We May Use and Disclose Your Health Information</h2>
              <p><strong>Treatment:</strong> We may use your PHI to provide you with medical treatment or services and to coordinate care with other healthcare providers involved in your treatment.</p>
              <p className="mt-3"><strong>Payment:</strong> We may use and disclose your PHI to obtain payment for services we provide to you, including submitting claims to insurance companies.</p>
              <p className="mt-3"><strong>Healthcare Operations:</strong> We may use and disclose your PHI for our healthcare operations, including quality assessment, training programs, and business management.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">Your Rights</h2>
              <p>You have the right to: request restrictions on how we use your PHI; receive confidential communications; inspect and copy your PHI; request amendments to your PHI; receive an accounting of disclosures; and receive a paper copy of this notice.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">Complaints</h2>
              <p>If you believe your privacy rights have been violated, you may file a complaint with us or with the Secretary of the U.S. Department of Health and Human Services. Contact us at: sales@focalpointvitality.com or +1 480-563-9966.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
