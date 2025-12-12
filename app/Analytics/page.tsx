"use client";

import React, { FC } from 'react';
// Recharts for complex data visualization
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Link from 'next/link';
// Assuming you have Lucide or other icon libraries installed for better icons
// import { TrendingUp, Users, Clock, Globe } from 'lucide-react'; 

// **NOTE:** If you don't want to install recharts, replace the charts with static placeholders.

// --- 1. DATA & CONSTANTS ---

// Data for Time Series Chart (Primary Engagement)
const engagementData = [
  { name: 'W1', Sessions: 1200, Views: 1500 },
  { name: 'W2', Sessions: 1800, Views: 2200 },
  { name: 'W3', Sessions: 1500, Views: 1800 },
  { name: 'W4', Sessions: 2500, Views: 3100 },
  { name: 'W5', Sessions: 3200, Views: 4000 },
  { name: 'W6', Sessions: 2900, Views: 3500 },
];

// Data for Pie Chart (Device Distribution)
const deviceData = [
  { name: 'Desktop', value: 4500, color: '#4F46E5' },
  { name: 'Mobile', value: 3500, color: '#10B981' },
  { name: 'Tablet', value: 1000, color: '#F59E0B' },
];

// --- 2. HELPER COMPONENTS ---

interface KeyMetricCardProps {
  title: string;
  value: string;
  trend: string; // e.g., '+15%'
  description: string;
  icon: string; // Use an emoji or real icon component
  color: string;
}

// Component A: Enhanced Metric Card with Icon and Trend Line
const KeyMetricCard: FC<KeyMetricCardProps> = ({ title, value, trend, description, icon, color }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border-t-4" style={{ borderColor: color }}>
    <div className="flex items-start justify-between">
      <div className="rounded-full p-3 text-white" style={{ backgroundColor: color }}>
        <span className="text-xl">{icon}</span>
      </div>
      <span className={`text-sm font-semibold ${trend.startsWith('+') ? 'text-green-500 bg-green-100/30' : 'text-red-500 bg-red-100/30'} px-2 py-0.5 rounded-full`}>
        {trend}
      </span>
    </div>
    <p className="text-4xl font-extrabold mt-4 text-gray-900 dark:text-white">{value}</p>
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">{title}</p>
    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 truncate">{description}</p>
  </div>
);

// Component B: Sidebar Link (Reused from Dashboard)
interface SidebarLinkProps {
    icon: string; 
    text: string; 
    href: string;
    isActive?: boolean;
}

const SidebarLink: FC<SidebarLinkProps> = ({ icon, text, href, isActive }) => (
    <Link 
        href={href}
        className={`flex items-center p-3 rounded-lg transition duration-200 ${
            isActive 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
    >
        <span className="mr-3 text-xl">{icon}</span>
        <span className="font-medium">{text}</span>
    </Link>
);


// --- 3. MAIN PAGE COMPONENT ---

const AnalyticsPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      
      {/* 1. Sidebar (Reused) */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-xl p-6 hidden lg:block">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          <span className="mr-1">📊</span> My Dash
        </div>
        <nav className="space-y-2">
          {/* Ensure the Analytics link is active */}
          <SidebarLink icon="🏠" text="Overview" href="/dashboard" />
          <SidebarLink icon="📈" text="Analytics" href="/dashboard/analytics" isActive />
          <SidebarLink icon="👥" text="Users" href="/dashboard/users" />
          <SidebarLink icon="🛒" text="Orders" href="/dashboard/orders" />
          <SidebarLink icon="⚙️" text="Settings" href="/dashboard/settings" />
        </nav>
        
        <div className="mt-auto pt-6 border-t dark:border-gray-700 absolute bottom-0 left-0 w-full px-6 py-4">
            <div className="flex items-center p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
                <div className="w-10 h-10 bg-indigo-500 rounded-full mr-3 flex items-center justify-center text-white font-bold">A</div>
                <div>
                    <p className="text-sm font-semibold dark:text-white">Admin User</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">admin@app.com</p>
                </div>
            </div>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        
        {/* Header and Filtering */}
        <header className="mb-8 flex justify-between items-end border-b pb-4 dark:border-gray-700">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Website Analytics
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Deep dive into user engagement and traffic sources.</p>
          </div>
          
          <div className="flex space-x-3">
             <select className="p-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm">
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>This Year</option>
             </select>
             <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-md">
                Export Data
             </button>
          </div>
        </header>

        {/* Section A: Key Performance Indicators (KPIs) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <KeyMetricCard 
            title="Total Sessions" 
            value="15,400" 
            trend="+15.2%" 
            icon="📈" 
            color="#059669" // Emerald Green
            description="Total number of visits last period vs previous."
          />
          <KeyMetricCard 
            title="Avg. Time on Page" 
            value="3:45 min" 
            trend="+5.1%" 
            icon="⏱️" 
            color="#4F46E5" // Indigo
            description="Improved user retention metrics."
          />
          <KeyMetricCard 
            title="Conversion Rate" 
            value="4.8%" 
            trend="+0.3%" 
            icon="🎯" 
            color="#D97706" // Amber
            description="Achieved record conversion rate this quarter."
          />
          <KeyMetricCard 
            title="Bounce Rate" 
            value="28.9%" 
            trend="-2.1%" 
            icon="📉" 
            color="#EF4444" // Red
            description="Significant decrease, indicating better content fit."
          />
        </section>

        {/* Section B: Charts - Time Series and Distribution */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            
            {/* 2/3 Width Chart - Engagement Over Time */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Engagement: Sessions vs. Views</h3>
                <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={engagementData} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" className="dark:stroke-gray-700"/>
                            <XAxis dataKey="name" stroke="#6b7280" className="text-xs"/>
                            <YAxis stroke="#6b7280" className="text-xs"/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Sessions" stroke="#4F46E5" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="Views" stroke="#10B981" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* 1/3 Width Chart - Device Distribution (Pie Chart) */}
            <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Device Distribution</h3>
                <div className="h-96 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={deviceData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                labelLine={false}
                                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                            >
                                {deviceData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle"/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>

        {/* Section C: Geo Map & Top Referrers */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* 2/3 Width - Geo Map Placeholder */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">User Locations (Geo Map)</h3>
                <div className="h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                    {/* In a real app, this would be a library like react-simple-maps */}
                    <p className="text-gray-500 dark:text-gray-400 flex items-center">
                        <span className="text-2xl mr-2">🗺️</span>
                        Interactive Geo Map Placeholder (Library Required)
                    </p>
                    
                </div>
            </div>

            {/* 1/3 Width - Top Referral Sources */}
            <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Top Referral Sources</h3>
                <ul className="space-y-4">
                    {[
                        { source: 'google.com', value: 4520, percent: 55 },
                        { source: 't.co (Twitter)', value: 1200, percent: 15 },
                        { source: 'newsletter.io', value: 800, percent: 10 },
                        { source: 'direct', value: 700, percent: 8 },
                    ].map((ref, index) => (
                        <li key={index} className="pb-2 border-b dark:border-gray-700 last:border-b-0">
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{ref.source}</p>
                                <span className="text-md font-bold text-indigo-600 dark:text-indigo-400">{ref.value}</span>
                            </div>
                            {/* Progress bar for visual representation */}
                            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-1">
                                <div className="h-1.5 rounded-full bg-indigo-500" style={{ width: `${ref.percent}%` }}></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

      </main>
    </div>
  );
}

export default AnalyticsPage;