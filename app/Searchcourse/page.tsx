// "use client" - यदि आप कोई इंटरेक्टिविटी जोड़ते हैं
import React from 'react';

const SEOCourse = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      
      {/* 1. Hero Section (Results Focused) */}
      <header className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-green-400">
            Rank Higher. Get Traffic. Maximize Revenue.
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-500">
            The Complete SEO Mastery Roadmap
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto">
            Stop guessing and start dominating Google. Master technical SEO, content strategy, and link building to drive organic growth.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <a
              href="/ranking"
              className="px-8 py-4 text-lg font-bold rounded-xl shadow-2xl text-gray-900 bg-green-400 hover:bg-green-500 transform transition duration-300 hover:scale-105"
            >
              Start Ranking Now
            </a>
            <a
              href="/modules"
              className="px-8 py-4 text-lg font-medium rounded-xl border border-gray-500 text-gray-200 hover:bg-gray-800 transition duration-300"
            >
              Course Curriculum
            </a>
          </div>
        </div>
      </header>

      {/* 2. Trust and Statistics Section (Data-Driven) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            The Power of Organic Traffic
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Stat Card 1: Growth */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <p className="text-5xl font-extrabold text-green-500">340%</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Avg. Student Traffic Growth</p>
            </div>
            
            {/* Stat Card 2: Clicks */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <p className="text-5xl font-extrabold text-yellow-500">Top 3</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Google Ranking Focus</p>
            </div>
            
            {/* Stat Card 3: Domain Authority */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <p className="text-5xl font-extrabold text-blue-500">95%</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Success with Link Building</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars (3D Card Effect) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                The 3 Pillars of Modern SEO
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Pillar 1: Technical SEO */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl hover:shadow-green-500/50 transition duration-500 transform hover:scale-[1.03]">
                    <div className="text-5xl mb-4 text-green-500">⚙️</div>
                    <h3 className="text-2xl font-bold mb-3">Technical SEO</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Optimize site speed, fix crawl errors, master structured data, and implement perfect site architecture.
                    </p>
                </div>
                
                {/* Pillar 2: Content SEO */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl hover:shadow-yellow-500/50 transition duration-500 transform hover:scale-[1.03]">
                    <div className="text-5xl mb-4 text-yellow-500">📝</div>
                    <h3 className="text-2xl font-bold mb-3">Content Strategy</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        In-depth keyword research, intent matching, content clusters, and optimizing for Featured Snippets.
                    </p>
                </div>
                
                {/* Pillar 3: Off-Page SEO */}
                <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition duration-500 transform hover:scale-[1.03]">
                    <div className="text-5xl mb-4 text-blue-500">🔗</div>
                    <h3 className="text-2xl font-bold mb-3">Off-Page & Authority</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        Build high-quality backlinks, conduct outreach, and enhance your Domain Authority (DA) safely and effectively.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Detailed Modules (Action List) */}
      <section id="modules" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Curriculum Highlights</h2>
          
          <ul className="space-y-4">
            {['In-depth Keyword Mapping', 'Schema Markup Implementation', 'Core Web Vitals Optimization', 'Competitor Link Analysis', 'Google Search Console Deep Dive', 'E-A-T & Quality Rater Guidelines'].map((item, index) => (
                <li key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 border-l-4 border-green-500">
                    <span className="text-xl text-green-500">✅</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item}</span>
                </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Final CTA / Enrollment */}
      <section id="enroll" className="py-20 bg-gradient-to-r from-green-600 to-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-4">Stop Chasing Algorithms. Lead Them.</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the elite few who truly understand how search engines work. Enroll today and transform your business.
          </p>
          <a
            href="/full"
            className="inline-flex items-center justify-center px-12 py-4 text-xl font-bold rounded-full shadow-2xl text-green-600 bg-white hover:bg-gray-100 transform transition duration-300 hover:scale-105"
          >
            Access Full Course
          </a>
        </div>
      </section>
      
    </div>
  );
}

export default SEOCourse;