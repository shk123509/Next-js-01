"use client";

import React, { FC, useState, useMemo } from 'react';
// CORRECTED Import: MusicNoteIcon replaced with MusicalNoteIcon
import { MusicalNoteIcon, PlayCircleIcon, TagIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Squares2X2Icon } from '@heroicons/react/24/solid'; 

// --- Playlist Data Placeholder ---
interface Playlist {
  id: number;
  name: string;
  description: string;
  category: 'Focus' | 'Relaxation' | 'Travel' | 'Workout' | 'Seasonal';
  tags: string[];
  trackCount: number;
  coverImageUrl: string; // Placeholder for image URL
}

const allPlaylists: Playlist[] = [
    { 
        id: 1, 
        name: "Deep Focus Flow", 
        description: 'Ambient, binaural beats designed for concentrated work and study sessions.', 
        category: 'Focus', 
        tags: ['Ambient', 'Instrumental', 'Study', 'No Lyrics'], 
        trackCount: 50, 
        coverImageUrl: '/images/covers/deep_focus.jpg',
    },
    { 
        id: 2, 
        name: "Rainy Day Jazz", 
        description: 'Smooth, nostalgic jazz standards perfect for cozy, contemplative afternoons.', 
        category: 'Relaxation', 
        tags: ['Jazz', 'Relax', 'Chill', 'Nostalgic'], 
        trackCount: 35, 
        coverImageUrl: '/images/covers/rainy_jazz.jpg',
    },
    { 
        id: 3, 
        name: "Epic Road Trip", 
        description: 'Uplifting indie rock and pop anthems for endless highways and adventures.', 
        category: 'Travel', 
        tags: ['Pop', 'Rock', 'Uplifting', 'Driving'], 
        trackCount: 65, 
        coverImageUrl: '/images/covers/road_trip.jpg',
    },
    { 
        id: 4, 
        name: "Beast Mode ON", 
        description: 'High-energy EDM and heavy beats to crush your personal best at the gym.', 
        category: 'Workout', 
        tags: ['EDM', 'Gym', 'High Energy', 'Motivating'], 
        trackCount: 40, 
        coverImageUrl: '/images/covers/beast_mode.jpg',
    },
    { 
        id: 5, 
        name: "Classical Study Mix", 
        description: 'Baroque and Classical era masterpieces for enhanced concentration.', 
        category: 'Focus', 
        tags: ['Classical', 'Instrumental', 'Study', 'Baroque'], 
        trackCount: 75, 
        coverImageUrl: '/images/covers/classical_study.jpg',
    },
];

const categories = ['All', ...Array.from(new Set(allPlaylists.map(p => p.category)))];

const CuratedPlaylistsPage: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Filter playlists
    const filteredPlaylists = useMemo(() => {
        return allPlaylists.filter(playlist => {
            const matchesCategory = selectedCategory === 'All' || playlist.category === selectedCategory;
            const matchesSearch = searchTerm === '' || 
                                  playlist.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  playlist.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  playlist.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);

    const handlePlay = (playlistName: string) => {
        console.log(`Starting playback of playlist: ${playlistName}`);
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Focus': return 'bg-yellow-600/30 text-yellow-300 border-yellow-500';
            case 'Relaxation': return 'bg-blue-600/30 text-blue-300 border-blue-500';
            case 'Travel': return 'bg-teal-600/30 text-teal-300 border-teal-500';
            case 'Workout': return 'bg-red-600/30 text-red-300 border-red-500';
            case 'Seasonal': return 'bg-green-600/30 text-green-300 border-green-500';
            default: return 'bg-gray-600/30 text-gray-300 border-gray-500';
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Theme */}
                <header className="text-center mb-16">
                    <Squares2X2Icon className="h-12 w-12 text-teal-400 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Playlists</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-4xl mx-auto">
                        Find the perfect soundtrack for any moment, mood, or activity.
                    </p>
                </header>

                {/* Filter and Search Section */}
                <div className="p-6 bg-gray-900 rounded-xl shadow-2xl border border-teal-500/50 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                        
                        {/* Search Input */}
                        <div className="md:col-span-1">
                            <div className="relative">
                                {/* MusicalNoteIcon used here */}
                                <MusicalNoteIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search by Title, Mood, or Tag..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                        </div>
                        
                        {/* Category Filter */}
                        <div className="relative">
                            <TagIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-400 pointer-events-none" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white appearance-none focus:ring-teal-500 focus:border-teal-500"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat} Category</option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Status/CTA */}
                        <div className="hidden lg:block text-sm text-gray-400 italic self-center text-right pr-4">
                            Showing {filteredPlaylists.length} playlists.
                        </div>
                    </div>
                </div>

                {/* Playlist Cards Grid */}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredPlaylists.length > 0 ? (
                        filteredPlaylists.map((playlist) => (
                            <div 
                                key={playlist.id} 
                                className="bg-gray-900 rounded-xl shadow-xl overflow-hidden flex flex-col transition duration-300 transform hover:scale-[1.03] border border-gray-800 hover:border-teal-500"
                            >
                                {/* Cover Image Placeholder */}
                                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                                    {/* Replace with an actual Image component referencing playlist.coverImageUrl */}
                                    <span className="text-4xl text-teal-500 opacity-50">🎵</span>
                                    <span className={`absolute top-2 right-2 px-3 py-1 text-xs font-bold rounded-full border ${getCategoryColor(playlist.category)}`}>
                                        {playlist.category}
                                    </span>
                                </div>
                                
                                <div className="p-4 flex flex-col flex-grow">
                                    <h4 className="text-xl font-extrabold text-white mb-1 leading-snug">
                                        {playlist.name}
                                    </h4>
                                    <p className="text-sm text-gray-400 mb-3 flex-grow line-clamp-2">
                                        {playlist.description}
                                    </p>
                                    
                                    {/* Metadata */}
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <ClockIcon className="h-4 w-4 mr-1" />
                                        <span>{playlist.trackCount} Tracks</span>
                                    </div>

                                    {/* Action Button */}
                                    <button 
                                        onClick={() => handlePlay(playlist.name)}
                                        className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 text-md font-bold rounded-lg shadow-md text-gray-900 bg-teal-400 hover:bg-teal-300 transition"
                                    >
                                        <PlayCircleIcon className="h-5 w-5 mr-2" />
                                        Play Now
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-4 text-center p-12 bg-gray-900 rounded-xl">
                            <p className="text-xl text-gray-400">No playlists found matching your criteria. Try widening your search!</p>
                        </div>
                    )}
                </div>
                
                {/* Footer CTA / Create Your Own */}
                <div className="text-center mt-16 pt-8 border-t border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Can't find the perfect mix?
                    </h3>
                    <a 
                        href="/create-playlist"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-yellow-400 hover:bg-yellow-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Create Your Own Playlist
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default CuratedPlaylistsPage;