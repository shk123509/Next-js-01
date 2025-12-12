"use client";

import React, { FC } from 'react';
// Heroicons imports
interface Composer {
    id: number;
    name: string;
    specialty: string;
    style: string;
    featuredWork: string;
    description: string;
    keyStat: string; // e.g., Total Track Submissions, Albums Released
    profileImageUrl: string; // Placeholder for image path
}
import { SparklesIcon, MusicalNoteIcon, TrophyIcon, ArrowRightIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { MicrophoneIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid'; 

// --- Mock Composer Data ---
const composers: Composer[] = [
    { 
        id: 1, 
        name: "Dr. Elias Thorne", 
        specialty: 'Contemporary Classical', 
        style: 'Minimalist Orchestration',
        featuredWork: 'The Clockwork Sonata',
        description: 'A classically trained composer focusing on evocative, repetitive motifs perfect for high-focus tasks and dramatic scoring.',
        keyStat: '4 Full-Length Albums',
        profileImageUrl: 'placeholder-thorne.jpg'
    },
    { 
        id: 2, 
        name: "Mira Sol", 
        specialty: 'Ambient Sound Design', 
        style: 'Textural Drone & Field Recordings',
        featuredWork: 'Echoes of the Deep Forest',
        description: 'Her work blends synthesizers with natural field recordings to create immersive, calming, and deeply atmospheric spaces.',
        keyStat: '15 Featured Compilations',
        profileImageUrl: 'placeholder-mira.jpg'
    },
    { 
        id: 3, 
        name: "Jayden 'J-Beat' Kim", 
        specialty: 'Instrumental Hip Hop', 
        style: 'Boom Bap & Jazz-Hop', 
        featuredWork: 'Urban Sunset Lofi EP',
        description: 'A master of dusty drums and smooth jazz samples, specializing in tracks with a nostalgic, late-night vibe for studying.',
        keyStat: '50+ Tracks Submitted',
        profileImageUrl: 'placeholder-jayden.jpg'
    },
    { 
        id: 4, 
        name: "Kira V.", 
        specialty: 'Epic Trailer Music', 
        style: 'Hybrid Orchestral', 
        featuredWork: 'Ascension (Official Trailer Score)',
        description: 'Known for powerful, high-impact compositions used in film trailers and video game soundtracks. Ideal for intense motivation.',
        keyStat: 'Top Composer (Action Genre)',
        profileImageUrl: 'placeholder-kira.jpg'
    },
];

const MeetTheComposersPage: FC = () => {

    const getStyleColor = (style: string) => {
        if (style.includes('Orchestral') || style.includes('Classical')) return 'bg-blue-600/30 text-blue-400 border-blue-600';
        if (style.includes('Drone') || style.includes('Ambient')) return 'bg-teal-600/30 text-teal-400 border-teal-600';
        if (style.includes('Hip Hop') || style.includes('Lofi')) return 'bg-red-600/30 text-red-400 border-red-600';
        return 'bg-gray-600/30 text-gray-400 border-gray-600';
    };

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Theme */}
                <header className="text-center mb-16 border-b border-gray-800 pb-8">
                    <AcademicCapIcon className="h-12 w-12 text-teal-500 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Composers</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-3xl mx-auto">
                        Discover the masterminds behind the music—those who write and craft every note.
                    </p>
                </header>
                

                {/* --- Featured Spotlight Section --- */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold mb-8 text-gray-300 flex items-center">
                        <SparklesIcon className="h-6 w-6 mr-3 text-yellow-400" />
                        Composer Spotlight: Dr. Elias Thorne
                    </h3>
                    <div className="bg-gray-900 p-8 rounded-xl border border-yellow-500/50 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                        <div className="flex-shrink-0">
                            {/* Placeholder for large profile image */}
                            <div className="h-40 w-40 bg-gray-700 rounded-full flex items-center justify-center text-4xl font-bold text-yellow-400 border-4 border-yellow-500">
                                ET
                            </div>
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                            <span className="px-4 py-1 text-sm font-bold rounded-full border bg-blue-600/30 text-blue-400 border-blue-600">
                                Contemporary Classical
                            </span>
                            <h4 className="text-4xl font-extrabold text-white mt-2">Dr. Elias Thorne</h4>
                            <p className="text-xl text-gray-300 mt-2">Featured Work: **The Clockwork Sonata**</p>
                            <p className="text-gray-400 mt-3 max-w-2xl lg:mx-0 mx-auto">
                                "My compositions are built on mathematical structures and deep emotional resonance, bridging the gap between historical composition and modern minimalism."
                            </p>
                            <a 
                                href="/profile/elias-thorne"
                                className="mt-5 inline-flex items-center px-5 py-2 text-sm font-bold rounded-full text-yellow-500 border border-yellow-500 hover:bg-yellow-900/40 transition"
                            >
                                Explore His Compositions <ArrowRightIcon className="h-4 w-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- Composers Grid --- */}
                <h3 className="text-3xl font-bold mb-8 text-gray-300 flex items-center">
                    <MusicalNoteIcon className="h-6 w-6 mr-3 text-red-400" />
                    All Featured Composers
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {composers.map((composer) => (
                        <div 
                            key={composer.id} 
                            className="bg-gray-900 p-6 rounded-xl shadow-2xl border border-gray-800 hover:border-teal-500 transition duration-300 transform hover:scale-[1.02]"
                        >
                            <div className="text-center">
                                {/* Placeholder for profile image */}
                                <div className="h-24 w-24 bg-gray-700 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-teal-400 border-4 border-gray-800">
                                    {composer.name.substring(0, 1) + composer.name.split(' ').pop()?.substring(0, 1)}
                                </div>
                                <h4 className="text-xl font-bold text-white mt-3">{composer.name}</h4>
                                <span className={`px-3 py-0.5 text-xs font-semibold rounded-full border ${getStyleColor(composer.style)}`}>
                                    {composer.style}
                                </span>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-800 text-sm">
                                <p className="text-gray-400 mb-2 font-medium"><BriefcaseIcon className="h-4 w-4 inline mr-2 text-red-400"/> {composer.specialty}</p>
                                <p className="text-gray-500 italic truncate">"{composer.description.substring(0, 60)}..."</p>
                            </div>
                            
                            <div className="mt-4 flex justify-between items-center text-xs text-gray-300">
                                <p className="flex items-center">
                                    <TrophyIcon className="h-4 w-4 mr-1 text-yellow-400" />
                                    <span className="font-semibold">{composer.keyStat}</span>
                                </p>
                                <a 
                                    href={`/profile/${composer.name.replace(/\s/g, '-').toLowerCase()}`}
                                    className="text-teal-400 hover:text-teal-300 transition flex items-center font-bold"
                                >
                                    View Works <ArrowRightIcon className="h-4 w-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-20 pt-8 border-t border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Discover curated playlists featuring music by these masters.
                    </h3>
                    <a 
                        href="/explore-curations"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-red-400 hover:bg-red-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Browse Curated Playlists
                        <MusicalNoteIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default MeetTheComposersPage;