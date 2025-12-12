"use client";

import React, { FC, useState, useMemo } from 'react';
// Assuming Heroicons are installed: npm install @heroicons/react
import { PlayCircleIcon, ClockIcon, MusicalNoteIcon, AdjustmentsHorizontalIcon, SpeakerWaveIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// --- Track Data Placeholder ---
interface Track {
    id: number;
    title: string;
    artist: string;
    genre: string;
    mood: string;
    duration: string;
    coverUrl: string;
}

const allTracks: Track[] = [
    { id: 1, title: "Midnight Hustle", artist: "Street Code", genre: 'Trap', mood: 'Aggressive', duration: '3:45', coverUrl: 'track_1.jpg' },
    { id: 2, title: "Brooklyn Grind", artist: "Jazzy P", genre: 'Boom Bap', mood: 'Motivational', duration: '4:10', coverUrl: 'track_2.jpg' },
    { id: 3, title: "Coffee Beats", artist: "Lofi Lounger", genre: 'Lofi', mood: 'Chill', duration: '2:55', coverUrl: 'track_3.jpg' },
    { id: 4, title: "Concrete Jungle", artist: "Big Rix", genre: 'Gangsta', mood: 'Aggressive', duration: '3:20', coverUrl: 'track_4.jpg' },
    { id: 5, title: "Summer Vibe", artist: "DJ Flex", genre: 'Trap', mood: 'Party', duration: '3:05', coverUrl: 'track_5.jpg' },
    { id: 6, title: "Old School Flow", artist: "The Lyricist", genre: 'Boom Bap', mood: 'Chill', duration: '4:30', coverUrl: 'track_6.jpg' },
    // Add more tracks for content variety
    { id: 7, title: "Success Mode", artist: "Street Code", genre: 'Trap', mood: 'Motivational', duration: '3:50', coverUrl: 'track_7.jpg' },
    { id: 8, title: "Rainy Day Sketch", artist: "Lofi Lounger", genre: 'Lofi', mood: 'Chill', duration: '2:15', coverUrl: 'track_8.jpg' },
];

const genres = ['All', ...Array.from(new Set(allTracks.map(t => t.genre)))];
const moods = ['All', ...Array.from(new Set(allTracks.map(t => t.mood)))];

const HipHopTracksPage: FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<string>('All');
    const [selectedMood, setSelectedMood] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Filter tracks based on genre, mood, and search term
    const filteredTracks = useMemo(() => {
        return allTracks.filter(track => {
            const matchesGenre = selectedGenre === 'All' || track.genre === selectedGenre;
            const matchesMood = selectedMood === 'All' || track.mood === selectedMood;
            const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  track.artist.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesGenre && matchesMood && matchesSearch;
        });
    }, [selectedGenre, selectedMood, searchTerm]);

    const handlePlay = (trackTitle: string) => {
        alert(`Playing track: ${trackTitle}`);
        // Add actual music player logic here
    };
    

    return (
        <section className="py-16 md:py-24 bg-gray-900 dark:bg-black text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Vibe */}
                <header className="text-center mb-16">
                    <MusicalNoteIcon className="h-12 w-12 text-teal-400 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Hip-Hop Vault</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-3xl mx-auto">
                        Explore the definitive collection of Hip-Hop tracks: from gritty Boom Bap to modern Trap bangers. Find your next favorite track.
                    </p>
                </header>

                {/* Filter and Search Bar */}
                <div className="p-6 bg-gray-800 rounded-xl shadow-2xl mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        
                        {/* Search Input */}
                        <div className="md:col-span-2">
                            <input
                                type="text"
                                placeholder="Search by Track or Artist name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500"
                            />
                        </div>
                        
                        {/* Genre Filter */}
                        <div className="relative">
                            <AdjustmentsHorizontalIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400 pointer-events-none" />
                            <select
                                value={selectedGenre}
                                onChange={(e) => setSelectedGenre(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border-gray-600 text-white appearance-none focus:ring-purple-500 focus:border-purple-500"
                            >
                                {genres.map(genre => (
                                    <option key={genre} value={genre}>{genre} Genre</option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Mood Filter */}
                        <div className="relative">
                            <SpeakerWaveIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pink-400 pointer-events-none" />
                            <select
                                value={selectedMood}
                                onChange={(e) => setSelectedMood(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border-gray-600 text-white appearance-none focus:ring-pink-500 focus:border-pink-500"
                            >
                                {moods.map(mood => (
                                    <option key={mood} value={mood}>{mood} Mood</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Tracks List */}
                <h3 className="text-2xl font-bold mb-6 text-gray-300">
                    Showing {filteredTracks.length} Results
                </h3>
                
                <div className="space-y-4">
                    {filteredTracks.length > 0 ? (
                        filteredTracks.map((track, index) => (
                            <div 
                                key={track.id} 
                                className="flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 rounded-xl shadow-lg transition duration-300 border-l-4 border-teal-500/0 hover:border-teal-500"
                            >
                                <div className="flex items-center space-x-4">
                                    {/* Track Number */}
                                    <span className="text-xl font-bold text-teal-400 w-6 text-center">{index + 1}</span>
                                    
                                    {/* Album Cover Placeholder */}
                                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex-shrink-0 relative overflow-hidden">
                                        {/* In a real app, use Next/Image here */}
                                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/covers/${track.coverUrl})` }}></div>
                                    </div>

                                    {/* Title and Artist */}
                                    <div>
                                        <p className="text-lg font-semibold text-white">{track.title}</p>
                                        <p className="text-sm text-gray-400">{track.artist}</p>
                                    </div>
                                    
                                    {/* Genre and Mood Tags */}
                                    <div className="hidden sm:flex space-x-2 ml-6">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${track.genre === 'Trap' ? 'bg-purple-600/30 text-purple-300' : track.genre === 'Boom Bap' ? 'bg-blue-600/30 text-blue-300' : track.genre === 'Lofi' ? 'bg-pink-600/30 text-pink-300' : 'bg-red-600/30 text-red-300'}`}>
                                            {track.genre}
                                        </span>
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-teal-600/30 text-teal-300`}>
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
                                        className="text-teal-400 hover:text-teal-300 transition"
                                    >
                                        <PlayCircleIcon className="h-8 w-8" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center p-10 bg-gray-800 rounded-xl">
                            <p className="text-xl text-gray-400">No tracks found matching your filters. Try a different mood or genre.</p>
                        </div>
                    )}
                </div>
                
                {/* Footer CTA / Discover More */}
                <div className="text-center mt-16 pt-8 border-t border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Can't find your style?
                    </h3>
                    <a 
                        href="/Explore"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-teal-400 hover:bg-teal-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Explore Curated Playlists
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default HipHopTracksPage;