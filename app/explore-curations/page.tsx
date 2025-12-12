"use client";

import React, { FC, useState, useMemo } from 'react';
// Heroicons imports
interface Playlist {
    id: number;
    title: string;
    curator: string;
    theme: string;
    tracksCount: number;
    duration: string;
    tags: string[];
    isFeatured: boolean;
}
import { ListBulletIcon, MusicalNoteIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon, PlayCircleIcon, HeartIcon, ClockIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon, FireIcon } from '@heroicons/react/24/solid'; 

// --- Mock Playlist Data ---
const allPlaylists: Playlist[] = [
    { id: 1, title: "Deep Focus: Classical Minimalism", curator: "Anya Sharma", theme: "Focus/Work", tracksCount: 40, duration: "3:15:00", tags: ['Classical', 'Minimalist', 'Work', 'Instrumental'], isFeatured: true },
    { id: 2, title: "Midnight Lofi Study Beats", curator: "J-Beat Kim", theme: "Relax/Study", tracksCount: 65, duration: "4:45:00", tags: ['Lofi', 'Hip Hop', 'Relax', 'Chill'], isFeatured: true },
    { id: 3, title: "Epic Cinematic Trailer Scores", curator: "Kira V.", theme: "Action/Epic", tracksCount: 22, duration: "1:50:00", tags: ['Epic', 'Orchestral', 'Motivation', 'Film'], isFeatured: false },
    { id: 4, title: "Zen Garden Ambient Drone", curator: "Mira Sol", theme: "Sleep/Meditate", tracksCount: 15, duration: "2:30:00", tags: ['Ambient', 'Drone', 'Sleep', 'Meditative'], isFeatured: false },
    { id: 5, title: "Coffee Shop Jazz Instrumental", curator: "Jazz Master", theme: "Relax/Ambient", tracksCount: 35, duration: "2:40:00", tags: ['Jazz', 'Relax', 'Instrumental', 'Ambient'], isFeatured: false },
];

const themes = ['All Themes', 'Focus/Work', 'Relax/Study', 'Action/Epic', 'Sleep/Meditate', 'Ambient'];
const tags = ['Lofi', 'Classical', 'Hip Hop', 'Ambient', 'Orchestral', 'Motivation'];

const BrowsePlaylistsPage: FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTheme, setSelectedTheme] = useState('All Themes');
    const [selectedTag, setSelectedTag] = useState('');

    // Filtered Playlists Logic
    const filteredPlaylists = useMemo(() => {
        return allPlaylists.filter(playlist => {
            const matchesSearch = playlist.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  playlist.curator.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTheme = selectedTheme === 'All Themes' || playlist.theme === selectedTheme;
            const matchesTag = !selectedTag || playlist.tags.includes(selectedTag);
            return matchesSearch && matchesTheme && matchesTag;
        });
    }, [searchTerm, selectedTheme, selectedTag]);

    const handlePlay = (title: string) => {
        alert(`Starting playback for playlist: ${title}`);
    };

    const getThemeColor = (theme: string) => {
        switch (theme) {
            case 'Focus/Work': return 'border-blue-500 bg-blue-500/10 text-blue-400';
            case 'Relax/Study': return 'border-teal-500 bg-teal-500/10 text-teal-400';
            case 'Action/Epic': return 'border-red-500 bg-red-500/10 text-red-400';
            case 'Sleep/Meditate': return 'border-purple-500 bg-purple-500/10 text-purple-400';
            default: return 'border-gray-500 bg-gray-500/10 text-gray-400';
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Theme */}
                <header className="text-center mb-12 border-b border-gray-800 pb-8">
                    <ListBulletIcon className="h-12 w-12 text-teal-500 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Playlists</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-3xl mx-auto">
                        Find the perfect instrumental mix for any mood, activity, or occasion, hand-picked by experts.
                    </p>
                </header>

                {/* --- Filtering and Search Controls --- */}
                <div className="p-6 bg-gray-900 rounded-xl shadow-2xl border border-blue-500/50 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Search Input */}
                        <div className="md:col-span-1">
                            <div className="relative">
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search playlists or curators..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        
                        {/* Theme Filter */}
                        <select
                            value={selectedTheme}
                            onChange={(e) => { setSelectedTheme(e.target.value); setSelectedTag(''); }}
                            className="w-full py-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8 pl-3"
                        >
                            {themes.map(theme => (
                                <option key={theme} value={theme}>{theme}</option>
                            ))}
                        </select>
                        
                        {/* Tag Filter (Dropdown or Buttons) */}
                        <select
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                            className="w-full py-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8 pl-3"
                        >
                             <option value="">Filter by Tag (e.g., Lofi)</option>
                            {tags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* --- Playlists Grid --- */}
                <h3 className="text-3xl font-bold mb-8 text-gray-300 flex items-center">
                    <MusicalNoteIcon className="h-6 w-6 mr-3 text-red-400" />
                    Showing {filteredPlaylists.length} Playlists
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPlaylists.length > 0 ? (
                        filteredPlaylists.map((playlist) => (
                            <div 
                                key={playlist.id} 
                                className="bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden hover:scale-[1.02] transition duration-300 group"
                            >
                                {/* Playlist Image Placeholder / Play Button */}
                                <div className="relative h-48 bg-gray-800 flex items-center justify-center">
                                    <h4 className="text-2xl font-bold text-white text-center p-4">{playlist.title}</h4>
                                    <button 
                                        onClick={() => handlePlay(playlist.title)}
                                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"
                                    >
                                        <PlayCircleIcon className="h-16 w-16 text-teal-400 hover:text-teal-300 transition transform hover:scale-105" />
                                    </button>
                                </div>

                                <div className="p-6">
                                    {/* Curator and Featured Status */}
                                    <div className="flex justify-between items-center mb-3">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getThemeColor(playlist.theme)}`}>
                                            {playlist.theme}
                                        </span>
                                        {playlist.isFeatured && (
                                            <span className="flex items-center text-sm font-bold text-yellow-500">
                                                <FireIcon className="h-4 w-4 mr-1" /> Featured
                                            </span>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-1 text-sm text-gray-400">
                                        <p className="flex items-center"><UserCircleIcon className="h-4 w-4 mr-2" /> Curated by: <span className="text-white ml-1 font-semibold">{playlist.curator}</span></p>
                                        <p className="flex items-center"><ListBulletIcon className="h-4 w-4 mr-2" /> Tracks: <span className="text-white ml-1">{playlist.tracksCount}</span></p>
                                        <p className="flex items-center"><ClockIcon className="h-4 w-4 mr-2" /> Total Duration: <span className="text-white ml-1">{playlist.duration}</span></p>
                                    </div>

                                    {/* Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-800 pt-4">
                                        {playlist.tags.slice(0, 3).map(tag => (
                                            <span 
                                                key={tag} 
                                                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400 cursor-pointer hover:bg-teal-900/40 transition"
                                                onClick={() => setSelectedTag(tag)}
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="md:col-span-3 p-10 text-center bg-gray-900 rounded-xl text-gray-500">
                            No playlists found matching your current search and filters. Try a different combination.
                        </div>
                    )}
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-20 pt-8 border-t border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Interested in becoming a Curator?
                    </h3>
                    <a 
                        href="/curator-application"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-red-400 hover:bg-red-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Learn More About Curation
                        <HeartIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default BrowsePlaylistsPage;