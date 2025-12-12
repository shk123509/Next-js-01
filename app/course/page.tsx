"use client";

import React, { useEffect, useState } from 'react';

// यह कंपोनेंट Framer Motion/CSS एनिमेशन का अनुकरण करता है
const AnimatedCard = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // एनिमेशन को देर से शुरू करने के लिए setTimeout का उपयोग करें (Framer Motion 'delay' का अनुकरण)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`
        p-6 rounded-xl shadow-xl bg-white dark:bg-gray-800 border-t-4 border-pink-500/50 
        transition-all duration-1000 ease-out 
        ${isVisible 
          ? 'opacity-100 translate-y-0 scale-100' // End state
          : 'opacity-0 translate-y-10 scale-95'} // Start state (Hidden/Scaled down)
        hover:shadow-pink-500/50 hover:border-pink-500 
        transform hover:rotate-z-1
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const BrandingCourse = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      
      {/* 1. Hero Section (Animated Text + Button Pop) */}
      <header className="py-32 px-4 sm:px-6 lg:px-8 bg-black dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative Animated Shapes (Visual appeal) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-bounce-slow" style={{ animationDuration: '6s' }}></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-lg font-extrabold uppercase tracking-widest text-pink-400 animate-fade-in-up">
            Your Brand, Elevated
          </span>
          <h1 className="mt-4 text-6xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 animate-fade-in-up delay-200">
            Crafting Iconic Brands That Resonate
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up delay-400">
            Learn to define your narrative, visual identity, and emotional connection that turns customers into lifelong advocates.
          </p>
          <div className="mt-10 animate-pop-in delay-600">
            <a
              href="/dnaenroll"
              className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold rounded-full shadow-2xl text-white bg-pink-600 hover:bg-pink-700 transform transition duration-500 hover:scale-110 active:scale-95"
            >
              Unlock Your Brand DNA
            </a>
          </div>
        </div>
      </header>

      {/* 2. Key Pillars Section (Staggered Animation) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-white">
            The 4 Pillars of Magnetic Branding
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Using the custom AnimatedCard component */}
            <AnimatedCard delay={100}>
              <div className="text-4xl mb-3 text-pink-500">🧠</div>
              <h3 className="text-xl font-bold mb-2">Strategy & Purpose</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Define your core values, audience, and unique selling proposition.</p>
            </AnimatedCard>
            
            <AnimatedCard delay={300}>
              <div className="text-4xl mb-3 text-purple-500">👁️</div>
              <h3 className="text-xl font-bold mb-2">Visual Identity</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Master logo design, color palettes, and typography that communicates trust.</p>
            </AnimatedCard>
            
            <AnimatedCard delay={500}>
              <div className="text-4xl mb-3 text-indigo-500">🗣️</div>
              <h3 className="text-xl font-bold mb-2">Messaging & Voice</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Craft a compelling brand story and consistent verbal tone.</p>
            </AnimatedCard>
            
            <AnimatedCard delay={700}>
              <div className="text-4xl mb-3 text-blue-500">🤝</div>
              <h3 className="text-xl font-bold mb-2">Experience & Culture</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Align internal culture with external promises for true brand authenticity.</p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* 3. Transformation Timeline (Stepped Animation) */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            Your 5-Step Brand Transformation Journey
          </h2>
          
          {/* Timeline Wrapper (using a negative stagger for visual depth) */}
          <div className="flex flex-col space-y-6">
            {[
              { title: "Discovery & Audit", desc: "Deep dive into current brand perception and market standing.", color: "border-pink-500" },
              { title: "Positioning & Naming", desc: "Define target audience, unique position, and create a memorable name.", color: "border-purple-500" },
              { title: "Design & Guidelines", desc: "Develop the full visual identity suite and creation of comprehensive brand book.", color: "border-indigo-500" },
              { title: "Launch Strategy", desc: "Plan the internal and external roll-out to maximize impact.", color: "border-blue-500" },
              { title: "Growth & Governance", desc: "Establish metrics for brand health and ensure consistency across all touchpoints.", color: "border-green-500" },
            ].map((step, index) => (
              <div 
                key={index}
                className={`
                  p-5 rounded-lg shadow-lg dark:shadow-md dark:bg-gray-800/70 backdrop-blur-sm 
                  transform transition-all duration-700 ease-out
                  hover:scale-[1.02] hover:shadow-2xl 
                  ${step.color} border-l-8
                `}
                // Each step slides in from the side with increasing delay
                style={{ 
                  animation: `slideIn 0.8s ease-out forwards`,
                  animationDelay: `${1.2 + index * 0.2}s`,
                  opacity: 0, // Initial state before animation
                }}
              >
                <h4 className="font-extrabold text-xl text-gray-800 dark:text-white">{step.title}</h4>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section id="enroll" className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-white">
            Ready to Define Your Legacy?
          </h2>
          <p className="text-xl mb-8 opacity-80">
            Stop being a commodity. Start being recognized.
          </p>
          <a
            href="/Mastery"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-extrabold rounded-full shadow-2xl text-white bg-purple-600 hover:bg-purple-700 transform transition duration-500 hover:scale-[1.07]"
          >
            Enroll in Branding Mastery
          </a>
        </div>
      </section>

      {/* Tailwind CSS keyframes for custom animation classes */}
      <style jsx global>{`
        /* Hero Section Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-pop-in {
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .delay-600 { animation-delay: 0.6s; }

        /* Timeline Section Animation */
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-bounce-slow {
          animation: bounce 6s infinite;
        }
      `}</style>
    </div>
  );
}

export default BrandingCourse;