"use client";

import React, { FC, useState } from 'react';
// Assuming you have Heroicons installed: npm install @heroicons/react
import { PlayCircleIcon, ClockIcon, FolderOpenIcon, ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';

// --- Type Definitions ---
interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted?: boolean;
  isLocked?: boolean;
}

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

// --- Curriculum Data Placeholder ---
const curriculumData: Module[] = [
  {
    id: 1,
    title: "Module 1: The Foundation of Modern Web Development",
    description: "Set up your environment, understand core JavaScript principles, and grasp the fundamentals of React and Next.js Architecture (Server vs. Client Components).",
    lessons: [
      { id: 101, title: "Lesson 1.1: Environment Setup (Node, npm, VSCode)", duration: "15 min" },
      { id: 102, title: "Lesson 1.2: Deep Dive into ES6+ Features", duration: "30 min" },
      { id: 103, title: "Lesson 1.3: Understanding React Hooks (useState, useEffect)", duration: "45 min", isCompleted: true },
    ],
  },
  {
    id: 2,
    title: "Module 2: Building High-Performance UIs with Tailwind",
    description: "Master utility-first CSS, optimize for responsiveness, and create complex, beautiful components without leaving your JSX.",
    lessons: [
      { id: 201, title: "Lesson 2.1: Tailwind Configuration and Customization", duration: "20 min" },
      { id: 202, title: "Lesson 2.2: Advanced Flexbox and Grid Layouts", duration: "35 min" },
      { id: 203, title: "Lesson 2.3: Creating Dark Mode and Themes", duration: "25 min" },
      { id: 204, title: "Lesson 2.4: Project: Replicating a Landing Page", duration: "60 min" },
    ],
  },
  {
    id: 3,
    title: "Module 3: Data Fetching and State Management (Advanced)",
    description: "Learn cutting-edge data management techniques using tools like SWR/React Query and managing global state efficiently across Server and Client Components.",
    lessons: [
      { id: 301, title: "Lesson 3.1: Server-Side Data Fetching in Next.js", duration: "30 min" },
      { id: 302, title: "Lesson 3.2: Caching and Stale-While-Revalidate (SWR)", duration: "40 min" },
      { id: 303, title: "Lesson 3.3: Global State with Zustand (The Modern Way)", duration: "50 min" },
    ],
  },
  {
    id: 4,
    title: "Module 4: Deployment and Performance Optimization (Bonus)",
    description: "Deploy your application securely, optimize image loading, and achieve near-perfect Lighthouse scores.",
    lessons: [
      { id: 401, title: "Lesson 4.1: Deploying to Vercel/Netlify", duration: "20 min" },
      { id: 402, title: "Lesson 4.2: Image Optimization and Lazy Loading", duration: "30 min", isCompleted: true },
      { id: 403, title: "Lesson 4.3: Course Final Assessment (Locked)", duration: "45 min", isLocked: true },
    ],
  },
];


const CourseCurriculum: FC = () => {
  // State to manage which module is currently open (accordion functionality)
  const [openModule, setOpenModule] = useState<number | null>(curriculumData[0].id);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Summary */}
        <header className="text-center mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-wider">
            Curriculum
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">
            What You Will Learn
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            4 comprehensive modules, 15+ hours of content, and 10 real-world projects. Everything you need to go from beginner to professional.
          </p>
        </header>

        {/* Curriculum Accordion */}
        <div className="space-y-4">
          {curriculumData.map((module) => {
            const isModuleOpen = openModule === module.id;
            const totalDuration = module.lessons.reduce((acc, lesson) => acc + parseInt(lesson.duration.split(' ')[0]), 0);

            return (
              <div key={module.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                
                {/* Module Header (Clickable Accordion Trigger) */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full text-left flex items-center justify-between p-6 focus:outline-none transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <FolderOpenIcon className="h-7 w-7 text-indigo-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 hidden sm:block">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Total Duration & Chevron Icon */}
                  <div className="flex items-center space-x-4 flex-shrink-0 ml-4">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1.5" />
                      {totalDuration} Total Mins
                    </span>
                    <ChevronDownIcon
                      className={`h-6 w-6 text-indigo-500 transition-transform duration-300 ${isModuleOpen ? 'transform rotate-180' : ''}`}
                    />
                  </div>
                </button>

                {/* Lessons Content (Collapsible) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${isModuleOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  aria-hidden={!isModuleOpen}
                >
                  <div className="overflow-hidden">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700 border-t border-gray-200 dark:border-gray-700 p-2">
                      {module.lessons.map((lesson, index) => (
                        <li key={lesson.id} className={`flex items-center justify-between py-4 px-4 ${lesson.isLocked ? 'opacity-50' : 'hover:bg-gray-100 dark:hover:bg-gray-700 transition'}`}>
                          
                          <div className="flex items-center space-x-3">
                            {/* Lesson Icon */}
                            {lesson.isLocked ? (
                              <LockClosedIcon className="h-5 w-5 text-red-500 flex-shrink-0" />
                            ) : lesson.isCompleted ? (
                              <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                            ) : (
                              <PlayCircleIcon className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                            )}
                            
                            {/* Lesson Title */}
                            <span className="text-base font-medium text-gray-900 dark:text-gray-200">
                              {index + 1}. {lesson.title}
                            </span>
                          </div>
                          
                          {/* Duration / Status */}
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                              <ClockIcon className="h-4 w-4 mr-1.5" />
                              {lesson.duration}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Final CTA Below Curriculum */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Master the Stack?
            </h3>
            <a 
                href="/enroll"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02]"
            >
                Start Learning Now
            </a>
        </div>

      </div>
    </section>
  );
}

export default CourseCurriculum;