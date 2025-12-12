"use client";

import React, { FC, useState } from 'react';
// Note: You must have 'npm install @heroicons/react' installed for these icons to work.
import { CheckCircleIcon, ShieldCheckIcon, LockClosedIcon, CreditCardIcon } from '@heroicons/react/24/solid'; 

interface EnrollmentSectionProps {
  productName: string;
  price: number;
}

const EnrollmentSection: FC<EnrollmentSectionProps> = ({ productName, price }) => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) {
      alert(`Initiating secure checkout for ${productName} at $${price}. Email: ${email}`);
      // --- INTEGRATION POINT ---
      // Here, you would integrate with your payment processor (e.g., Stripe, PayPal, Razorpay)
      // to handle the actual transaction.
      // ---
    } else {
      alert("Please agree to the terms and conditions to proceed.");
    }
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Enrollment Card Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-10 border-t-8 border-indigo-600">
          
          {/* Header and Value Proposition */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Secure Enrollment for {productName}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
              Reserve your spot and get instant, lifetime access.
            </p>
          </div>

          {/* Pricing Box - The Focal Point */}
          <div className="bg-indigo-50 dark:bg-indigo-900/50 p-6 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-8">
            <p className="text-center text-5xl font-extrabold text-indigo-700 dark:text-indigo-300">
              {formattedPrice}
            </p>
            <p className="text-center text-sm text-indigo-500 dark:text-indigo-400 mt-1 font-medium">
              One-time Payment (No hidden fees)
            </p>
          </div>
          
          {/* Enrollment Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Input Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address (For Instant Access)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                />
              </div>
            </div>
            
            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">
                  I agree to the <a href="/terms" className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Terms and Conditions</a>.
                </label>
              </div>
            </div>

            {/* CTA Button (High-Conversion Focus) */}
            <button
              type="submit"
              disabled={!agreed || !email}
              className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-200 transform hover:scale-[1.01]"
            >
              <LockClosedIcon className="h-5 w-5 mr-3" />
              Enroll Securely for {formattedPrice}
            </button>
          </form>

          {/* Trust and Security Signals */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              
              <div className="flex items-center">
                <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-1.5" />
                SSL Encrypted Secure Payment
              </div>
              
              <div className="flex items-center">
                <CreditCardIcon className="h-5 w-5 text-yellow-500 mr-1.5" />
                All Major Cards Accepted
              </div>
              
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-indigo-500 mr-1.5" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Example Usage in your page file (e.g., app/checkout/page.tsx)
const EnrollmentPageSection = () => (
  <EnrollmentSection productName="Master Class Course" price={499} />
);

export default EnrollmentPageSection;