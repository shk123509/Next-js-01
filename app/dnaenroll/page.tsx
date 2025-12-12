"use client";

import React, { FC } from 'react';
// Assuming Heroicons are installed: npm install @heroicons/react
import { UsersIcon, LightBulbIcon, SparklesIcon, PuzzlePieceIcon, ArrowRightIcon, AcademicCapIcon, RocketLaunchIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { FingerPrintIcon } from '@heroicons/react/24/solid';

// Data for the 4 Key Pillars of Brand Discovery (Same as before)
const dnaPillars = [
    {
        icon: UsersIcon,
        title: "Target Audience Empathy",
        description: "Delving deep into user motivations, needs, and pain points to ensure resonance.",
        color: "text-red-500",
    },
    {
        icon: PuzzlePieceIcon,
        title: "Competitive Mapping",
        description: "Identifying market gaps and defining your unique positioning away from the noise.",
        color: "text-teal-500",
    },
    {
        icon: LightBulbIcon,
        title: "Core Values Definition",
        description: "Establishing the non-negotiable beliefs and mission that drive every aspect of your business.",
        color: "text-yellow-500",
    },
    {
        icon: SparklesIcon,
        title: "Personality & Tone",
        description: "Crafting a distinctive voice, style, and visual identity that captivates and connects.",
        color: "text-purple-500",
    },
];

// NEW DATA: Tangible Results the Client will achieve
const resultPromises = [
    { icon: RocketLaunchIcon, text: "Accelerated Market Penetration" },
    { icon: CurrencyDollarIcon, text: "Higher Customer Lifetime Value (LTV)" },
    { icon: AcademicCapIcon, text: "Clearer Internal Team Alignment" },
    { icon: FingerPrintIcon, text: "Unmistakable Brand Recognition" },
];

const BrandDNADiscovery: FC = () => {

    const handleStartDiscovery = () => {
        alert("Starting Brand Discovery Journey! Redirecting to Questionnaire.");
        // In a real application: router.push('/discovery-intake');
    };

    return (
        <section className="py-24 md:py-36 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Core Promise */}
                <header className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        Brand Identity Strategy
                    </p>
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-2">
                        Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600">Brand DNA</span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                        Stop blending in. We use a structured discovery process to uncover the authentic core of your brand, turning identity into loyalty.
                    </p>
                </header>

                {/* NEW SECTION: Deep Dive Value Proposition / Pain Points */}
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl">
                    <div>
                        <h3 className="text-3xl font-bold text-red-600 dark:text-red-400">
                            Tired of Losing Customers to Confusion?
                        </h3>
                        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                            The market is saturated. Without a defined DNA, you become another forgettable product. Our discovery process cuts through the noise, giving you a clear, powerful narrative.
                        </p>
                        <ul className="mt-6 space-y-3">
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                                <span className="text-2xl mr-2 text-red-500 font-bold flex-shrink-0">&times;</span>
                                Inconsistent Messaging
                            </li>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                                <span className="text-2xl mr-2 text-red-500 font-bold flex-shrink-0">&times;</span>
                                Low Employee Alignment
                            </li>
                            <li className="flex items-start text-gray-700 dark:text-gray-300">
                                <span className="text-2xl mr-2 text-red-500 font-bold flex-shrink-0">&times;</span>
                                Generic Visual Identity
                            </li>
                        </ul>
                    </div>

                    {/* Result Promises List */}
                    <div className="p-6 bg-indigo-50 dark:bg-gray-800 rounded-xl border-l-4 border-teal-500">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            What You Will Walk Away With:
                        </h4>
                        <ul className="space-y-4">
                            {resultPromises.map((promise, index) => {
                                const Icon = promise.icon;
                                return (
                                    <li key={index} className="flex items-center text-gray-800 dark:text-gray-200 font-medium">
                                        <Icon className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                                        {promise.text}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Central DNA Diagram/Pillars (As defined previously) */}
                {/* Note: In a real implementation, you would need CSS/SCSS for the precise circular positioning below */}
                <div className="relative flex justify-center items-center h-full md:h-[500px] mb-16">

                    {/* Central Hub (Brand DNA) */}
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-indigo-600 dark:bg-indigo-700 rounded-full flex items-center justify-center shadow-2xl z-10 p-6">
                        <FingerPrintIcon className="h-16 w-16 text-white" />
                        <span className="absolute bottom-6 text-lg font-bold text-white text-center">
                            The Authentic Core
                        </span>
                    </div>

                    {/* Spoke/Pillar Items (Simplified responsive layout for Tailwind) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 md:mt-0 md:absolute w-full h-full">
                        {dnaPillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            // For simplicity in Tailwind, we stack these and rely on the grid gap on mobile/tablet.
                            // The 'absolute' positioning is primarily for the conceptual diagram on desktop.
                            return (
                                <div 
                                    key={index} 
                                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-t-4 border-indigo-500/0 hover:border-indigo-500 transition duration-300 z-0 text-center"
                                >
                                    <Icon className={`h-8 w-8 ${pillar.color} mx-auto mb-3`} />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {pillar.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>


                {/* Final CTA Strip */}
                <div className="mt-12 p-8 bg-indigo-100 dark:bg-gray-800 rounded-2xl shadow-xl border-t-4 border-teal-500">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div>
                            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                                Ready to Find Your Uniqueness?
                            </h3>
                            <p className="mt-1 text-lg text-gray-600 dark:text-gray-300">
                                Let's start the discovery phase and build a brand that lasts.
                            </p>
                        </div>
                        <button
                            onClick={handleStartDiscovery}
                            className="mt-6 md:mt-0 inline-flex items-center justify-center px-10 py-3 text-lg font-bold rounded-full shadow-lg text-white bg-teal-600 hover:bg-teal-700 transition duration-300 transform hover:scale-[1.03]"
                        >
                            Start Discovery Workshop
                            <ArrowRightIcon className="h-5 w-5 ml-2" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default BrandDNADiscovery;