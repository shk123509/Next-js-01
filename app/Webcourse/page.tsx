// "use client" - यदि आप इंटरेक्टिविटी (useState/onClick) जोड़ते हैं, तो यह आवश्यक है
import React from 'react';

const WebDevelopmentCourse = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* 1. Hero Section (Gradient Focus) */}
      <header className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
            The Complete Roadmap
          </span>
          <h1 className="mt-2 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Full Stack Web Development Mastery
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
            Become a professional developer. Master React, Node.js, Databases, and deploy robust, scalable applications.
          </p>
          <div className="mt-10">
            <a
              href="/learn"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-purple-600 bg-white hover:bg-gray-100 transform transition duration-300 hover:scale-105"
            >
              Start Learning Today
            </a>
          </div>
        </div>
      </header>

      {/* 2. Key Learnings / Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What You Will Master</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Frontend */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-3 text-blue-500">Frontend Foundations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deep dive into HTML5, modern CSS (Flexbox, Grid), and advanced React concepts (Hooks, Context API).
              </p>
            </div>
            
            {/* Card 2: Backend */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-3 text-indigo-500">Backend & APIs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build robust APIs using Node.js and Express, handle authentication, and create secure server-side logic.
              </p>
            </div>
            
            {/* Card 3: Database & Deployment */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-purple-500">
              <h3 className="text-xl font-bold mb-3 text-purple-500">Database & Deployment</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Master PostgreSQL/MongoDB, connect frontend to backend, and deploy your full-stack app on platforms like Vercel or AWS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Syllabus/Module Outline (Accordion Style - using basic list here) */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Detailed Course Syllabus</h2>
          
          <ul className="space-y-4">
            {/* Module Item 1 */}
            <li className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-green-500">
              <span className="font-semibold text-green-500 mr-2">Module 1:</span>
              <span className="font-medium">Modern JavaScript (ES6+)</span>
            </li>
            {/* Module Item 2 */}
            <li className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-yellow-500">
              <span className="font-semibold text-yellow-500 mr-2">Module 2:</span>
              <span className="font-medium">React Hooks and Router</span>
            </li>
            {/* Module Item 3 */}
            <li className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-red-500">
              <span className="font-semibold text-red-500 mr-2">Module 3:</span>
              <span className="font-medium">Server Setup with Express.js</span>
            </li>
            {/* Module Item 4 */}
            <li className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
              <span className="font-semibold text-blue-500 mr-2">Module 4:</span>
              <span className="font-medium">Database Integration (SQL/NoSQL)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Instructor/CTA Section (Final Push) */}
      <section id="enroll" className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-xl shadow-2xl border-t-8 border-purple-500">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Ready to Launch Your Career?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Enroll now and get access to 100+ hours of video content, projects, and 1:1 mentor support.
          </p>
          <a
            href="/enroll"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full shadow-xl text-white bg-purple-600 hover:bg-purple-700 transform transition duration-300 hover:scale-[1.02]"
          >
            Enroll Securely for $499
          </a>
        </div>
      </section>
      
    </div>
  );
}

export default WebDevelopmentCourse;