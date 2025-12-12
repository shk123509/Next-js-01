"use client";

import React, { FC } from 'react';
// Assuming Heroicons are installed: npm install @heroicons/react
import { ChartBarIcon, MagnifyingGlassIcon, RocketLaunchIcon, ArrowRightIcon, ChevronRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

// Data for the 3-Step Ranking Process
const rankingSteps = [
    {
        icon: MagnifyingGlassIcon,
        title: "Step 1: Deep-Dive Audit & Strategy",
        description: "We analyze your site's technical health, competitive landscape, and identify high-value, low-difficulty keywords for rapid wins.",
        color: "text-indigo-500",
    },
    {
        icon: ChartBarIcon,
        title: "Step 2: Content Optimization & Backlinking",
        description: "Executing on-page SEO, fixing core web vitals, and building authoritative links from industry leaders to boost Domain Authority.",
        color: "text-green-500",
    },
    {
        icon: RocketLaunchIcon,
        title: "Step 3: Track, Refine, and Scale",
        description: "Continuous monitoring of keyword performance, generating detailed monthly reports, and adapting the strategy for sustained growth.",
        color: "text-red-500",
    },
];

const StartRankingCTA: FC = () => {

    const handleStart = () => {
        alert("Redirecting to Consultation Booking for Ranking Strategy!");
        // In a real application: router.push('/booking');
    };

    return (
        <section className="py-24 md:py-36 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Authority and Key Promise */}
                <header className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        The Only Path to Top 3
                    </p>
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-2">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600">Start Ranking Now</span>?
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                        Stop guessing. Our proprietary 3-step process delivers measurable, predictable growth, getting you traffic that converts.
                    </p>
                </header>

                {/* 3-Step Process Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {rankingSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div 
                                key={index} 
                                className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl border-t-4 border-indigo-500/0 hover:border-indigo-500 transition duration-300 group"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Icon and Title */}
                                <div className="text-center mt-4">
                                    <Icon className={`h-10 w-10 mx-auto ${step.color}`} />
                                    <h3 className="text-2xl font-bold mt-4 mb-3 text-gray-900 dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {step.description}
                                    </p>
                                </div>
                                
                                {/* Subtle Arrow for Flow */}
                                {index < rankingSteps.length - 1 && (
                                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 text-gray-300 dark:text-gray-700">
                                        <ChevronRightIcon className="w-10 h-10" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA and Metrics Card */}
                <div className="mt-20 p-10 bg-indigo-600 dark:bg-indigo-800 rounded-3xl text-white shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        
                        {/* Left: Main CTA */}
                        <div className="lg:col-span-2">
                            <h3 className="text-3xl font-extrabold">
                                Get a Free, Custom Ranking Strategy Today.
                            </h3>
                            <p className="mt-2 text-indigo-200 text-lg">
                                We'll show you exactly how your competitors rank—and how we'll beat them.
                            </p>
                        </div>
                        
                        {/* Right: CTA Button */}
                        <div className="lg:col-span-1 text-center lg:text-right">
                            <button
                                onClick={handleStart}
                                className="w-full lg:w-auto inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full shadow-xl text-indigo-700 bg-yellow-300 hover:bg-yellow-400 transition duration-300 transform hover:scale-[1.03]"
                            >
                                Book Your Strategy Session
                                <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </button>
                        </div>
                    </div>

                    {/* Footer: Trust Signals/Metrics */}
                    <div className="mt-10 pt-6 border-t border-indigo-500/50 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-medium">
                        <div className="flex items-center">
                            <StarIcon className="h-5 w-5 text-yellow-300 mr-2" />
                            4.9/5.0 Rated Agency
                        </div>
                        <div className="flex items-center">
                            <ChartBarIcon className="h-5 w-5 text-teal-300 mr-2" />
                            90% Clients hit Top 5 in 6 months
                        </div>
                        <div className="flex items-center">
                            <ShieldCheckIcon className="h-5 w-5 text-green-300 mr-2" />
                            No Long-Term Contracts Required
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default StartRankingCTA;