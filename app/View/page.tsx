"use client";

import React, { FC } from 'react';
interface MusicEra {
  id: number;
  name: 'Baroque' | 'Classical' | 'Romantic' | '20th Century';
  period: string;
  focus: string;
  keyComposers: string[];
  characteristic: string;
}
// Heroicons imports
import { ClockIcon, SparklesIcon, ChevronRightIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/solid'; 

// --- Music Era Data ---
const musicEras: MusicEra[] = [
    { 
        id: 1, 
        name: 'Baroque', 
        period: 'c. 1600 – 1750', 
        focus: 'Ornate complexity, Counterpoint, Contrast', 
        keyComposers: ['Bach', 'Handel', 'Vivaldi'], 
        characteristic: 'Emphasis on ornamentation, dramatic contrasts, and the development of the concerto and sonata forms. The Harpsichord was central.',
    },
    { 
        id: 2, 
        name: 'Classical', 
        period: 'c. 1730 – 1820', 
        focus: 'Clarity, Balance, Formal structure', 
        keyComposers: ['Mozart', 'Haydn', 'Beethoven (Early)'], 
        characteristic: 'Focus shifted to elegance, simplicity, and balanced structure. The symphony and string quartet were established. The Piano gained popularity.',
    },
    { 
        id: 3, 
        name: 'Romantic', 
        period: 'c. 1800 – 1910', 
        focus: 'Emotion, Nationalism, Program music', 
        keyComposers: ['Chopin', 'Tchaikovsky', 'Wagner'], 
        characteristic: 'Intense expression of emotion, expansion of the orchestra, and a focus on programmatic music (telling a story). Composers sought individualism.',
    },
    { 
        id: 4, 
        name: '20th Century', 
        period: 'c. 1900 – present', 
        focus: 'Experimentation, Dissonance, Rhythm', 
        keyComposers: ['Debussy', 'Stravinsky', 'Schoenberg'], 
        characteristic: 'Rejection of traditional tonality, leading to diverse styles like Impressionism, Atonality, and Minimalism. Emphasis on rhythmic complexity.',
    },
];

const MusicErasTimelinePage: FC = () => {

    const getEraColor = (id: number) => {
        switch (id) {
            case 1: return 'border-yellow-500 text-yellow-400 bg-yellow-900/20'; // Baroque
            case 2: return 'border-teal-500 text-teal-400 bg-teal-900/20';      // Classical
            case 3: return 'border-red-500 text-red-400 bg-red-900/20';        // Romantic
            case 4: return 'border-blue-500 text-blue-400 bg-blue-900/20';      // 20th Century
            default: return 'border-gray-500 text-gray-400 bg-gray-900/20';
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Theme */}
                <header className="text-center mb-16">
                    <GlobeAltIcon className="h-12 w-12 text-blue-400 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500">Classical Music Timeline</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-4xl mx-auto">
                        A chronological guide through the transformative eras that defined classical music history.
                    </p>
                </header>
                

                {/* Timeline Container */}
                <div className="relative border-l-4 border-gray-700 space-y-12 pl-6 md:pl-12">
                    
                    {musicEras.map((era, index) => (
                        <div key={era.id} className="relative group">
                            
                            {/* Timeline Dot/Marker */}
                            <div className={`absolute -left-8 md:-left-14 top-0 h-4 w-4 rounded-full ${getEraColor(era.id).split(' ')[0]} ${getEraColor(era.id).split(' ')[1]} ring-4 ring-gray-950 transition duration-500 transform group-hover:scale-150`}></div>

                            {/* Era Card */}
                            <div className={`p-6 rounded-xl shadow-2xl transition duration-500 ${getEraColor(era.id)} border-l-8 border-r-2 group-hover:shadow-blue-500/30`}>
                                
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-3xl font-extrabold flex items-center">
                                        <ClockIcon className="h-6 w-6 mr-3" />
                                        {era.name} Era
                                    </h3>
                                    <span className="text-sm font-semibold italic opacity-80">{era.period}</span>
                                </div>

                                <hr className={`mb-4 border-t ${getEraColor(era.id).split(' ')[0].replace('border-', 'border-')}/50`} />

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    
                                    {/* Focus */}
                                    <div>
                                        <p className="font-bold text-white mb-1">Primary Focus:</p>
                                        <p className="text-gray-200">{era.focus}</p>
                                    </div>
                                    
                                    {/* Key Composers */}
                                    <div>
                                        <p className="font-bold text-white mb-1">Key Composers:</p>
                                        <p className="text-gray-200">{era.keyComposers.join(', ')}</p>
                                    </div>

                                    {/* Characteristic */}
                                    <div className="md:col-span-1">
                                        <p className="font-bold text-white mb-1">Core Characteristic:</p>
                                        <p className="text-gray-200 italic">{era.characteristic}</p>
                                    </div>
                                </div>
                                
                                {/* CTA to Tracks/Composers */}
                                <div className="mt-6 text-right">
                                    <a 
                                        href={`/classical-mix?era=${era.name}`}
                                        className="inline-flex items-center text-sm font-bold transition text-white hover:text-opacity-80"
                                    >
                                        Explore {era.name} Mix 
                                        <ChevronRightIcon className="h-4 w-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Footer CTA / Find Your Favorite */}
                <div className="text-center mt-20 pt-8 border-t border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to find your favorite Master?
                    </h3>
                    <a 
                        href="/meet-the-masters"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-red-400 hover:bg-red-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Meet the Composers
                        <MusicalNoteIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default MusicErasTimelinePage;