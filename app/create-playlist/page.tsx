"use client";

import React, { FC, useState } from 'react';
// Heroicons imports
import { PlusCircleIcon, HeartIcon, ClockIcon, MusicalNoteIcon, SparklesIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'; 

const steps = [
    { id: 1, name: 'Define Goal', icon: SparklesIcon },
    { id: 2, name: 'Select Mood & Genre', icon: MusicalNoteIcon },
    { id: 3, name: 'Set Length & Review', icon: ClockIcon },
];

const CreatePlaylistPage: FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [playlistData, setPlaylistData] = useState({
        name: '',
        goal: 'Focus',
        mood: 'Calm',
        genre: 'Ambient',
        duration: '60 minutes',
        isPrivate: true,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setPlaylistData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
        } else {
            setPlaylistData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleNext = () => {
        if (currentStep < steps.length) {
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
        console.log("Playlist Created:", playlistData);
        alert(`Playlist "${playlistData.name || 'New Mix'}" created successfully!`);
        // Redirect to the newly created playlist page or confirmation screen
    };

    // --- Step Content Components ---

    const Step1_DefineGoal = () => (
        <>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <SparklesIcon className="h-7 w-7 mr-3 text-yellow-400" />
                Step 1: Define Your Playlist Goal
            </h3>
            
            <div className="space-y-6">
                
                {/* Playlist Name */}
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">Playlist Name</span>
                    <input
                        type="text"
                        name="name"
                        value={playlistData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., Late Night Coding Beats"
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500"
                        required
                    />
                </label>

                {/* Primary Goal */}
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">What is the Primary Goal?</span>
                    <select
                        name="goal"
                        value={playlistData.goal}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-yellow-500 focus:border-yellow-500 appearance-none"
                    >
                        <option value="Focus">Focus & Study</option>
                        <option value="Relaxation">Relaxation & Sleep</option>
                        <option value="Workout">Workout & Energy</option>
                        <option value="Travel">Travel & Adventure</option>
                        <option value="Background">General Background</option>
                    </select>
                </label>
            </div>
            <button 
                onClick={handleNext} 
                type="button"
                className="mt-10 w-full py-3 px-6 rounded-lg bg-yellow-500 text-gray-900 font-bold hover:bg-yellow-400 transition flex items-center justify-center"
            >
                Next: Select Music Details <ChevronRightIcon className="h-5 w-5 ml-2" />
            </button>
        </>
    );

    const Step2_SelectMusic = () => (
        <>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <MusicalNoteIcon className="h-7 w-7 mr-3 text-teal-400" />
                Step 2: Select Mood & Genre
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Mood Selection */}
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">Desired Mood</span>
                    <select
                        name="mood"
                        value={playlistData.mood}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500 appearance-none"
                    >
                        <option value="Calm">Calm & Meditative</option>
                        <option value="Uplifting">Uplifting & Positive</option>
                        <option value="Intense">Intense & Aggressive</option>
                        <option value="Nostalgic">Nostalgic & Reflective</option>
                    </select>
                </label>

                {/* Genre Selection */}
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">Preferred Genre</span>
                    <select
                        name="genre"
                        value={playlistData.genre}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500 appearance-none"
                    >
                        <option value="Ambient">Ambient/Electronic</option>
                        <option value="Acoustic">Acoustic/Folk</option>
                        <option value="Classical">Classical/Instrumental</option>
                        <option value="Pop">Pop/Indie</option>
                        <option value="Hip Hop">Hip Hop/R&B</option>
                    </select>
                </label>
            </div>
            
            <div className="flex justify-between mt-10">
                <button 
                    onClick={handlePrev} 
                    type="button"
                    className="py-3 px-6 rounded-lg bg-gray-600 text-white font-bold hover:bg-gray-500 transition"
                >
                    Back
                </button>
                <button 
                    onClick={handleNext} 
                    type="button"
                    className="py-3 px-6 rounded-lg bg-teal-500 text-gray-900 font-bold hover:bg-teal-400 transition flex items-center"
                >
                    Next: Finalize & Create <ChevronRightIcon className="h-5 w-5 ml-2" />
                </button>
            </div>
        </>
    );

    const Step3_Finalize = () => (
        <>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <ClockIcon className="h-7 w-7 mr-3 text-red-400" />
                Step 3: Set Length & Review
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Duration */}
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">Target Duration</span>
                    <select
                        name="duration"
                        value={playlistData.duration}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-red-500 focus:border-red-500 appearance-none"
                    >
                        <option value="30 minutes">Short (Approx. 30 minutes)</option>
                        <option value="60 minutes">Standard (Approx. 60 minutes)</option>
                        <option value="120 minutes">Long (Approx. 120 minutes)</option>
                        <option value="Endless">Loop/Endless</option>
                    </select>
                </label>

                {/* Privacy Setting */}
                <div className="pt-8">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            name="isPrivate"
                            checked={playlistData.isPrivate}
                            onChange={handleInputChange}
                            className="form-checkbox h-5 w-5 text-red-500 rounded border-gray-600 bg-gray-700 focus:ring-red-500"
                        />
                        <span className="ml-3 text-gray-300 font-semibold">Keep Playlist Private</span>
                    </label>
                </div>
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-red-500/50">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <ArrowsRightLeftIcon className="h-5 w-5 mr-2 text-red-400" />
                    Review and Generate
                </h4>
                <p className="text-sm text-gray-400">
                    We will now generate a playlist based on your preferences:
                </p>
                <ul className="mt-3 space-y-1 text-base text-gray-200">
                    <li><span className="font-semibold text-red-300">Name:</span> {playlistData.name || "Untitled Mix"}</li>
                    <li><span className="font-semibold text-red-300">Goal:</span> {playlistData.goal}</li>
                    <li><span className="font-semibold text-red-300">Music:</span> {playlistData.mood} {playlistData.genre}</li>
                    <li><span className="font-semibold text-red-300">Length:</span> {playlistData.duration}</li>
                </ul>
            </div>
            
            <div className="flex justify-between mt-10">
                <button 
                    onClick={handlePrev} 
                    type="button"
                    className="py-3 px-6 rounded-lg bg-gray-600 text-white font-bold hover:bg-gray-500 transition"
                >
                    Back
                </button>
                <button 
                    type="submit"
                    className="py-3 px-8 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600 transition flex items-center"
                >
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    CREATE PLAYLIST
                </button>
            </div>
        </>
    );

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1_DefineGoal />;
            case 2:
                return <Step2_SelectMusic />;
            case 3:
                return <Step3_Finalize />;
            default:
                return <Step1_DefineGoal />;
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Theme */}
                <header className="text-center mb-12">
                    <PlusCircleIcon className="h-12 w-12 text-red-500 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Perfect Mix</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-3xl mx-auto">
                        Tell us your goal, and our AI will build a personalized soundtrack just for you.
                    </p>
                </header>

                {/* Step Tracker */}
                <div className="mb-10 flex justify-between items-center relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-700 after:top-1/2 after:-translate-y-1/2 after:z-0">
                    {steps.map((step) => {
                        const isCurrent = step.id === currentStep;
                        const isCompleted = step.id < currentStep;
                        return (
                            <div key={step.id} className="relative z-10 flex flex-col items-center">
                                <div className={`flex items-center justify-center h-10 w-10 rounded-full text-lg font-bold transition duration-300 ${
                                    isCompleted ? 'bg-green-500 text-white' : 
                                    isCurrent ? 'bg-red-500 text-white ring-4 ring-red-500/30' : 
                                    'bg-gray-800 text-gray-500 border-2 border-gray-700'
                                }`}>
                                    <step.icon className="h-5 w-5" />
                                </div>
                                <p className={`mt-2 text-sm font-semibold hidden md:block ${isCurrent ? 'text-white' : 'text-gray-500'}`}>
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
                        Prefer to browse pre-made playlists?
                    </h3>
                    <a 
                        href="/explore-curated-playlists"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-teal-400 hover:bg-teal-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Explore Curated Playlists
                        <HeartIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default CreatePlaylistPage;