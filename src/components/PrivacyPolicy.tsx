interface Props {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: Props) {
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
          <h1 className="text-3xl font-bold text-navy-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-8">Last Updated: January 1, 2025</p>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you schedule an appointment, create an account, or contact us for support. This may include your name, email address, phone number, date of birth, health information, and payment details.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our medical services, process transactions, send administrative communications, and comply with legal obligations including HIPAA requirements.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">3. HIPAA Compliance</h2>
              <p>Focal Point Vitality is committed to protecting the privacy of your Protected Health Information (PHI) as required by the Health Insurance Portability and Accountability Act (HIPAA). We implement appropriate safeguards to protect your health information.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">4. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except as required for treatment, payment, or healthcare operations, or as required by law. We may share information with trusted third parties who assist us in operating our practice.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">5. Data Security</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information. Your information is stored on secure servers and we use encryption to protect sensitive data transmitted online.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">6. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at: sales@focalpointvitality.com or call +1 480-563-9966.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
