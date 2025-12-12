"use client";

import React, { FC, useState, useMemo } from 'react';
// Heroicons imports
import { SquaresPlusIcon, ListBulletIcon, DocumentDuplicateIcon, ArchiveBoxIcon, CheckCircleIcon, ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { CubeTransparentIcon } from '@heroicons/react/24/solid'; 

// Mock Data for Track Selection
const availableTracks = [
    { id: 101, title: 'Lo-fi Study Loop', artist: 'Zen Beats', duration: '3:45', selected: false },
    { id: 102, title: 'Cinematic Dawn', artist: 'Epic Scores', duration: '5:10', selected: false },
    { id: 103, title: 'Focus Flow 1', artist: 'EchoWave Studio', duration: '2:55', selected: false },
    { id: 104, title: 'Rainy Day Piano', artist: 'Melody Makers', duration: '4:20', selected: false },
    { id: 105, title: 'Deep Space Drone', artist: 'Cosmic Sound', duration: '7:05', selected: false },
];

const compilationSteps = [
    { id: 1, name: 'Compilation Details', icon: DocumentDuplicateIcon },
    { id: 2, name: 'Track Selection', icon: ListBulletIcon },
    { id: 3, name: 'Final Review', icon: CheckCircleIcon },
];

const StartNewCompilationPage: FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [compilationData, setCompilationData] = useState({
        title: '',
        description: '',
        theme: '',
        coverImage: null as File | null,
        tracks: availableTracks, // Initialize with mock tracks
        isPublic: true,
        releaseDate: '',
    });
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setCompilationData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
        } else if (type === 'file') {
            const files = (e.target as HTMLInputElement).files;
            setCompilationData(prev => ({ ...prev, [name]: files ? files[0] : null }));
        } else {
            setCompilationData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleTrackSelect = (id: number) => {
        setCompilationData(prev => ({
            ...prev,
            tracks: prev.tracks.map(track => 
                track.id === id ? { ...track, selected: !track.selected } : track
            )
        }));
    };

    const handleNext = () => {
        if (currentStep < compilationSteps.length) {
            // Basic validation
            if (currentStep === 1 && (!compilationData.title || !compilationData.theme)) {
                alert("Please fill in the Compilation Title and Theme.");
                return;
            }
            if (currentStep === 2 && selectedTracks.length === 0) {
                alert("Please select at least one track for the compilation.");
                return;
            }
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Compilation Created:", {
            ...compilationData,
            tracks: selectedTracks.map(t => t.title)
        });
        alert(`Compilation "${compilationData.title || 'Untitled'}" created successfully!`);
        // Redirect logic here
    };

    const selectedTracks = useMemo(() => compilationData.tracks.filter(t => t.selected), [compilationData.tracks]);

    // --- Step Content Components ---

    const Step1_Details = () => (
        <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <DocumentDuplicateIcon className="h-7 w-7 mr-3 text-blue-400" />
                Step 1: Define Compilation Details
            </h3>
            
            <label className="block">
                <span className="text-gray-300 font-semibold mb-2 block">Compilation Title</span>
                <input
                    type="text"
                    name="title"
                    value={compilationData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Lofi Hip Hop for Focus Vol. 3"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </label>

            <label className="block">
                <span className="text-gray-300 font-semibold mb-2 block">Compilation Theme / Concept</span>
                <input
                    type="text"
                    name="theme"
                    value={compilationData.theme}
                    onChange={handleInputChange}
                    placeholder="e.g., Chill Beats, Deep Ambient, Classical Masterpieces"
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </label>

            <label className="block">
                <span className="text-gray-300 font-semibold mb-2 block">Description (Max 500 characters)</span>
                <textarea
                    name="description"
                    value={compilationData.description}
                    onChange={handleInputChange}
                    maxLength={500}
                    rows={3}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
                />
            </label>
            
            <div className="flex justify-end pt-4">
                <button 
                    onClick={handleNext} 
                    type="button"
                    className="py-3 px-6 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition flex items-center"
                >
                    Next: Select Tracks <ChevronRightIcon className="h-5 w-5 ml-2" />
                </button>
            </div>
        </div>
    );

    const Step2_TrackSelection = () => (
        <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <ListBulletIcon className="h-7 w-7 mr-3 text-teal-400" />
                Step 2: Select Tracks ({selectedTracks.length} Selected)
            </h3>

            {/* Track Search and Filter */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search available tracks by title or artist..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
                />
            </div>

            {/* Track List */}
            <div className="h-96 overflow-y-auto border border-gray-700 rounded-lg p-3 bg-gray-800 space-y-2">
                {compilationData.tracks
                    .filter(track => 
                        track.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        track.artist.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(track => (
                        <div 
                            key={track.id} 
                            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition ${
                                track.selected ? 'bg-teal-900/40 border border-teal-500' : 'hover:bg-gray-700/50'
                            }`}
                            onClick={() => handleTrackSelect(track.id)}
                        >
                            <div className="flex items-center">
                                <span className={`h-5 w-5 mr-3 flex items-center justify-center rounded-full ${track.selected ? 'bg-teal-500' : 'border border-gray-600 text-gray-400'}`}>
                                    {track.selected && <CheckCircleIcon className="h-4 w-4 text-white" />}
                                </span>
                                <div>
                                    <p className="text-white font-semibold">{track.title}</p>
                                    <p className="text-sm text-gray-400">by {track.artist} - {track.duration}</p>
                                </div>
                            </div>
                            <span className={`text-sm font-bold ${track.selected ? 'text-teal-400' : 'text-gray-500'}`}>
                                {track.selected ? 'SELECTED' : 'ADD'}
                            </span>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-between pt-4">
                <button 
                    onClick={handlePrev} 
                    type="button"
                    className="py-3 px-6 rounded-lg bg-gray-600 text-white font-bold hover:bg-gray-500 transition flex items-center"
                >
                    <ChevronLeftIcon className="h-5 w-5 mr-2" /> Back
                </button>
                <button 
                    onClick={handleNext} 
                    type="button"
                    disabled={selectedTracks.length === 0}
                    className={`py-3 px-6 rounded-lg font-bold transition flex items-center ${
                        selectedTracks.length > 0 ? 'bg-teal-500 text-gray-900 hover:bg-teal-400' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    Next: Review <ChevronRightIcon className="h-5 w-5 ml-2" />
                </button>
            </div>
        </div>
    );

    const Step3_Review = () => (
        <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <ArchiveBoxIcon className="h-7 w-7 mr-3 text-red-400" />
                Step 3: Final Review and Submission
            </h3>

            <div className="p-6 bg-gray-800 rounded-lg border border-red-500/50">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <CubeTransparentIcon className="h-5 w-5 mr-2 text-red-400" />
                    Compilation Overview
                </h4>
                <ul className="mt-3 space-y-2 text-base text-gray-200">
                    <li><span className="font-semibold text-red-300">Title:</span> {compilationData.title}</li>
                    <li><span className="font-semibold text-red-300">Theme:</span> {compilationData.theme}</li>
                    <li><span className="font-semibold text-red-300">Total Tracks:</span> {selectedTracks.length}</li>
                    <li><span className="font-semibold text-red-300">Public:</span> {compilationData.isPublic ? 'Yes' : 'No (Private)'}</li>
                </ul>
            </div>
            
            {/* Release Date and Privacy */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">Target Release Date (Optional)</span>
                    <input
                        type="date"
                        name="releaseDate"
                        value={compilationData.releaseDate}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-red-500 focus:border-red-500"
                    />
                </label>

                <div className="pt-8">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            name="isPublic"
                            checked={compilationData.isPublic}
                            onChange={handleInputChange}
                            className="form-checkbox h-5 w-5 text-red-500 rounded border-gray-600 bg-gray-700 focus:ring-red-500"
                        />
                        <span className="ml-3 text-gray-300 font-semibold">Make Compilation Public Now</span>
                    </label>
                </div>
            </div>

            <div className="flex justify-between pt-8">
                <button 
                    onClick={handlePrev} 
                    type="button"
                    className="py-3 px-6 rounded-lg bg-gray-600 text-white font-bold hover:bg-gray-500 transition flex items-center"
                >
                    <ChevronLeftIcon className="h-5 w-5 mr-2" /> Back
                </button>
                <button 
                    type="submit"
                    className="py-3 px-8 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 transition flex items-center"
                >
                    <SquaresPlusIcon className="h-6 w-6 mr-2" />
                    FINALIZE & PUBLISH
                </button>
            </div>
        </div>
    );

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1_Details />;
            case 2:
                return <Step2_TrackSelection />;
            case 3:
                return <Step3_Review />;
            default:
                return <Step1_Details />;
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Theme */}
                <header className="text-center mb-12">
                    <ArchiveBoxIcon className="h-12 w-12 text-blue-500 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        Start New <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">Compilation</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-3xl mx-auto">
                        Build a professional, themed music collection for a project or public release.
                    </p>
                </header>

                {/* Step Tracker */}
                <div className="mb-10 flex justify-between items-center relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-700 after:top-1/2 after:-translate-y-1/2 after:z-0">
                    {compilationSteps.map((step) => {
                        const isCurrent = step.id === currentStep;
                        const isCompleted = step.id < currentStep;
                        const colorClass = isCompleted ? 'bg-green-500' : isCurrent ? 'bg-blue-500 ring-4 ring-blue-500/30' : 'bg-gray-800 border-2 border-gray-700';
                        const textClass = isCurrent ? 'text-white' : 'text-gray-500';

                        return (
                            <div key={step.id} className="relative z-10 flex flex-col items-center">
                                <div className={`flex items-center justify-center h-10 w-10 rounded-full text-lg font-bold transition duration-300 ${colorClass} text-white`}>
                                    <step.icon className="h-5 w-5" />
                                </div>
                                <p className={`mt-2 text-sm font-semibold hidden md:block ${textClass}`}>
                                    {step.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
                
                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-8 bg-gray-900 rounded-xl shadow-3xl border border-gray-800">
                    {renderStep()}
                </form>

                {/* Footer CTA */}
                <div className="text-center mt-16 pt-8 border-t border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Manage your existing compilations and projects.
                    </h3>
                    <a 
                        href="/manage-projects"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-red-400 hover:bg-red-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Go to Project Management
                        <ArchiveBoxIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default StartNewCompilationPage;