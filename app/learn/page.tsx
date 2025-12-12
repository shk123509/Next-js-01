"use client";

import React, { FC } from 'react';
// Assuming you have Heroicons installed: npm install @heroicons/react
import { BookOpenIcon, ClockIcon, DevicePhoneMobileIcon, CheckCircleIcon, TrophyIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface LearningCTABenefits {
  id: number;
  icon: React.ElementType;
  text: string;
}

// Data for the 'Key Benefits' list
const benefits: LearningCTABenefits[] = [
  { id: 1, icon: BookOpenIcon, text: "Expert-Led Video Tutorials" },
  { id: 2, icon: ClockIcon, text: "Self-Paced Learning & Lifetime Access" },
  { id: 3, icon: DevicePhoneMobileIcon, text: "Access on Any Device, Anytime" },
  { id: 4, icon: CheckCircleIcon, text: "Hands-On Projects & Quizzes" },
  { id: 5, icon: TrophyIcon, text: "Certification Upon Completion" },
];

const LearningCTASection: FC = () => {

  const handleSignUp = () => {
    alert("Starting your free trial! Redirecting to sign-up page...");
    // In a real application, you would handle navigation here: router.push('/signup');
  };

  return (
    // Outer container with subtle gradient background for visual appeal
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      
      {/* Animated background element (inspired by the design blob) */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob-slow z-0"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-500/10 rounded-full transform translate-x-1/3 translate-y-1/3 blur-3xl animate-blob-slow animation-delay-2000 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-16 max-w-4xl mx-auto p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-xl">
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Start Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Today</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Unlock your full potential with our cutting-edge, expert-led training. Join thousands of successful learners worldwide.
          </p>
        </header>

        {/* Main Content Grid: Benefits and Media Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Key Benefits and Proof */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border-t-4 border-indigo-500">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Benefits
            </h2>
            
            <ul className="space-y-4">
              {benefits.map((item) => {
                const Icon = item.icon; // Dynamic Icon Component
                return (
                  <li key={item.id} className="flex items-start text-lg text-gray-700 dark:text-gray-300">
                    <Icon className="flex-shrink-0 h-6 w-6 text-indigo-500 mr-3 mt-0.5" />
                    {item.text}
                  </li>
                );
              })}
            </ul>

            {/* Social Proof Section */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Trusted by Proof
              </h3>
              <div className="flex items-center">
                {/* Star Rating Simulation */}
                <div className="text-yellow-400 text-2xl mr-3">★★★★★</div>
                <p className="text-gray-600 dark:text-gray-400 font-semibold">
                  4.9/5.0 based on 500+ successful reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Media Mockup/Demo */}
          <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl shadow-xl flex items-center justify-center">
            {/* Simple Monitor Mockup (Replace this with a real image or video placeholder) */}
            <div className="relative w-full max-w-lg bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
              {/* Screen Area */}
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                {/* Video Placeholder */}
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                  <ArrowRightIcon className="h-10 w-10 text-white ml-2" />
                </div>
              </div>
              {/* Base */}
              <div className="h-4 bg-gray-700 mx-auto w-3/5 rounded-b-md"></div>
              <div className="h-3 bg-gray-600 mx-auto w-1/4 rounded-t-md"></div>
              
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                Hi-Resolution Demo Mockup
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Button Section */}
        <div className="mt-16 text-center">
            <button
              onClick={handleSignUp}
              className="inline-flex items-center justify-center px-12 py-4 text-xl font-extrabold rounded-full shadow-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-[1.05]"
            >
              Start Your Free Trial &rarr;
            </button>
        </div>
      </div>
      
      {/* --- Global CSS Keyframes (for the blob animation) --- */}
      <style jsx global>{`
        /* Hero Animated Blob */
        @keyframes blob-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-55%, -45%) scale(1.1); }
        }
        
        .animate-blob-slow {
          animation: blob-slow 18s infinite alternate ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s; /* Staggers the second blob */
        }
      `}</style>
    </div>
  );
}

export default LearningCTASection;