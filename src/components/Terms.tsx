import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsProps {
  onBack: () => void;
}

export function Terms({ onBack }: TermsProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gold-500 hover:text-gold-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Vital Flame Wellness, you accept and agree to be bound by 
              the terms and provision of this agreement. These terms apply to all visitors, users, and others 
              who access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Medical Services</h2>
            <p className="mb-4">
              Vital Flame Wellness provides integrative medical services including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hormone optimization and management</li>
              <li>Peptide therapy protocols</li>
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
            <div className="bg-slate-900 border border-gold-600 rounded-lg p-6">
              <p><strong>Vital Flame Wellness</strong></p>
              <p>8770 E Arapahoe Road #202</p>
              <p>Centennial, CO 80112</p>
              <p>Phone: <a href="tel:720-915-5508" className="text-gold-500 hover:text-gold-400">720-915-5508</a></p>
              <p>Email: <a href="mailto:info@vitalflamewellness.com" className="text-gold-500 hover:text-gold-400">info@vitalflamewellness.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}