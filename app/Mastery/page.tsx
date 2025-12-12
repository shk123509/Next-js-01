"use client";

import React, { FC } from 'react';
// Assuming Heroicons are installed: npm install @heroicons/react
import { CheckCircleIcon, TrophyIcon, ArrowRightIcon, ShieldCheckIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { SparklesIcon, FireIcon } from '@heroicons/react/24/solid';

// Data for core course benefits
const coreBenefits = [
    "15+ Hours of HD Video Content",
    "Lifetime Access & Free Updates",
    "Certification upon Completion",
    "Access to Private Alumni Community",
];

// Data for the premium tier exclusive benefits
const premiumBenefits = [
    "One-on-One Live Mentorship Session (45 min)",
    "Personalized Brand Strategy Review (Value $500)",
    "Exclusive Templates & Cheatsheets Bundle",
];

const BrandingMasteryEnroll: FC = () => {
    
    // Function to handle enrollment (simulated)
    const handleEnroll = (tier: 'standard' | 'premium') => {
        alert(`Initiating secure checkout for ${tier.toUpperCase()} Tier.`);
        // In a real application, redirect to the specific checkout URL
        // router.push(`/checkout?tier=${tier}`);
    };

    return (
        <section className="py-24 md:py-36 bg-gray-900 dark:bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Urgency and Final Push */}
                <header className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-1 mb-4 text-sm font-semibold text-red-100 bg-red-600 rounded-full">
                        <FireIcon className="h-5 w-5 mr-2" />
                        Enrollment Closes in 48 Hours!
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-2">
                        Your Future Brand Starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Right Now.</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-4xl mx-auto">
                        This is the definitive course for building an unmistakable brand identity that drives loyalty and explosive growth.
                    </p>
                </header>

                {/* Dual-Tier Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* 1. Standard Tier Card */}
                    <div className="p-10 bg-gray-800 rounded-3xl shadow-2xl border-t-4 border-indigo-500/0 hover:border-indigo-500 transition duration-500 flex flex-col">
                        <h3 className="text-3xl font-bold text-white">Standard Mastery</h3>
                        <p className="mt-2 text-gray-400">All core modules and resources included.</p>

                        <div className="my-6">
                            <span className="text-5xl font-extrabold text-white">$499</span>
                            <span className="text-xl text-gray-400"> One-Time</span>
                        </div>

                        <ul className="space-y-3 flex-grow">
                            {coreBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-center text-gray-300">
                                    <CheckCircleIcon className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <button
                                onClick={() => handleEnroll('standard')}
                                className="w-full flex items-center justify-center py-4 px-8 text-lg font-bold rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01]"
                            >
                                Enroll Standard Tier <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </button>
                            <p className="mt-3 text-sm text-center text-gray-500">30-Day Money-Back Guarantee</p>
                        </div>
                    </div>

                    {/* 2. Premium Tier Card (Highlighted) */}
                    <div className="relative p-10 bg-white dark:bg-gray-700 rounded-3xl shadow-[0_0_60px_-15px_rgba(251,191,36,0.6)] border-4 border-yellow-400 flex flex-col">
                        
                        {/* Best Value Tag */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-xl text-sm">
                            <SparklesIcon className="h-4 w-4 inline mr-1" /> BEST VALUE
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">Premium Accelerator</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Everything in Standard, plus personalized mentorship.</p>

                        <div className="my-6">
                            <span className="text-5xl font-extrabold text-gray-900 dark:text-white">$799</span>
                            <span className="text-xl text-gray-600 dark:text-gray-400"> One-Time</span>
                        </div>

                        {/* Combined Benefits List */}
                        <ul className="space-y-3 flex-grow">
                            {/* Standard Benefits */}
                            {coreBenefits.map((benefit, index) => (
                                <li key={`std-${index}`} className="flex items-center text-gray-700 dark:text-gray-300">
                                    <CheckCircleIcon className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                                    {benefit}
                                </li>
                            ))}
                            <hr className="my-2 border-gray-300 dark:border-gray-600" />
                            {/* PREMIUM EXCLUSIVES */}
                            {premiumBenefits.map((benefit, index) => (
                                <li key={`prem-${index}`} className="flex items-center text-gray-900 dark:text-white font-semibold">
                                    <TrophyIcon className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <button
                                onClick={() => handleEnroll('premium')}
                                className="w-full flex items-center justify-center py-4 px-8 text-lg font-bold rounded-xl shadow-lg text-white bg-orange-600 hover:bg-orange-700 transition duration-300 transform hover:scale-[1.01]"
                            >
                                Secure Premium Access <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </button>
                            <p className="mt-3 text-sm text-center text-gray-500 dark:text-gray-400">Only 5 Spots Left This Month</p>
                        </div>
                    </div>
                </div>

                {/* Final Trust and Value Section */}
                <div className="mt-20 pt-10 border-t border-gray-700">
                    <h3 className="text-3xl font-bold text-center mb-8">Why Choose Mastery?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-gray-800 rounded-xl shadow-xl">
                            <CalendarDaysIcon className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                            <p className="text-xl font-bold">12x Faster Results</p>
                            <p className="text-gray-400 text-sm mt-1">Our proven framework cuts years off your learning curve.</p>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-xl shadow-xl">
                            <ShieldCheckIcon className="h-10 w-10 text-teal-400 mx-auto mb-3" />
                            <p className="text-xl font-bold">Risk-Free Guarantee</p>
                            <p className="text-gray-400 text-sm mt-1">If you don't love it, we refund 100% within 30 days.</p>
                        </div>
                        <div className="p-6 bg-gray-800 rounded-xl shadow-xl">
                            <TrophyIcon className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                            <p className="text-xl font-bold">Industry Recognized</p>
                            <p className="text-gray-400 text-sm mt-1">Certificate endorsed by top branding executives.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default BrandingMasteryEnroll;