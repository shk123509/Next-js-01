"use client";

import React, { FC, useState, useMemo } from 'react';
interface Composer {
  id: number;
  name: string;
  era: 'Baroque' | 'Classical' | 'Romantic' | '20th Century';
  nationality: 'German' | 'Austrian' | 'Italian' | 'Russian' | 'French';
  lifespan: string;
  keyWork: string;
  bioSummary: string;
}
// Heroicons imports
import { GlobeAltIcon, UsersIcon, SearchIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { TrophyIcon, MusicalNoteIcon } from '@heroicons/react/24/solid'; 
// TrophyIcon for "Master" theme, MusicalNoteIcon for filtering

// --- Composer Data Placeholder ---
const allComposers: Composer[] = [
    { 
        id: 1, 
        name: "Johann Sebastian Bach", 
        era: 'Baroque', 
        nationality: 'German', 
        lifespan: '1685–1750', 
        keyWork: 'The Well-Tempered Clavier', 
        bioSummary: 'A German composer and musician of the Baroque period. He enriched established German styles through counterpoint.',
    },
    { 
        id: 2, 
        name: "Wolfgang Amadeus Mozart", 
        era: 'Classical', 
        nationality: 'Austrian', 
        lifespan: '1756–1791', 
        keyWork: 'Symphony No. 40', 
        bioSummary: 'A prolific and influential composer of the Classical era. He composed over 600 works, many acknowledged as pinnacles of symphonic music.',
    },
    { 
        id: 3, 
        name: "Ludwig van Beethoven", 
        era: 'Classical', 
        nationality: 'German', 
        lifespan: '1770–1827', 
        keyWork: 'Symphony No. 5', 
        bioSummary: 'A crucial figure in the transition between the Classical and Romantic eras. His innovative works are among the most performed.',
    },
    { 
        id: 4, 
        name: "Pyotr Ilyich Tchaikovsky", 
        era: 'Romantic', 
        nationality: 'Russian', 
        lifespan: '1840–1893', 
        keyWork: 'Swan Lake', 
        bioSummary: 'A Russian composer whose works included symphonies, concertos, operas, ballets and chamber music. Famous for his emotional melodies.',
    },
    { 
        id: 5, 
        name: "Claude Debussy", 
        era: '20th Century', 
        nationality: 'French', 
        lifespan: '1862–1918', 
        keyWork: 'Clair de Lune', 
        bioSummary: 'A key figure in Impressionist music, though he disliked the term. His music is noted for its sensual and atmospheric qualities.',
    },
];

const eras = ['All', ...Array.from(new Set(allComposers.map(c => c.era)))];
const nationalities = ['All', ...Array.from(new Set(allComposers.map(c => c.nationality)))];

const MeetTheMastersPage: FC = () => {
    const [selectedEra, setSelectedEra] = useState<string>('All');
    const [selectedNationality, setSelectedNationality] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Filter composers
    const filteredComposers = useMemo(() => {
        return allComposers.filter(composer => {
            const matchesEra = selectedEra === 'All' || composer.era === selectedEra;
            const matchesNationality = selectedNationality === 'All' || composer.nationality === selectedNationality;
            const matchesSearch = searchTerm === '' || 
                                  composer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  composer.keyWork.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesEra && matchesNationality && matchesSearch;
        });
    }, [selectedEra, selectedNationality, searchTerm]);

    const getEraColor = (era: string) => {
        switch (era) {
            case 'Baroque': return 'bg-yellow-600/30 text-yellow-300 border-yellow-500';
            case 'Classical': return 'bg-teal-600/30 text-teal-300 border-teal-500';
            case 'Romantic': return 'bg-red-600/30 text-red-300 border-red-500';
            case '20th Century': return 'bg-blue-600/30 text-blue-300 border-blue-500';
            default: return 'bg-gray-600/30 text-gray-300 border-gray-500';
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-900 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Theme */}
                <header className="text-center mb-16">
                    <TrophyIcon className="h-12 w-12 text-red-500 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Classical Masters</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-4xl mx-auto">
                        Explore the lives and legacy of the most influential composers who shaped musical history.
                    </p>
                </header>

                {/* Filter and Search Section */}
                <div className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-yellow-500/50 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        
                        {/* Search Input */}
                        <div className="md:col-span-1">
                            <div className="relative">
                                {/* Using MusicalNoteIcon for search context (Title or Work) */}
                                <MusicalNoteIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search Name or Key Work..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                        </div>
                        
                        {/* Era Filter */}
                        <div className="relative">
                            <GlobeAltIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-yellow-400 pointer-events-none" />
                            <select
                                value={selectedEra}
                                onChange={(e) => setSelectedEra(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border-gray-600 text-white appearance-none focus:ring-yellow-500 focus:border-yellow-500"
                            >
                                {eras.map(era => (
                                    <option key={era} value={era}>{era} Era</option>
                                ))}
                            </select>
                        </div>

                        {/* Nationality Filter */}
                        <div className="relative">
                            <UsersIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-yellow-400 pointer-events-none" />
                            <select
                                value={selectedNationality}
                                onChange={(e) => setSelectedNationality(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border-gray-600 text-white appearance-none focus:ring-yellow-500 focus:border-yellow-500"
                            >
                                {nationalities.map(nat => (
                                    <option key={nat} value={nat}>{nat} Nationality</option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Current Filter Status */}
                        <div className="hidden lg:block text-sm text-gray-400 italic self-center text-right pr-4">
                            Filtered: {selectedEra} / {selectedNationality}
                        </div>
                    </div>
                </div>

                {/* Composer Cards Grid */}
                <h3 className="text-2xl font-bold mb-8 text-gray-300">
                    Showing {filteredComposers.length} Found Masters
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredComposers.length > 0 ? (
                        filteredComposers.map((composer) => (
                            <div 
                                key={composer.id} 
                                className="bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col transition duration-300 transform hover:scale-[1.03] border-t-4 border-red-500/0 hover:border-red-500"
                            >
                                {/* Composer Name and Era Tag */}
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-3xl font-extrabold text-white leading-snug">
                                        {composer.name}
                                    </h4>
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getEraColor(composer.era)}`}>
                                        {composer.era}
                                    </span>
                                </div>
                                
                                <p className="text-sm text-gray-400 italic mb-3">
                                    {composer.nationality}, {composer.lifespan}
                                </p>
                                
                                <div className="mb-4">
                                    <p className="text-base text-gray-300 line-clamp-3">
                                        {composer.bioSummary}
                                    </p>
                                </div>

                                {/* Key Work and Action */}
                                <div className="mt-auto pt-4 border-t border-gray-700">
                                    <p className="text-sm font-semibold text-yellow-400 mb-2">
                                        Key Work: <span className="text-white font-normal italic">{composer.keyWork}</span>
                                    </p>
                                    <a 
                                        href={`/composer/${composer.name.toLowerCase().replace(/\s/g, '-')}`}
                                        className="text-red-400 hover:text-red-300 font-bold flex items-center transition"
                                    >
                                        View Full Profile
                                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="md:col-span-3 text-center p-12 bg-gray-800 rounded-xl">
                            <p className="text-xl text-gray-400">No masters found matching these criteria. Try broadening your filter!</p>
                        </div>
                    )}
                </div>
                
                {/* Footer CTA / Historical Context */}
                <div className="text-center mt-16 pt-8 border-t border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Explore the Historical Timeline
                    </h3>
                    <a 
                        href="/View"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-yellow-400 hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        View Music Eras
                        <GlobeAltIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default MeetTheMastersPage;