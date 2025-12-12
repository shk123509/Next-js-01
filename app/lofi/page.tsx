"use client";

import React, { FC, useState, useMemo } from 'react';
// Assuming Heroicons are installed: npm install @heroicons/react
import { PlayCircleIcon, ClockIcon, MoonIcon, BookOpenIcon, HeartIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
interface LoFiTrack {
  id: number;
  title: string;
  artist: string;
  mood: 'Study' | 'Sleep' | 'Focus' | 'Relax';
  duration: string;
  coverUrl: string;
}
// --- Lo-Fi Track Data Placeholder ---
const allLoFiTracks: LoFiTrack[] = [
    { id: 1, title: "Rainy Window", artist: "Chill Synth", mood: 'Study', duration: '3:15', coverUrl: 'lofi_1.jpg' },
    { id: 2, title: "Midnight Thoughts", artist: "Sleepy Keys", mood: 'Sleep', duration: '4:40', coverUrl: 'lofi_2.jpg' },
    { id: 3, title: "Concentration Loop", artist: "Focus Flow", mood: 'Focus', duration: '2:50', coverUrl: 'lofi_3.jpg' },
    { id: 4, title: "Sunday Morning", artist: "The Lounger", mood: 'Relax', duration: '3:55', coverUrl: 'lofi_4.jpg' },
    { id: 5, title: "Quiet Library", artist: "Chill Synth", mood: 'Study', duration: '3:00', coverUrl: 'lofi_5.jpg' },
    { id: 6, title: "Drifting Off", artist: "Sleepy Keys", mood: 'Sleep', duration: '4:10', coverUrl: 'lofi_6.jpg' },
];

const moods = ['All', ...Array.from(new Set(allLoFiTracks.map(t => t.mood)))];

const LoFiBeatsPage: FC = () => {
    const [selectedMood, setSelectedMood] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Filter tracks
    const filteredTracks = useMemo(() => {
        return allLoFiTracks.filter(track => {
            const matchesMood = selectedMood === 'All' || track.mood === selectedMood;
            const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  track.artist.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesMood && matchesSearch;
        });
    }, [selectedMood, searchTerm]);

    const getMoodIcon = (mood: string) => {
        switch (mood) {
            case 'Study': return <BookOpenIcon className="h-5 w-5 mr-2" />;
            case 'Sleep': return <MoonIcon className="h-5 w-5 mr-2" />;
            case 'Focus': return <HeartIcon className="h-5 w-5 mr-2" />;
            case 'Relax': return <ClockIcon className="h-5 w-5 mr-2" />;
            default: return null;
        }
    };

    const handlePlay = (trackTitle: string) => {
        alert(`Playing track: ${trackTitle}`);
        // Add actual music player logic here
    };

    return (
        <section className="py-16 md:py-24 bg-gray-900 text-white min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Vibe */}
                <header className="text-center mb-16">
                    <MoonIcon className="h-12 w-12 text-blue-400 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Lo-Fi Beat Oasis</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-3xl mx-auto">
                        Your essential station for chill beats, deep focus, and tranquil sleep. Tune out the chaos.
                    </p>
                </header>

                {/* Mood Filter Chips and Search */}
                <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-800 rounded-xl shadow-2xl mb-12 space-y-4 md:space-y-0">
                    
                    {/* Search Input */}
                    <div className="w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search track or artist..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Mood Filter Chips */}
                    <div className="flex flex-wrap justify-center md:justify-end space-x-2">
                        {moods.map(mood => (
                            <button
                                key={mood}
                                onClick={() => setSelectedMood(mood)}
                                className={`
                                    flex items-center px-4 py-2 rounded-full text-sm font-medium transition duration-200 
                                    ${selectedMood === mood 
                                        ? 'bg-blue-600 text-white shadow-lg' 
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
                                `}
                            >
                                {getMoodIcon(mood)}
                                {mood === 'All' ? 'All Moods' : mood}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tracks List */}
                <h3 className="text-2xl font-bold mb-6 text-gray-300">
                    Showing {filteredTracks.length} Chill Tracks
                </h3>
                
                <div className="space-y-3">
                    {filteredTracks.length > 0 ? (
                        filteredTracks.map((track, index) => (
                            <div 
                                key={track.id} 
                                className="flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md transition duration-300 border-l-4 border-blue-500/0 hover:border-blue-500"
                            >
                                <div className="flex items-center space-x-4">
                                    
                                    {/* Album Cover Placeholder */}
                                    <div className="w-14 h-14 bg-gray-700 rounded-lg flex-shrink-0 relative overflow-hidden shadow-lg">
                                        {/* Placeholder image (Replace with Next/Image) */}
                                        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url(/lofi-covers/${track.coverUrl})` }}></div>
                                    </div>

                                    {/* Title and Artist */}
                                    <div>
                                        <p className="text-lg font-semibold text-white">{track.title}</p>
                                        <p className="text-sm text-gray-400">{track.artist}</p>
                                    </div>
                                    
                                    {/* Mood Tag */}
                                    <div className="hidden sm:flex ml-6">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${track.mood === 'Sleep' ? 'bg-indigo-600/40 text-indigo-300' : track.mood === 'Study' ? 'bg-yellow-600/40 text-yellow-300' : 'bg-gray-600/40 text-gray-300'}`}>
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
                                        className="text-blue-400 hover:text-blue-300 transition"
                                    >
                                        <PlayCircleIcon className="h-8 w-8" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center p-10 bg-gray-800 rounded-xl">
                            <p className="text-xl text-gray-400">No tracks found. Try removing your filters to see more beats.</p>
                        </div>
                    )}
                </div>
                
                {/* Footer CTA / Submit Your Beats */}
                <div className="text-center mt-16 pt-8 border-t border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Are you a Lo-Fi Artist?
                    </h3>
                    <a 
                        href="/submit-beats"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-yellow-400 hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Submit Your Tracks for Review
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default LoFiBeatsPage;