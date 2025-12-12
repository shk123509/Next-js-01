// "use client" - यदि आप इंटरेक्टिव कंपोनेंट्स का उपयोग करते हैं
import React from 'react';

const InterfaceDesignCourse = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      
      {/* 1. Hero Section (Visual & Impactful) */}
      <header className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-500">
            Design the Future of Interaction
          </span>
          <h1 className="mt-4 text-6xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Mastering Interface Design (UI/UX)
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Go beyond aesthetics. Learn the psychology, principles, and tools to create interfaces that are intuitive, beautiful, and highly effective.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a
              href="#enroll"
              className="px-8 py-4 text-lg font-bold rounded-xl shadow-2xl text-white bg-indigo-600 hover:bg-indigo-700 transform transition duration-300 hover:scale-105"
            >
              Enroll Now
            </a>
            <a
              href="#modules"
              className="px-8 py-4 text-lg font-medium rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
            >
              View Modules
            </a>
          </div>
        </div>
      </header>

      {/* 2. Core Principles Section (Icon Focused) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-white">
            From Concept to High-Fidelity Prototype
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Principle Card 1: Empathy */}
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-indigo-500/30 transition duration-500">
              <div className="text-6xl mb-4 text-indigo-500">💡</div>
              <h3 className="text-2xl font-bold mb-3">User Psychology</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Understand user needs, cognitive load, and design systems for maximum usability.
              </p>
            </div>
            
            {/* Principle Card 2: Visual Hierarchy */}
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-purple-500/30 transition duration-500">
              <div className="text-6xl mb-4 text-purple-500">📐</div>
              <h3 className="text-2xl font-bold mb-3">Visual Harmony</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Master color theory, typography, and layout techniques to establish clear visual hierarchy.
              </p>
            </div>
            
            {/* Principle Card 3: Interaction */}
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition duration-500">
              <div className="text-6xl mb-4 text-blue-500">✨</div>
              <h3 className="text-2xl font-bold mb-3">Micro-Interactions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Design engaging transitions, animations, and feedback loops that delight the user.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Modules (Accordion Style List) */}
      <section id="modules" className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Comprehensive Course Modules</h2>
          
          <ul className="space-y-4">
            {/* Module Item 1: UX Research */}
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:ring-2 hover:ring-indigo-500 transition duration-300">
              <h4 className="font-extrabold text-lg text-indigo-600 dark:text-indigo-400">Module 1: UX Strategy & Research</h4>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">User interviews, persona creation, competitive analysis, and information architecture.</p>
            </li>
            {/* Module Item 2: Wireframing */}
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:ring-2 hover:ring-purple-500 transition duration-300">
              <h4 className="font-extrabold text-lg text-purple-600 dark:text-purple-400">Module 2: Wireframing & Prototyping (Figma)</h4>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Low-fidelity sketches, high-fidelity mockups, and collaborative prototyping in Figma.</p>
            </li>
            {/* Module Item 3: Visual Design */}
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:ring-2 hover:ring-blue-500 transition duration-300">
              <h4 className="font-extrabold text-lg text-blue-600 dark:text-blue-400">Module 3: Advanced Visual Design</h4>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Design systems, accessibility standards (WCAG), and responsive design principles.</p>
            </li>
            {/* Module Item 4: Portfolio */}
            <li className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:ring-2 hover:ring-teal-500 transition duration-300">
              <h4 className="font-extrabold text-lg text-teal-600 dark:text-teal-400">Module 4: Portfolio & Job Readiness</h4>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Creating case studies, design challenges, and interview preparation.</p>
            </li>
          </ul>
        </div>
      </section>
      
      {/* 4. Instructor/Tools Section (Side-by-Side) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Instructor Block */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-2xl border-l-8 border-indigo-500">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Meet Your Lead Designer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Learn directly from a senior UX lead with 10+ years experience designing apps for Fortune 500 companies. Get personalized project feedback.
            </p>
            <p className="font-semibold text-indigo-600 dark:text-indigo-400">— Anya Sharma, Chief Experience Officer</p>
          </div>

          {/* Tools Block */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-2xl border-l-8 border-purple-500">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Tools You Will Master</h3>
            <div className="flex space-x-6 text-4xl mt-4">
              <span title="Figma" className="text-purple-600 hover:scale-110 transition duration-300">Figma</span> 
              <span title="Miro" className="text-blue-600 hover:scale-110 transition duration-300">Miro</span> 
              <span title="Adobe Creative Suite" className="text-red-600 hover:scale-110 transition duration-300">Ps/Ai</span>
            </div>
            <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">Focus on industry-standard tools for collaboration and prototyping.</p>
          </div>
        </div>
      </section>

      {/* 5. Final CTA / Enrollment */}
      <section id="enroll" className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-4">Stop Guessing, Start Designing.</h2>
          <p className="text-xl mb-8 opacity-90">
            Limited seats available. Secure your spot today to begin your design journey.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-12 py-4 text-xl font-bold rounded-full shadow-2xl text-purple-600 bg-white hover:bg-gray-100 transform transition duration-300 hover:scale-105"
          >
            Enroll Now and Get 20% Off!
          </a>
        </div>
      </section>
      
    </div>
  );
}

export default InterfaceDesignCourse;