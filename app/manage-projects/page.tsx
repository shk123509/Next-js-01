"use client";

import React, { FC, useState, useMemo } from 'react';
interface Project {
    id: number;
    title: string;
    type: 'Compilation' | 'Playlist' | 'Draft Album';
    status: 'Draft' | 'In Review' | 'Scheduled' | 'Published';
    tracksCount: number;
    lastUpdated: string;
    createdDate: string;
}
// Heroicons imports
import { FolderOpenIcon, PencilSquareIcon, TrashIcon, ClockIcon, MagnifyingGlassIcon, Bars3Icon, ShareIcon, ArrowRightIcon, ArchiveBoxIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { CubeTransparentIcon, ListBulletIcon } from '@heroicons/react/24/solid'; 

// --- Mock Project Data ---
const allProjects: Project[] = [
    { id: 1, title: "Lofi Focus Vol. 3", type: 'Compilation', status: 'Published', tracksCount: 50, lastUpdated: '2025-12-10', createdDate: '2025-10-01' },
    { id: 2, title: "Rainy Day Jazz Mix", type: 'Playlist', status: 'Draft', tracksCount: 30, lastUpdated: '2025-12-12', createdDate: '2025-12-05' },
    { id: 3, title: "Cinematic Scores Library", type: 'Draft Album', status: 'In Review', tracksCount: 12, lastUpdated: '2025-12-08', createdDate: '2025-11-20' },
    { id: 4, title: "Workout EDM Hits", type: 'Playlist', status: 'Scheduled', tracksCount: 45, lastUpdated: '2025-11-15', createdDate: '2025-11-10' },
    { id: 5, title: "Ambient Sleep Tones", type: 'Compilation', status: 'Published', tracksCount: 75, lastUpdated: '2025-09-01', createdDate: '2025-08-15' },
];

const projectTypes = ['All', ...Array.from(new Set(allProjects.map(p => p.type)))];
const projectStatuses = ['All', ...Array.from(new Set(allProjects.map(p => p.status)))];

const ProjectManagementPage: FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');

    // Filtered Projects Logic
    const filteredProjects = useMemo(() => {
        return allProjects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedType === 'All' || project.type === selectedType;
            const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
            return matchesSearch && matchesType && matchesStatus;
        });
    }, [searchTerm, selectedType, selectedStatus]);

    const getStatusColor = (status: Project['status']) => {
        switch (status) {
            case 'Published': return 'bg-green-600/30 text-green-400 border-green-600';
            case 'Draft': return 'bg-gray-600/30 text-gray-400 border-gray-600';
            case 'In Review': return 'bg-yellow-600/30 text-yellow-400 border-yellow-600';
            case 'Scheduled': return 'bg-blue-600/30 text-blue-400 border-blue-600';
            default: return 'bg-gray-700/50 text-gray-300 border-gray-700';
        }
    };

    const handleAction = (action: string, projectTitle: string) => {
        alert(`${action} action triggered for project: ${projectTitle}`);
    };

    const projectTypeIcon = (type: Project['type']) => {
        switch (type) {
            case 'Compilation': return <ArchiveBoxIcon className="h-5 w-5 text-red-400" />;
            case 'Playlist': return <ListBulletIcon className="h-5 w-5 text-teal-400" />;
            case 'Draft Album': return <DocumentDuplicateIcon className="h-5 w-5 text-yellow-400" />;
            default: return <CubeTransparentIcon className="h-5 w-5 text-gray-400" />;
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gray-950 text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header: Title and Theme */}
                <header className="mb-12 border-b border-gray-800 pb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <FolderOpenIcon className="h-12 w-12 text-teal-500 mr-4" />
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                                Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Management</span>
                            </h2>
                        </div>
                        <a 
                            href="/start-new-compilation"
                            className="inline-flex items-center px-6 py-2 border border-blue-500 text-blue-500 font-bold rounded-lg hover:bg-blue-900/40 transition"
                        >
                            + Start New Project
                        </a>
                    </div>
                    <p className="mt-2 text-xl text-gray-400 max-w-4xl">
                        View, filter, and edit all your created Compilations, Playlists, and Albums.
                    </p>
                </header>
                

                {/* --- Filtering and Search Controls --- */}
                <div className="p-6 bg-gray-900 rounded-xl shadow-2xl border border-teal-500/50 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                        
                        {/* Search Input */}
                        <div className="md:col-span-2">
                            <div className="relative">
                                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search by Project Title..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>
                        </div>
                        
                        {/* Type Filter */}
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full py-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-teal-500 focus:border-teal-500 appearance-none pr-8 pl-3"
                        >
                            {projectTypes.map(type => (
                                <option key={type} value={type}>{type} Type</option>
                            ))}
                        </select>
                        
                        {/* Status Filter */}
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="w-full py-3 rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-teal-500 focus:border-teal-500 appearance-none pr-8 pl-3"
                        >
                            {projectStatuses.map(status => (
                                <option key={status} value={status}>{status} Status</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* --- Project List Table --- */}
                <div className="bg-gray-900 rounded-xl shadow-xl overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-800">
                        <thead className="bg-gray-800">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Project Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell">
                                    Tracks
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                                    Last Updated
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <tr key={project.id} className="hover:bg-gray-800 transition duration-150">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {projectTypeIcon(project.type)}
                                                <div className="ml-3">
                                                    <p className="text-sm font-semibold text-white">{project.title}</p>
                                                    <p className="text-xs text-gray-500 lg:hidden">{project.type}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                                            <p className="text-sm text-gray-300">{project.type}</p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                            <p className="text-sm text-gray-300">{project.tracksCount}</p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell">
                                            {project.lastUpdated}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end space-x-3">
                                                <button 
                                                    title="Edit Project"
                                                    onClick={() => handleAction('Edit', project.title)}
                                                    className="text-teal-400 hover:text-teal-300"
                                                >
                                                    <PencilSquareIcon className="h-5 w-5" />
                                                </button>
                                                {project.status === 'Published' && (
                                                    <button 
                                                        title="Share Link"
                                                        onClick={() => handleAction('Share', project.title)}
                                                        className="text-blue-400 hover:text-blue-300"
                                                    >
                                                        <ShareIcon className="h-5 w-5" />
                                                    </button>
                                                )}
                                                <button 
                                                    title="Delete Project"
                                                    onClick={() => handleAction('Delete', project.title)}
                                                    className="text-red-400 hover:text-red-300"
                                                >
                                                    <TrashIcon className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                                        No projects found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-16 pt-8 border-t border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Need to onboard new content?
                    </h3>
                    <a 
                        href="/submit-new-track"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-gray-900 bg-red-400 hover:bg-red-300 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Submit New Tracks for Review
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default ProjectManagementPage;