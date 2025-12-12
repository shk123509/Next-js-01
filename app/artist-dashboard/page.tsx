"use client";

import React, { FC, useMemo } from 'react';
interface Submission {
    id: number;
    title: string;
    status: 'Pending Review' | 'Accepted' | 'Rejected' | 'Live';
    reviewDate: string;
    playsLast30Days: number;
}

interface PerformanceStats {
    totalPlays: number;
    totalStreams: number; // e.g., total listener count
    monthlyPlaysGrowth: number; // percentage
}
// Heroicons imports
import { ChartBarIcon, MusicalNoteIcon, BellAlertIcon, ClockIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'; 

// --- Data Placeholders ---
const artistName = "EchoWave Studio";
const artistStats: PerformanceStats = {
    totalPlays: 15480,
    totalStreams: 4500,
    monthlyPlaysGrowth: 18.5,
};

const submissions: Submission[] = [
    { id: 1, title: "Drifting Tides (ft. Piano)", status: 'Live', reviewDate: '2025-11-01', playsLast30Days: 4520 },
    { id: 2, title: "Midnight Solitude", status: 'Pending Review', reviewDate: '2025-12-05', playsLast30Days: 0 },
    { id: 3, title: "Neon City Drive", status: 'Accepted', reviewDate: '2025-11-20', playsLast30Days: 1200 },
    { id: 4, title: "Ancient Ruins Chant", status: 'Rejected', reviewDate: '2025-10-15', playsLast30Days: 80 },
];

const messages = [
    { id: 1, subject: "Your track 'Midnight Solitude' is under review.", date: '2025-12-10', read: false },
    { id: 2, subject: "Performance update for November.", date: '2025-12-01', read: true },
    { id: 3, subject: "Action Required: Metadata for Neon City Drive.", date: '2025-11-21', read: false },
];

const ArtistDashboardPage: FC = () => {

    const getStatusColor = (status: Submission['status']) => {
        switch (status) {
            case 'Live': return 'bg-green-600 text-green-100';
            case 'Accepted': return 'bg-blue-600 text-blue-100';
            case 'Pending Review': return 'bg-yellow-600 text-yellow-900';
            case 'Rejected': return 'bg-red-600 text-red-100';
            default: return 'bg-gray-600 text-gray-100';
        }
    };

    const liveTracksCount = useMemo(() => submissions.filter(s => s.status === 'Live').length, []);
    const pendingReviewCount = useMemo(() => submissions.filter(s => s.status === 'Pending Review').length, []);
    const unreadMessagesCount = useMemo(() => messages.filter(m => !m.read).length, []);

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Artist Info */}
                <header className="mb-12 flex items-center justify-between border-b border-gray-800 pb-6">
                    <div className="flex items-center">
                        <UserCircleIcon className="h-14 w-14 text-red-500 mr-4" />
                        <div>
                            <p className="text-xl text-gray-400">Welcome back,</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                {artistName} <span className="text-red-500">Dashboard</span>
                            </h2>
                        </div>
                    </div>
                    <a 
                        href="/submit-tracks"
                        className="inline-flex items-center px-6 py-2 border border-red-500 text-red-500 font-bold rounded-lg hover:bg-red-900/40 transition"
                    >
                        + Submit New Track
                    </a>
                </header>

                {/* --- 1. Performance Summary Section --- */}
                <h3 className="text-3xl font-bold mb-6 text-gray-300 flex items-center">
                    <ChartBarIcon className="h-6 w-6 mr-3 text-red-400" />
                    Performance Summary
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    
                    {/* Card 1: Total Lifetime Plays */}
                    <div className="p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 border-red-500">
                        <p className="text-sm text-gray-400">Total Lifetime Plays</p>
                        <p className="text-5xl font-extrabold mt-1 text-white">
                            {artistStats.totalPlays.toLocaleString()}
                        </p>
                        <p className={`mt-2 text-sm font-semibold ${artistStats.monthlyPlaysGrowth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {artistStats.monthlyPlaysGrowth > 0 ? '▲' : '▼'} {artistStats.monthlyPlaysGrowth}% increase last month
                        </p>
                    </div>

                    {/* Card 2: Tracks Live */}
                    <div className="p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 border-blue-500">
                        <p className="text-sm text-gray-400">Tracks Currently Live</p>
                        <p className="text-5xl font-extrabold mt-1 text-white">
                            {liveTracksCount} / {submissions.length}
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                            {pendingReviewCount} tracks pending review.
                        </p>
                    </div>

                    {/* Card 3: Monthly Chart Placeholder */}
                    <div className="p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 border-yellow-500">
                        <p className="text-sm text-gray-400 mb-2">Plays Over Last 6 Months (Placeholder)</p>
                        <div className="h-24 bg-gray-800 flex items-center justify-center rounded-lg">
                            <span className="text-gray-600 italic">Chart Visualization Area</span>
                        </div>
                    </div>
                </div>

                {/* --- 2. Submission Status Section --- */}
                <h3 className="text-3xl font-bold mb-6 text-gray-300 flex items-center">
                    <MusicalNoteIcon className="h-6 w-6 mr-3 text-teal-400" />
                    Track Submission Status
                </h3>
                
                <div className="bg-gray-900 rounded-xl shadow-xl p-6 mb-12">
                    {submissions.map(track => (
                        <div 
                            key={track.id} 
                            className="flex justify-between items-center p-4 my-2 border-b border-gray-800 last:border-b-0 hover:bg-gray-800/50 transition duration-200 rounded-md"
                        >
                            <div className="flex-1 min-w-0">
                                <p className="text-lg font-semibold text-white">{track.title}</p>
                                <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                                    {track.status === 'Live' && <CheckCircleIcon className="h-4 w-4 text-green-500" />}
                                    <span className="truncate">Review Date: {track.reviewDate}</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-6">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm text-gray-400">Plays (30D)</p>
                                    <p className="font-bold text-white">{track.playsLast30Days.toLocaleString()}</p>
                                </div>
                                <span className={`px-4 py-1 text-xs font-bold rounded-full ${getStatusColor(track.status)}`}>
                                    {track.status}
                                </span>
                                <button className="text-gray-500 hover:text-red-400 transition">
                                    <ArrowRightIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- 3. Communication & Inbox Section --- */}
                <h3 className="text-3xl font-bold mb-6 text-gray-300 flex items-center">
                    <BellAlertIcon className="h-6 w-6 mr-3 text-yellow-400" />
                    Curator Inbox 
                    {unreadMessagesCount > 0 && (
                        <span className="ml-3 px-3 py-1 text-sm bg-red-600 rounded-full font-bold text-white">
                            {unreadMessagesCount} Unread
                        </span>
                    )}
                </h3>

                <div className="bg-gray-900 rounded-xl shadow-xl p-6">
                    {messages.map(msg => (
                        <div 
                            key={msg.id} 
                            className={`flex justify-between items-center p-4 my-2 border-b border-gray-800 last:border-b-0 rounded-md cursor-pointer ${
                                msg.read ? 'text-gray-500 hover:bg-gray-800/50' : 'text-white font-semibold bg-gray-800 border-l-4 border-yellow-500'
                            } transition duration-200`}
                        >
                            <div className="flex-1 min-w-0">
                                <p className="truncate">{msg.subject}</p>
                            </div>
                            <div className="flex items-center space-x-4 text-sm">
                                <span className="text-gray-500 whitespace-nowrap">{msg.date}</span>
                                <ArrowRightIcon className="h-4 w-4" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ArtistDashboardPage;