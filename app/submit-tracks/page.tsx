"use client";

import React, { FC, useState, useMemo } from 'react';
// Heroicons imports
import { CloudArrowUpIcon, MusicalNoteIcon, DocumentTextIcon, CheckCircleIcon, ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { FingerPrintIcon } from '@heroicons/react/24/solid'; 

// --- Step Definitions ---
const submissionSteps = [
    { id: 1, name: 'Upload Files', icon: CloudArrowUpIcon },
    { id: 2, name: 'Metadata & Info', icon: DocumentTextIcon },
    { id: 3, name: 'Review & Submit', icon: CheckCircleIcon },
];

const TrackSubmissionPage: FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [submissionData, setSubmissionData] = useState({
        trackFile: null as File | null,
        trackTitle: '',
        artistName: '',
        genre: 'Ambient',
        mood: 'Calm',
        isExclusive: false,
        contactEmail: '',
        bioLink: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setSubmissionData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
        } else if (type === 'file') {
            const files = (e.target as HTMLInputElement).files;
            setSubmissionData(prev => ({ ...prev, [name]: files ? files[0] : null }));
        } else {
            setSubmissionData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleNext = () => {
        if (currentStep < submissionSteps.length) {
            // Basic validation check before moving to the next step
            if (currentStep === 1 && !submissionData.trackFile) {
                alert("Please upload your track file first.");
                return;
            }
            if (currentStep === 2 && (!submissionData.trackTitle || !submissionData.artistName)) {
                 alert("Please fill in the Title and Artist Name.");
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
        setIsSubmitting(true);
        setSubmissionStatus('idle');

        // Simulate API call delay (2 seconds)
        setTimeout(() => {
            setIsSubmitting(false);
            if (submissionData.trackTitle && submissionData.trackFile) {
                setSubmissionStatus('success');
            } else {
                setSubmissionStatus('error');
            }
        }, 2000);
    };

    // --- Step Content Components ---

    const Step1_UploadFiles = () => (
        <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <CloudArrowUpIcon className="h-7 w-7 mr-3 text-blue-400" />
                Step 1: Upload Track File
            </h3>

            <div className="border-2 border-dashed border-gray-600 rounded-lg p-10 text-center hover:border-blue-500 transition cursor-pointer">
                <input
                    type="file"
                    name="trackFile"
                    id="trackFile"
                    accept=".mp3,.wav,.flac"
                    onChange={handleInputChange}
                    className="hidden"
                />
                <label htmlFor="trackFile" className="block cursor-pointer">
                    {submissionData.trackFile ? (
                        <>
                            <MusicalNoteIcon className="h-10 w-10 mx-auto text-blue-400 mb-2" />
                            <p className="text-white font-semibold">{submissionData.trackFile.name}</p>
                            <p className="text-sm text-gray-400">File ready for review. Click to change.</p>
                        </>
                    ) : (
                        <>
                            <CloudArrowUpIcon className="h-10 w-10 mx-auto text-gray-500 mb-2" />
                            <p className="text-white font-semibold">Drag & Drop or Click to Upload (.wav, .flac preferred)</p>
                            <p className="text-sm text-gray-400">Max file size: 100MB</p>
                        </>
                    )}
                </label>
            </div>
            
            <button 
                onClick={handleNext} 
                type="button"
                disabled={!submissionData.trackFile}
                className={`mt-6 w-full py-3 px-6 rounded-lg font-bold transition flex items-center justify-center ${
                    submissionData.trackFile ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
            >
                Next: Add Metadata <ChevronRightIcon className="h-5 w-5 ml-2" />
            </button>
        </div>
    );

    const Step2_Metadata = () => (
        <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <DocumentTextIcon className="h-7 w-7 mr-3 text-teal-400" />
                Step 2: Metadata & Track Info
            </h3>

            {/* Title and Artist */}
            <div className="grid md:grid-cols-2 gap-6">
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">Track Title (Required)</span>
                    <input
                        type="text"
                        name="trackTitle"
                        value={submissionData.trackTitle}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </label>
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">Artist/Producer Name (Required)</span>
                    <input
                        type="text"
                        name="artistName"
                        value={submissionData.artistName}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500"
                        required
                    />
                </label>
            </div>

            {/* Genre and Mood */}
            <div className="grid md:grid-cols-2 gap-6">
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">Primary Genre</span>
                    <select
                        name="genre"
                        value={submissionData.genre}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500 appearance-none"
                    >
                        <option value="Ambient">Ambient/Drone</option>
                        <option value="Lo-fi">Lo-fi Hip Hop</option>
                        <option value="Cinematic">Cinematic/Orchestral</option>
                        <option value="Classical">Classical</option>
                        <option value="Electronic">Electronic</option>
                    </select>
                </label>
                <label className="block">
                    <span className="text-gray-300 font-semibold mb-2 block">Primary Mood</span>
                    <select
                        name="mood"
                        value={submissionData.mood}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500 appearance-none"
                    >
                        <option value="Calm">Calm/Relaxing</option>
                        <option value="Intense">Intense/Dramatic</option>
                        <option value="Uplifting">Uplifting/Happy</option>
                        <option value="Meditative">Meditative/Focus</option>
                    </select>
                </label>
            </div>
            
            {/* Contact and Exclusive */}
            <label className="block">
                <span className="text-gray-300 font-semibold mb-2 block">Contact Email (for review feedback)</span>
                <input
                    type="email"
                    name="contactEmail"
                    value={submissionData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500"
                    required
                />
            </label>

            <div className="flex justify-between mt-8">
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
                    disabled={!submissionData.trackTitle || !submissionData.artistName}
                    className={`py-3 px-6 rounded-lg font-bold transition flex items-center ${
                        (submissionData.trackTitle && submissionData.artistName) ? 'bg-teal-500 text-gray-900 hover:bg-teal-400' : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    Next: Review & Submit <ChevronRightIcon className="h-5 w-5 ml-2" />
                </button>
            </div>
        </div>
    );

    const Step3_Review = () => (
        <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <CheckCircleIcon className="h-7 w-7 mr-3 text-red-400" />
                Step 3: Review and Finalize Submission
            </h3>

            <div className="p-6 bg-gray-800 rounded-lg border border-red-500/50">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <FingerPrintIcon className="h-5 w-5 mr-2 text-red-400" />
                    Submission Summary
                </h4>
                <ul className="mt-3 space-y-2 text-base text-gray-200">
                    <li><span className="font-semibold text-red-300">File:</span> {submissionData.trackFile?.name || "N/A"}</li>
                    <li><span className="font-semibold text-red-300">Title:</span> {submissionData.trackTitle}</li>
                    <li><span className="font-semibold text-red-300">Artist:</span> {submissionData.artistName}</li>
                    <li><span className="font-semibold text-red-300">Genre/Mood:</span> {submissionData.genre} / {submissionData.mood}</li>
                    <li><span className="font-semibold text-red-300">Contact:</span> {submissionData.contactEmail}</li>
                </ul>
            </div>

            {/* Terms and Exclusive Check */}
            <div className="pt-4 space-y-4">
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name="isExclusive"
                        checked={submissionData.isExclusive}
                        onChange={handleInputChange}
                        className="form-checkbox h-5 w-5 text-red-500 rounded border-gray-600 bg-gray-700 focus:ring-red-500"
                    />
                    <span className="ml-3 text-gray-300 font-semibold">I confirm this track is *exclusive* to our platform for 60 days.</span>
                </label>
                <p className="text-xs text-gray-500">
                    By submitting, you agree to our Review Terms and Conditions. Tracks are reviewed weekly.
                </p>
            </div>
            
            <div className="flex justify-between mt-8">
                <button 
                    onClick={handlePrev} 
                    type="button"
                    className="py-3 px-6 rounded-lg bg-gray-600 text-white font-bold hover:bg-gray-500 transition flex items-center"
                >
                    <ChevronLeftIcon className="h-5 w-5 mr-2" /> Back
                </button>
                <button 
                    type="submit"
                    disabled={isSubmitting || submissionStatus === 'success' || !submissionData.trackFile || !submissionData.trackTitle}
                    className={`py-3 px-8 rounded-lg text-white font-bold transition flex items-center justify-center ${
                        isSubmitting ? 'bg-red-400 cursor-wait' :
                        submissionStatus === 'success' ? 'bg-green-500 cursor-not-allowed' :
                        'bg-red-500 hover:bg-red-600'
                    }`}
                >
                    {isSubmitting ? 'Submitting...' : submissionStatus === 'success' ? 'Submitted! 🎉' : 'FINAL SUBMIT'}
                </button>
            </div>
            
            {/* Submission Status Message */}
            {submissionStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-900/50 text-red-300 rounded-lg">
                    Submission failed. Please check all required fields and try again.
                </div>
            )}
        </div>
    );

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1_UploadFiles />;
            case 2:
                return <Step2_Metadata />;
            case 3:
                return <Step3_Review />;
            default:
                return <Step1_UploadFiles />;
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Theme */}
                <header className="text-center mb-12">
                    <MusicalNoteIcon className="h-12 w-12 text-blue-500 mx-auto" />
                    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
                        Submit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">New Track</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 max-w-3xl mx-auto">
                        Get your instrumental music featured in our curated playlists and collections.
                    </p>
                </header>

                {/* Step Tracker */}
                <div className="mb-10 flex justify-between items-center relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-700 after:top-1/2 after:-translate-y-1/2 after:z-0">
                    {submissionSteps.map((step) => {
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
                        View your past submissions and performance stats.
                    </h3>
                    <a 
                        href="/artist-dashboard"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-red-400 hover:bg-red-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Go to Artist Dashboard
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default TrackSubmissionPage;