"use client";

import React, { FC } from 'react';
// Assuming Heroicons are installed: npm install @heroicons/react
import { CheckCircleIcon, TrophyIcon, ShieldCheckIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { StarIcon, BoltIcon } from '@heroicons/react/24/solid';

// Data for key features to highlight the course value
const courseFeatures: { icon: React.ElementType, text: string }[] = [
    { icon: TrophyIcon, text: "Certificate of Completion" },
    { icon: ClockIcon, text: "Lifetime Access & Future Updates" },
    { icon: CheckCircleIcon, text: "15+ Hands-On Projects" },
    { icon: BoltIcon, text: "Dedicated Expert Support" },
];

const AccessCourseCTA: FC = () => {

    const handleEnroll = () => {
        alert("Redirecting to Secure Checkout for Full Course Access!");
        // In a real application: router.push('/checkout');
    };

    return (
        <section className="py-20 md:py-32 bg-gray-900 dark:bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Grid Layout: Course Value (Left) vs. Pricing/CTA (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    
                    {/* LEFT COLUMN: Course Value and Benefits */}
                    <div className="lg:col-span-2 space-y-10">
                        <header>
                            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                                Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Full Potential</span> Today.
                            </h2>
                            <p className="mt-4 text-xl text-gray-300 max-w-2xl">
                                Access the entire curriculum, premium resources, and a community dedicated to your success. Stop learning in fragments—start mastering the craft.
                            </p>
                        </header>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            {courseFeatures.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-start">
                                        <Icon className="flex-shrink-0 h-6 w-6 text-orange-500 mr-3 mt-1" />
                                        <p className="text-lg font-medium text-gray-200">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* Instructor/Trust Signal */}
                        <div className="p-5 bg-gray-800 rounded-lg shadow-xl border-l-4 border-yellow-500">
                            <div className="flex items-center">
                                {/* Replace with Instructor image/avatar */}
                                <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                                    P.A.
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">
                                        "This course is the definitive guide. I guarantee your results."
                                    </p>
                                    <p className="text-sm text-gray-400">- Prof. Alex, Lead Instructor</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Pricing and CTA Card (The Focus) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-10 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transform transition duration-500 hover:shadow-orange-500/30">
                            
                            {/* Urgency Badge */}
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-red-600 text-white font-bold text-sm rounded-full shadow-lg rotate-1">
                                LIMITED TIME OFFER!
                            </div>

                            {/* Price Display */}
                            <div className="text-center mt-4">
                                <p className="text-gray-500 dark:text-gray-400 line-through text-lg">
                                    Original Price: $499
                                </p>
                                <p className="text-6xl font-extrabold text-gray-900 dark:text-white mt-1">
                                    $299
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    One-time payment. Lifetime access.
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex justify-center items-center mt-6 text-yellow-500">
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5" />
                                <StarIcon className="h-5 w-5 text-gray-400" />
                                <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm font-semibold">4.8 / 5.0 (2,100+ reviews)</span>
                            </div>

                            {/* Primary CTA Button */}
                            <button
                                onClick={handleEnroll}
                                className="w-full mt-8 flex items-center justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-gray-900 bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 transform hover:scale-[1.02]"
                            >
                                Enroll Now and Save $200
                                <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </button>

                            {/* Security Guarantee */}
                            <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center">
                                <ShieldCheckIcon className="h-5 w-5 mr-1.5 text-green-500" />
                                100% Secure Checkout & 30-Day Guarantee
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccessCourseCTA;