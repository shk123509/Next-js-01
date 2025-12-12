"use client";

import React, { FC, useState, useMemo } from 'react';
// CORRECTED Import: CrownIcon replaced with TrophyIcon from solid
import { PlayCircleIcon, ClockIcon, UsersIcon, GlobeAltIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { TrophyIcon, MusicalNoteIcon } from '@heroicons/react/24/solid'; 
// Using TrophyIcon to denote excellence and classic feel

// --- Classical Track Data Placeholder ---
interface ClassicalTrack {
  id: number;
  title: string;
  composer: string;
  era: 'Baroque' | 'Classical' | 'Romantic' | '20th Century';
  instrumentation: 'Orchestra' | 'Solo Piano' | 'Chamber' | 'Strings';
  mood: 'Grand' | 'Melancholy' | 'Joyful' | 'Intense';
  duration: string;
}

const allClassicalTracks: ClassicalTrack[] = [
    { id: 1, title: "Moonlight Sonata (1st Mov.)", composer: "Beethoven", era: 'Classical', instrumentation: 'Solo Piano', mood: 'Melancholy', duration: '5:30' },
    { id: 2, title: "The Four Seasons: Spring", composer: "Vivaldi", era: 'Baroque', instrumentation: 'Strings', mood: 'Joyful', duration: '3:20' },
    { id: 3, title: "Hungarian Dance No. 5", composer: "Brahms", era: 'Romantic', instrumentation: 'Orchestra', mood: 'Intense', duration: '2:45' },
    { id: 4, title: "Clair de Lune", composer: "Debussy", era: '20th Century', instrumentation: 'Solo Piano', mood: 'Melancholy', duration: '4:50' },
    { id: 5, title: "Requiem: Dies Irae", composer: "Mozart", era: 'Classical', instrumentation: 'Orchestra', mood: 'Intense', duration: '2:00' },
    { id: 6, title: "Cello Suite No. 1", composer: "Bach", era: 'Baroque', instrumentation: 'Chamber', mood: 'Grand', duration: '3:15' },
];

const eras = ['All', ...Array.from(new Set(allClassicalTracks.map(t => t.era)))];
const moods = ['All', ...Array.from(new Set(allClassicalTracks.map(t => t.mood)))];

const ClassicalMixPage: FC = () => {
    const [selectedEra, setSelectedEra] = useState<string>('All');
    const [selectedMood, setSelectedMood] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Filter tracks
    const filteredTracks = useMemo(() => {
        return allClassicalTracks.filter(track => {
            const matchesEra = selectedEra === 'All' || track.era === selectedEra;
            const matchesMood = selectedMood === 'All' || track.mood === selectedMood;
            const matchesSearch = searchTerm === '' || 
                                  track.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  track.composer.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesEra && matchesMood && matchesSearch;
        });
    }, [selectedEra, selectedMood, searchTerm]);

    const handlePlay = (trackTitle: string) => {
        console.log(`Playing classical track: ${trackTitle}`);
    };

    const getEraColor = (era: string) => {
        switch (era) {
            case 'Baroque': return 'bg-yellow-600/30 text-yellow-300';
            case 'Classical': return 'bg-teal-600/30 text-teal-300';
            case 'Romantic': return 'bg-red-600/30 text-red-300';
            case '20th Century': return 'bg-blue-600/30 text-blue-300';
            default: return 'bg-gray-600/30 text-gray-300';
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-900 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Elegance */}
                <header className="text-center mb-16">
                    {/* TrophyIcon used here */}
                    <TrophyIcon className="h-12 w-12 text-yellow-500 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600">Classical Mix Vault</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-4xl mx-auto">
                        A curated journey through the Golden Eras of music: Baroque, Classical, and Romantic.
                    </p>
                </header>

                {/* Filter and Search Section (Era Timeline Focus) */}
                <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-red-800/50 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        
                        {/* Search Input */}
                        <div className="md:col-span-1">
                            <input
                                type="text"
                                placeholder="Search Title or Composer..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500"
                            />
                        </div>
                        
                        {/* Era Filter */}
                        <div className="relative">
                            <GlobeAltIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-400 pointer-events-none" />
                            <select
                                value={selectedEra}
                                onChange={(e) => setSelectedEra(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border-gray-600 text-white appearance-none focus:ring-red-500 focus:border-red-500"
                            >
                                {eras.map(era => (
                                    <option key={era} value={era}>{era} Era</option>
                                ))}
                            </select>
                        </div>

                        {/* Mood Filter */}
                        <div className="relative">
                            <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-400 pointer-events-none" />
                            <select
                                value={selectedMood}
                                onChange={(e) => setSelectedMood(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border-gray-600 text-white appearance-none focus:ring-red-500 focus:border-red-500"
                            >
                                {moods.map(mood => (
                                    <option key={mood} value={mood}>{mood} Mood</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                
                {/* Visual Context: Timeline of Eras 

[Image of Historical Classical Music Timeline]
 */}
                <div className="text-center mb-10">
                    <p className="text-gray-400 text-sm italic">
                        The periods we explore: Baroque (c. 1600–1750), Classical (c. 1730–1820), Romantic (c. 1800–1910).
                    </p>
                    {/* Placeholder for a visual element or image */}
                </div>


                {/* Tracks List */}
                <h3 className="text-2xl font-bold mb-6 text-gray-300">
                    Showing {filteredTracks.length} Masterpieces
                </h3>
                
                <div className="space-y-3">
                    {filteredTracks.length > 0 ? (
                        filteredTracks.map((track, index) => (
                            <div 
                                key={track.id} 
                                className="flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-xl transition duration-300 border-l-4 border-yellow-500/0 hover:border-yellow-500"
                            >
                                <div className="flex items-center space-x-4">
                                    
                                    {/* Track Number */}
                                    <span className="text-xl font-bold text-yellow-400 w-6 text-center">{index + 1}</span>
                                    
                                    {/* Title and Composer */}
                                    <div>
                                        <p className="text-lg font-semibold text-white">{track.title}</p>
                                        <p className="text-sm text-gray-400">{track.composer} ({track.instrumentation})</p>
                                    </div>
                                    
                                    {/* Era and Mood Tags */}
                                    <div className="hidden sm:flex space-x-2 ml-6">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getEraColor(track.era)}`}>
                                            {track.era}
                                        </span>
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-indigo-600/30 text-indigo-300`}>
                                            {track.mood}
                                        </span>
                                    </div>
                                </div>

                                {/* Duration and Play Button */}
                                <div className="flex items-center space-x-6">
                                    <span className="text-sm text-gray-400 flex items-center">
                                        <ClockIcon className="h-4 w-4 mr-1" />
                                        {track.duration}
                                    </span>
                                    <button 
                                        onClick={() => handlePlay(track.title)}
                                        className="text-yellow-400 hover:text-yellow-300 transition"
                                    >
                                        <PlayCircleIcon className="h-8 w-8" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center p-10 bg-gray-800 rounded-xl">
                            <p className="text-xl text-gray-400">No masterpieces found matching your current selection.</p>
                        </div>
                    )}
                </div>
                
                {/* Footer CTA / Learn More */}
                <div className="text-center mt-16 pt-8 border-t border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Discover the Composers
                    </h3>
                    <a 
                        href="/Meet"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-red-400 hover:bg-red-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Meet the Masters
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default ClassicalMixPage;