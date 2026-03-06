import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsProps {
  onBack: () => void;
}

export function Terms({ onBack }: TermsProps) {
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

        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Vitality at Focal Point Rejuvenation Center, you accept and agree to be bound by
              the terms and provision of this agreement. These terms apply to all visitors, users, and others
              who access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Medical Services</h2>
            <p className="mb-4">
              Vitality at Focal Point Rejuvenation Center provides precision medical wellness services including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hormone optimization and management</li>
              <li>Advanced cellular (peptide) therapy protocols</li>
              <li>Medical weight management</li>
              <li>Nutrition counseling and planning</li>
              <li>Wellness consultations and follow-up care</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Patient Responsibilities</h2>
            <p className="mb-4">As a patient, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete medical history information</li>
              <li>Follow prescribed treatment plans and protocols</li>
              <li>Attend scheduled appointments or provide adequate notice for cancellations</li>
              <li>Pay for services according to our payment policies</li>
              <li>Communicate any concerns or changes in your health status</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Appointment Policy</h2>
            <p className="mb-4">
              We require 24-hour notice for appointment cancellations. Late cancellations or no-shows may
              result in a cancellation fee. We reserve the right to reschedule appointments when necessary
              due to provider availability or unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
            <p className="mb-4">
              Payment is due at the time of service unless other arrangements have been made. We accept
              cash, credit cards, and HSA/FSA cards. Insurance coverage varies by plan and service type.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p>
              While we strive to provide the highest quality care, medical treatments carry inherent risks.
              We will discuss potential risks and benefits of all treatments. Our liability is limited to
              the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Emergency Care</h2>
            <p className="mb-4 text-red-400 font-semibold">
              For medical emergencies, call 911 immediately.
            </p>
            <p>
              Our practice provides wellness and optimization services, not emergency medical care.
              If you experience a medical emergency, seek immediate care at the nearest emergency room.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="bg-navy-800 border border-brand-500/30 rounded-lg p-6">
              <p><strong>Vitality at Focal Point Rejuvenation Center</strong></p>
              <p>15454 N Frank Lloyd Wright Blvd A2 Suite 23</p>
              <p>Scottsdale, AZ 85260</p>
              <p>Phone: <a href="tel:+14805639966" className="text-brand-400 hover:text-brand-300">+1 480-563-9966</a></p>
              <p>Email: <a href="mailto:sales@focalpointvitality.com" className="text-brand-400 hover:text-brand-300">sales@focalpointvitality.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
