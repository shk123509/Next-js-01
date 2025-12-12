"use client";

import React, { FC, useRef, useState, useEffect } from 'react';

// --- 1. HELPER COMPONENTS ---

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  isIntersecting: boolean;
}

// Component A: Animated Counter (Numbers animate up when visible)
const AnimatedCounter: FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = '', isIntersecting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isIntersecting) return; // Only run when in view

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it stops exactly at 'end'
      }
    };

    setCount(0); // Reset for re-triggering if needed
    requestAnimationFrame(animate);
  }, [end, duration, isIntersecting]);

  const formattedCount = new Intl.NumberFormat('en-US').format(count);
  return (
    <span className="text-6xl font-extrabold text-indigo-400">
      {formattedCount}
      {suffix}
    </span>
  );
};


interface ScrollRevealSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Added for staggering
}

// Component B: Scroll Reveal Animation (Uses Intersection Observer)
const ScrollRevealSection: FC<ScrollRevealSectionProps> = ({ children, className = '', delay = 0 }) => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isIntersecting) {
                    // Introduce delay before setting intersecting true
                    setTimeout(() => {
                        setIsIntersecting(true);
                    }, delay);
                    // observer.unobserve(entry.target); // Keep observing if we want to reset the animation later
                }
            },
            { threshold: 0.15 } // 15% of the element is visible
        );

        observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [delay, isIntersecting]);

    return (
        <div 
            ref={ref} 
            className={`
                transition-all duration-1000 ease-out 
                ${className}
                ${isIntersecting 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'}
            `}
        >
            {children}
        </div>
    );
};


// --- 2. MAIN PAGE COMPONENT ---

const AboutUsPage: FC = () => {
  // State for the metrics section to trigger counter animation
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to control the AnimatedCounter
  useEffect(() => {
    if (!metricsRef.current) return;
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setMetricsVisible(true);
                // observer.unobserve(entry.target); // Optional: Stop observing once visible
            }
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(metricsRef.current);
    return () => {
        if (metricsRef.current) observer.unobserve(metricsRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      
      {/* 1. Hero/Vision Section (Gradient Text & Animated Highlight) */}
      <section className="relative py-32 md:py-48 bg-gray-50 dark:bg-gray-900 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollRevealSection delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
                We Build What Matters.
              </span>
              <br />
              Solving the <span className="relative inline-block">Complex,
                <span className="absolute left-0 bottom-1 h-3 w-full bg-yellow-300/50 dark:bg-yellow-500/30 transform origin-left animate-underline-appear"></span>
              </span> Simply.
            </h1>
          </ScrollRevealSection>
          <ScrollRevealSection delay={400}>
            <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              हमारा मिशन जटिल चुनौतियों को सुरुचिपूर्ण, उच्च-प्रदर्शन वाले डिजिटल प्लेटफार्मों में बदलना है।
            </p>
          </ScrollRevealSection>
        </div>
      </section>

      {/* 2. Impact Metrics (The Animated Counter Section) */}
      <section ref={metricsRef} className="py-20 bg-gray-900 dark:bg-black text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <ScrollRevealSection className="mb-12 text-center" delay={0}>
                <h2 className="text-3xl font-bold">Our Global Impact in Numbers</h2>
            </ScrollRevealSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Metric 1: Projects Launched */}
                <ScrollRevealSection className="text-center p-6 border-b-4 border-indigo-400" delay={100}>
                    <AnimatedCounter end={180} suffix="+" isIntersecting={metricsVisible} />
                    <p className="text-gray-400 mt-2">Projects Launched</p>
                </ScrollRevealSection>
                
                {/* Metric 2: Happy Clients */}
                <ScrollRevealSection className="text-center p-6 border-b-4 border-purple-400" delay={200}>
                    <AnimatedCounter end={45} suffix="k" isIntersecting={metricsVisible} />
                    <p className="text-gray-400 mt-2">Happy Clients</p>
                </ScrollRevealSection>
                
                {/* Metric 3: Total Users Impacted */}
                <ScrollRevealSection className="text-center p-6 border-b-4 border-pink-400" delay={300}>
                    <AnimatedCounter end={12} suffix="M+" isIntersecting={metricsVisible} />
                    <p className="text-gray-400 mt-2">Total Users Impacted</p>
                </ScrollRevealSection>
                
                {/* Metric 4: Years of Experience */}
                <ScrollRevealSection className="text-center p-6 border-b-4 border-yellow-400" delay={400}>
                    <AnimatedCounter end={8} suffix=" Years" isIntersecting={metricsVisible} />
                    <p className="text-gray-400 mt-2">Expertise in Market</p>
                </ScrollRevealSection>
            </div>
        </div>
      </section>

      {/* 3. Our Process Timeline (Step-by-Step Layout) */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollRevealSection delay={100}>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Our Proven Path to Success
            </h2>
          </ScrollRevealSection>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-indigo-200 dark:bg-indigo-700 md:left-1/2 md:transform md:-translate-x-1/2"></div>
            
            {[
              { step: 1, title: "Discovery & Planning", desc: "हम स्कोप और डिलिवरेबल्स पर सहमति बनाते हैं और सफलता के लक्ष्यों को परिभाषित करते हैं।", side: 'left' },
              { step: 2, title: "Design & Prototyping", desc: "उच्च-गुणवत्ता वाले, यूज़र-टेस्टेड प्रोटोटाइप बनाने के लिए Figma का उपयोग किया जाता है।", side: 'right' },
              { step: 3, title: "Development & QA", desc: "तेज स्प्रिंट, कड़े कोड रिव्यू, और स्वचालित टेस्टिंग प्रक्रिया अपनाई जाती है।", side: 'left' },
              { step: 4, title: "Launch & Optimization", desc: "प्रोडक्शन में डिप्लॉयमेंट, लॉन्च के बाद की निगरानी और निरंतर सुधार।", side: 'right' },
            ].map((item, index) => (
              <ScrollRevealSection key={index} delay={200 + index * 150} className={`mb-8 flex justify-start ${item.side === 'right' ? 'md:justify-end' : ''}`}>
                <div className="w-full md:w-1/2 relative">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-1.5 md:left-auto md:right-auto w-8 h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-950 text-white font-bold flex items-center justify-center ${item.side === 'right' ? 'md:-left-4' : 'md:left-auto md:-right-4'}`}>
                    {item.step}
                  </div>
                  
                  <div className={`p-6 rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 ml-10 md:ml-0 ${item.side === 'right' ? 'md:mr-10 md:ml-auto' : 'md:ml-auto md:mr-10'}`}>
                    <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{item.title}</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA & Case Study Snapshot */}
      <section className="py-20 bg-indigo-700 dark:bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScrollRevealSection delay={100}>
            <h2 className="text-4xl font-extrabold">
              Ready to Define Your Digital Future?
            </h2>
            <p className="mt-4 text-indigo-200 text-lg">
              हमारी नवीनतम केस स्टडी देखें और जानें कि हमने एक प्रमुख ग्राहक को कैसे सफलता दिलाई।
            </p>
            <a href="/Contact" className="mt-8 inline-flex items-center justify-center px-8 py-3 text-lg font-extrabold rounded-full shadow-2xl text-indigo-700 bg-yellow-300 hover:bg-yellow-400 transform transition duration-500 hover:scale-105">
              Contact Our Experts
            </a>
          </ScrollRevealSection>

          <ScrollRevealSection delay={300}>
            <div className="grid grid-cols-2 gap-8 bg-indigo-800/50 dark:bg-purple-800/50 p-6 rounded-xl">
                <div className="border-l-4 border-yellow-300 pl-4">
                    <p className="text-5xl font-extrabold text-yellow-300">65%</p>
                    <p className="mt-1 text-sm text-indigo-200">Load Time Reduced</p>
                </div>
                <div className="border-l-4 border-yellow-300 pl-4">
                    <p className="text-5xl font-extrabold text-yellow-300">3.2M+</p>
                    <p className="mt-1 text-sm text-indigo-200">New Monthly Users</p>
                </div>
                <div className="col-span-2 mt-4">
                    <a href="/case-studies" className="text-sm font-medium text-white underline hover:no-underline">
                        Read the Full Case Study &rarr;
                    </a>
                </div>
            </div>
          </ScrollRevealSection>

        </div>
      </section>
      
      {/* --- 5. GLOBAL CSS KEYFRAMES --- */}
      <style jsx global>{`
        /* Used for the animated underline in the Hero section */
        @keyframes underline-appear {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        .animate-underline-appear {
          animation: underline-appear 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default AboutUsPage;