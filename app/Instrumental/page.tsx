"use client";

import React, { FC, useState, useMemo } from 'react';
// CORRECTED Import: VolumeUpIcon replaced with SpeakerWaveIcon
import { PlayCircleIcon, ClockIcon, MusicalNoteIcon, SpeakerWaveIcon, ArrowRightIcon, KeyIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid'; 

// --- Instrumental Track Data Placeholder (Same) ---
interface InstrumentalTrack {
  id: number;
  title: string;
  composer: string;
  genre: 'Classical' | 'Jazz' | 'Cinematic' | 'Ambient' | 'Acoustic';
  instrument: 'Piano' | 'Cello' | 'Guitar' | 'Orchestra' | 'Synth' | 'Saxophone';
  mood: 'Calm' | 'Dramatic' | 'Uplifting' | 'Meditative';
  duration: string;
}

const allInstrumentalTracks: InstrumentalTrack[] = [
    { id: 1, title: "Silent Sonata", composer: "Elias Vance", genre: 'Classical', instrument: 'Piano', mood: 'Meditative', duration: '5:10' },
    { id: 2, title: "The Urban Swing", composer: "Blue Note Trio", genre: 'Jazz', instrument: 'Saxophone', mood: 'Uplifting', duration: '3:45' },
    { id: 3, title: "Echoes of Time", composer: "Aetheria", genre: 'Cinematic', instrument: 'Orchestra', mood: 'Dramatic', duration: '6:20' },
    { id: 4, title: "Forest Streams", composer: "Zen Flow", genre: 'Ambient', instrument: 'Synth', mood: 'Calm', duration: '7:05' },
    { id: 5, title: "Wanderer's Tune", composer: "Leo K.", genre: 'Acoustic', instrument: 'Guitar', mood: 'Uplifting', duration: '4:00' },
    { id: 6, title: "The Final Ascent", composer: "Elias Vance", genre: 'Cinematic', instrument: 'Cello', mood: 'Dramatic', duration: '4:55' },
    { id: 7, title: "Late Night Study", composer: "Quiet Mind", genre: 'Ambient', instrument: 'Piano', mood: 'Meditative', duration: '3:30' },
];

const genres = ['All', ...Array.from(new Set(allInstrumentalTracks.map(t => t.genre)))];
const moods = ['All', ...Array.from(new Set(allInstrumentalTracks.map(t => t.mood)))];
const instruments = ['All', ...Array.from(new Set(allInstrumentalTracks.map(t => t.instrument)))];

const InstrumentalMusicPage: FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<string>('All');
    const [selectedMood, setSelectedMood] = useState<string>('All');
    const [selectedInstrument, setSelectedInstrument] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Filter tracks (Same logic)
    const filteredTracks = useMemo(() => {
        return allInstrumentalTracks.filter(track => {
            const matchesGenre = selectedGenre === 'All' || track.genre === selectedGenre;
            const matchesMood = selectedMood === 'All' || track.mood === selectedMood;
            const matchesInstrument = selectedInstrument === 'All' || track.instrument === selectedInstrument;
            const matchesSearch = searchTerm === '' || 
                                  track.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  track.composer.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesGenre && matchesMood && matchesInstrument && matchesSearch;
        });
    }, [selectedGenre, selectedMood, selectedInstrument, searchTerm]);

    const handlePlay = (trackTitle: string) => {
        console.log(`Playing instrumental track: ${trackTitle}`);
    };

    const getGenreColor = (genre: string) => {
        switch (genre) {
            case 'Classical': return 'bg-amber-600/30 text-amber-300';
            case 'Jazz': return 'bg-blue-600/30 text-blue-300';
            case 'Cinematic': return 'bg-red-600/30 text-red-300';
            case 'Ambient': return 'bg-green-600/30 text-green-300';
            case 'Acoustic': return 'bg-purple-600/30 text-purple-300';
            default: return 'bg-gray-600/30 text-gray-300';
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Elegance */}
                <header className="text-center mb-16">
                    <SparklesIcon className="h-12 w-12 text-amber-400 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Instrumental Sanctuary</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-4xl mx-auto">
                        A curated collection of the world's finest instrumental compositions. Music for every focus, mood, and moment.
                    </p>
                </header>

                {/* Filter and Search Section */}
                <div className="p-6 bg-gray-900 rounded-xl shadow-2xl border border-amber-500/30 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        
                        {/* Search Input */}
                        <div className="md:col-span-1">
                            <input
                                type="text"
                                placeholder="Search by Title or Composer..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-amber-500 focus:border-amber-500"
                            />
                        </div>
                        
                        {/* Genre Filter */}
                        <div className="relative">
                            {/* MusicalNoteIcon */}
                            <MusicalNoteIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-400 pointer-events-none" />
                            <select
                                value={selectedGenre}
                                onChange={(e) => setSelectedGenre(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white appearance-none focus:ring-amber-500 focus:border-amber-500"
                            >
                                {genres.map(genre => (
                                    <option key={genre} value={genre}>{genre} Genre</option>
                                ))}
                            </select>
                        </div>

                        {/* Instrument Filter */}
                        <div className="relative">
                            {/* KeyIcon */}
                            <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-400 pointer-events-none" />
                            <select
                                value={selectedInstrument}
                                onChange={(e) => setSelectedInstrument(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white appearance-none focus:ring-amber-500 focus:border-amber-500"
                            >
                                {instruments.map(inst => (
                                    <option key={inst} value={inst}>{inst} Focus</option>
                                ))}
                            </select>
                        </div>
                        
                        {/* Mood Filter */}
                        <div className="relative">
                            {/* SpeakerWaveIcon (Replaces VolumeUpIcon) */}
                            <SpeakerWaveIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-400 pointer-events-none" />
                            <select
                                value={selectedMood}
                                onChange={(e) => setSelectedMood(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white appearance-none focus:ring-amber-500 focus:border-amber-500"
                            >
                                {moods.map(mood => (
                                    <option key={mood} value={mood}>{mood} Mood</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Tracks List (Same) */}
                <h3 className="text-2xl font-bold mb-6 text-gray-300">
                    Showing {filteredTracks.length} Instrumental Pieces
                </h3>
                
                <div className="space-y-3">
                    {filteredTracks.length > 0 ? (
                        filteredTracks.map((track, index) => (
                            <div 
                                key={track.id} 
                                className="flex items-center justify-between p-4 bg-gray-900 hover:bg-gray-800 rounded-lg shadow-xl transition duration-300 border-l-4 border-amber-500/0 hover:border-amber-500"
                            >
                                <div className="flex items-center space-x-4">
                                    
                                    {/* Track Number */}
                                    <span className="text-xl font-bold text-amber-400 w-6 text-center">{index + 1}</span>
                                    
                                    {/* Title and Composer */}
                                    <div>
                                        <p className="text-lg font-semibold text-white">{track.title}</p>
                                        <p className="text-sm text-gray-400">{track.composer}</p>
                                    </div>
                                    
                                    {/* Genre, Instrument, and Mood Tags */}
                                    <div className="hidden sm:flex space-x-2 ml-6">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getGenreColor(track.genre)}`}>
                                            {track.genre}
                                        </span>
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full bg-indigo-600/30 text-indigo-300`}>
                                            {track.instrument}
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
                                        className="text-amber-400 hover:text-amber-300 transition"
                                    >
                                        <PlayCircleIcon className="h-8 w-8" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center p-10 bg-gray-900 rounded-xl">
                            <p className="text-xl text-gray-400">No compositions found matching your refined taste.</p>
                        </div>
                    )}
                </div>
                
                {/* Footer CTA / Curate Your Own (Same) */}
                <div className="text-center mt-16 pt-8 border-t border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Curate Your Perfect Playlist
                    </h3>
                    <a 
                        href="/create-playlist-01"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-amber-400 hover:bg-amber-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Start New Compilation
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default InstrumentalMusicPage;