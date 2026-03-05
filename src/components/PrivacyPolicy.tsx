import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-brand-400 hover:text-brand-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="mb-4">
              At Vitality at Focal Point Rejuvenation Center, we collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule an appointment or consultation</li>
              <li>Fill out patient forms or health questionnaires</li>
              <li>Communicate with us via phone, email, or our patient portal</li>
              <li>Use our website or online services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide medical care and treatment services</li>
              <li>Schedule and manage appointments</li>
              <li>Communicate about your health and treatment plans</li>
              <li>Process payments and insurance claims</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and patient experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
            <p className="mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With healthcare providers involved in your care</li>
              <li>For payment and healthcare operations</li>
              <li>When required by law or legal process</li>
              <li>To prevent serious harm to health or safety</li>
              <li>With your written authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. Our systems are HIPAA compliant
              and we regularly review our security practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and review your medical records</li>
              <li>Request corrections to your information</li>
              <li>Request restrictions on use or disclosure</li>
              <li>Request confidential communications</li>
              <li>File a complaint about our privacy practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-navy-800 border border-brand-500/30 rounded-lg p-6">
              <p><strong>Vitality at Focal Point Rejuvenation Center</strong></p>
              <p>15454 N Frank Lloyd Wright Blvd A2 Suite 23</p>
              <p>Scottsdale, AZ 85260</p>
              <p>Phone: <a href="tel:+14805639966" className="text-brand-400 hover:text-brand-300">+1 480-563-9966</a></p>
              <p>Email: <a href="mailto:info@vitalityatfocalpoint.com" className="text-brand-400 hover:text-brand-300">info@vitalityatfocalpoint.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
