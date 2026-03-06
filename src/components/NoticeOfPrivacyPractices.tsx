import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NoticeOfPrivacyPracticesProps {
  onBack: () => void;
}

export function NoticeOfPrivacyPractices({ onBack }: NoticeOfPrivacyPracticesProps) {
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

        <h1 className="text-4xl font-bold text-white mb-8">Notice of Privacy Practices</h1>
        <p className="text-slate-400 mb-8">Effective Date: January 1, 2025</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Health Information Rights</h2>
            <p className="mb-4">
              This notice describes how medical information about you may be used and disclosed and how you
              can get access to this information. Please review it carefully.
            </p>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Get a copy of your health and claims records</li>
              <li>Correct your health and claims records</li>
              <li>Request confidential communication</li>
              <li>Ask us to limit the information we share</li>
              <li>Get a list of those with whom we've shared your information</li>
              <li>Get a copy of this privacy notice</li>
              <li>Choose someone to act for you</li>
              <li>File a complaint if you believe your privacy rights have been violated</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use and Share Your Health Information</h2>
            <p className="mb-4">We may use and share your health information for:</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-brand-400 mb-2">Treatment</h3>
                <p>We can use your health information and share it with professionals who are treating you.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-400 mb-2">Payment</h3>
                <p>We can use and disclose your health information for payment purposes, including billing and collection activities.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-400 mb-2">Health Care Operations</h3>
                <p>We can use and disclose your health information for our health care operations, including quality improvement and staff training.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Other Uses and Disclosures</h2>
            <p className="mb-4">We may also use or share your health information in other situations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>When required by law</li>
              <li>For public health activities</li>
              <li>To report suspected abuse, neglect, or domestic violence</li>
              <li>For health oversight activities</li>
              <li>For judicial and administrative proceedings</li>
              <li>For law enforcement purposes</li>
              <li>To prevent serious threat to health or safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Choices</h2>
            <p className="mb-4">For certain health information, you can tell us your choices about what we share:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Share information with your family, close friends, or others involved in payment for your care</li>
              <li>Share information in a disaster relief situation</li>
            </ul>
            <p className="mt-4">
              If you are not able to tell us your preference, we may go ahead and share your information
              if we believe it is in your best interest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We are required by law to maintain the privacy and security of your protected health information</li>
              <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information</li>
              <li>We must follow the duties and privacy practices described in this notice and give you a copy of it</li>
              <li>We will not use or share your information other than as described here unless you tell us we can in writing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Notice</h2>
            <p>
              We can change the terms of this notice, and the changes will apply to all information we have
              about you. The new notice will be available upon request and on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have questions about this notice or need help with exercising your rights, please contact us:
            </p>
            <div className="bg-navy-800 border border-brand-500/30 rounded-lg p-6">
              <p><strong>Privacy Officer</strong></p>
              <p><strong>Vitality at Focal Point Rejuvenation Center</strong></p>
              <p>15454 N Frank Lloyd Wright Blvd A2 Suite 23</p>
              <p>Scottsdale, AZ 85260</p>
              <p>Phone: <a href="tel:+14805639966" className="text-brand-400 hover:text-brand-300">+1 480-563-9966</a></p>
              <p>Email: <a href="mailto:sales@focalpointvitality.com" className="text-brand-400 hover:text-brand-300">sales@focalpointvitality.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">File a Complaint</h2>
            <p className="mb-4">
              You can file a complaint if you feel we have violated your rights by contacting us using the
              information above. You can also file a complaint with the U.S. Department of Health and Human Services
              Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201,
              calling 1-877-696-6775, or visiting www.hhs.gov/ocr/privacy/hipaa/complaints/.
            </p>
            <p className="text-brand-400 font-semibold">
              We will not retaliate against you for filing a complaint.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
