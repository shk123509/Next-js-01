"use client";

import React, { FC } from 'react';
// 1. Next.js Link कंपोनेंट को आयात करें
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

// **NOTE:** Recharts is used here for demonstration. You would need to install it:
// npm install recharts

// --- 1. TYPES & DATA DUMMY ---

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

// Dummy data for the charts (unchanged)
const revenueData = [
  { name: 'Jan', Revenue: 4000, Profit: 2400 },
  { name: 'Feb', Revenue: 3000, Profit: 1398 },
  { name: 'Mar', Revenue: 2000, Profit: 9800 },
  { name: 'Apr', Revenue: 2780, Profit: 3908 },
  { name: 'May', Revenue: 1890, Profit: 4800 },
  { name: 'Jun', Revenue: 2390, Profit: 3800 },
];
const acquisitionData = [
    { name: 'Organic', Users: 400 },
    { name: 'Referral', Users: 300 },
    { name: 'Paid Ads', Users: 200 },
    { name: 'Social', Users: 278 },
];


// --- 2. HELPER COMPONENTS ---

// Component A: Stat Card (unchanged)
const StatCard: FC<StatCardProps> = ({ title, value, change, icon, color }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl border-l-4" style={{ borderColor: color }}>
    <div className="flex justify-between items-center">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">{title}</p>
      <span className="text-2xl" style={{ color: color }}>{icon}</span>
    </div>
    <div className="mt-1 flex justify-between items-end">
      <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
      <div className={`text-sm font-semibold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </div>
    </div>
  </div>
);

// Component B: Sidebar Link (Updated to use Next.js Link and accept 'href')
interface SidebarLinkProps {
    icon: string; 
    text: string; 
    href: string; // नया: रूट का पता (Path)
    isActive?: boolean;
}

const SidebarLink: FC<SidebarLinkProps> = ({ icon, text, href, isActive }) => (
    // 2. <a> की जगह <Link> का उपयोग करें
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

const DashboardPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      
      {/* 1. Fixed Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-xl p-6 hidden lg:block">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          <span className="mr-1">📊</span> My Dash
        </div>
        <nav className="space-y-2">
          {/* 3. यहां href एट्रिब्यूट जोड़ा गया है */}
          <SidebarLink icon="🏠" text="Overview" href="/dashboard" isActive />
          <SidebarLink icon="📈" text="Analytics" href="/Analytics" />
          <SidebarLink icon="👥" text="Users" href="/users" />
          <SidebarLink icon="🛒" text="Orders" href="/orders" />
          <SidebarLink icon="⚙️" text="Settings" href="/Setting" />
        </nav>
        
        {/* Profile Card at the bottom (unchanged) */}
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

      {/* 2. Main Content Area (unchanged for brevity, assuming you have the rest of the code) */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard Overview
          </h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition duration-200 shadow-md">
            + Add Report
          </button>
        </header>

        {/* Section A: Key Statistics Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard 
            title="Total Revenue" 
            value="$84,200" 
            change="+12.5% (Last Month)" 
            icon="💰" 
            color="#4F46E5" 
          />
          <StatCard 
            title="New Users" 
            value="3,450" 
            change="+4.8% (Last Week)" 
            icon="👥" 
            color="#10B981" 
          />
          <StatCard 
            title="Order Completion" 
            value="92.1%" 
            change="+1.1% (Last Quarter)" 
            icon="✅" 
            color="#F59E0B" 
          />
          <StatCard 
            title="Bounce Rate" 
            value="24.7%" 
            change="-0.9% (Last Day)" 
            icon="📉" 
            color="#EF4444" 
          />
        </section>

        {/* Section B: Charts & Data Visualization */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Monthly Performance</h3>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" className="dark:stroke-gray-700"/>
                            <XAxis dataKey="name" stroke="#6b7280" className="text-xs"/>
                            <YAxis stroke="#6b7280" className="text-xs"/>
                            <Tooltip 
                                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ccc', borderRadius: '8px' }}
                                labelStyle={{ fontWeight: 'bold' }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="Revenue" stroke="#4F46E5" strokeWidth={2} activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="Profit" stroke="#10B981" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">User Acquisition Channels</h3>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={acquisitionData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" className="dark:stroke-gray-700"/>
                            <XAxis type="number" stroke="#6b7280" className="text-xs"/>
                            <YAxis dataKey="name" type="category" stroke="#6b7280" className="text-xs"/>
                            <Tooltip 
                                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ccc', borderRadius: '8px' }}
                                labelStyle={{ fontWeight: 'bold' }}
                            />
                            <Bar dataKey="Users" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>

        {/* Section C: Recent Activity & Pending Tasks (unchanged) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Activity</h3>
                <ul className="space-y-4">
                    {[
                        { time: '5 mins ago', user: 'Jane Doe', action: 'completed an order', status: 'success' },
                        { time: '1 hour ago', user: 'System', action: 'performed a security update', status: 'info' },
                        { time: 'Yesterday', user: 'Mark Smith', action: 'initiated a refund', status: 'warning' },
                        { time: '2 days ago', user: 'New User', action: 'signed up for the premium plan', status: 'success' },
                    ].map((activity, index) => (
                        <li key={index} className="flex justify-between items-center pb-2 border-b dark:border-gray-700 last:border-b-0">
                            <div className="flex items-center">
                                <span className={`w-3 h-3 rounded-full mr-3 ${
                                    activity.status === 'success' ? 'bg-green-500' :
                                    activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                                }`}></span>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold dark:text-white">{activity.user}</span> {activity.action}.
                                </p>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Pending Tasks</h3>
                <ul className="space-y-3">
                    <li className="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 rounded-lg text-gray-800 dark:text-gray-200">
                        Review 5 outstanding support tickets.
                    </li>
                    <li className="p-3 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded-lg text-gray-800 dark:text-gray-200">
                        Approve new marketing campaign brief.
                    </li>
                    <li className="p-3 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded-lg text-gray-800 dark:text-gray-200">
                        Schedule next team meeting.
                    </li>
                </ul>
                <button className="mt-4 w-full text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm">
                    View All Tasks
                </button>
            </div>
        </section>

      </main>
    </div>
  );
}

export default DashboardPage;