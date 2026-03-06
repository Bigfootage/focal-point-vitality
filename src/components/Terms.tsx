interface Props {
  onBack: () => void;
}

export function Terms({ onBack }: Props) {
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
          <h1 className="text-3xl font-bold text-navy-900 mb-2">Terms of Service</h1>
          <p className="text-slate-500 text-sm mb-8">Last Updated: January 1, 2025</p>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the services provided by Focal Point Vitality, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">2. Medical Services Disclaimer</h2>
              <p>The information and services provided by Focal Point Vitality are intended for informational and treatment purposes only. Our services are not a substitute for professional medical advice, diagnosis, or treatment from a qualified healthcare provider.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">3. Patient Responsibilities</h2>
              <p>Patients are responsible for providing accurate and complete health information, attending scheduled appointments, following prescribed treatment plans, and promptly reporting any adverse reactions or concerns to their provider.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">4. Payment Terms</h2>
              <p>Payment is due at the time of service unless other arrangements have been made. We accept major credit cards and other payment methods as indicated at our office. Cancellations must be made at least 24 hours in advance to avoid cancellation fees.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">5. Contact</h2>
              <p>Questions about these Terms of Service should be directed to: sales@focalpointvitality.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
