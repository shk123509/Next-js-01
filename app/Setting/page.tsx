"use client";

import React, { FC, useState } from 'react';
import Link from 'next/link';

// --- 1. TYPES & CONSTANTS ---

type SettingTab = 'Profile' | 'Security' | 'Billing' | 'Notifications';

// --- 2. HELPER COMPONENTS ---

// Component A: Sidebar Link (Reused for consistent navigation)
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


// Component B: Setting Section Wrapper
const SettingSection: FC<{ title: string; description: string; children: React.ReactNode }> = ({ title, description, children }) => (
    <div className="border-b dark:border-gray-700 pb-8 mb-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white dark:bg-gray-800 space-y-6 sm:p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
);


// --- 3. TAB CONTENT COMPONENTS (Setting Sections) ---

const ProfileSettings: FC = () => (
    <>
        <SettingSection 
            title="Personal Information" 
            description="Update your name, email address, and profile picture."
        >
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input type="text" defaultValue="Anya Sharma" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input type="email" defaultValue="anya.s@example.com" disabled className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-50 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-400" />
                    <p className="mt-1 text-xs text-indigo-600 dark:text-indigo-400">Cannot be changed directly. Contact support.</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Profile Picture</label>
                    <div className="mt-1 flex items-center space-x-4">
                        <img src="/placeholder-avatar.jpg" alt="Avatar" className="h-12 w-12 rounded-full object-cover" />
                        <button type="button" className="py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                            Change
                        </button>
                    </div>
                </div>
                <div className="pt-4 text-right">
                    <button type="submit" className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition">
                        Save Profile
                    </button>
                </div>
            </form>
        </SettingSection>
    </>
);

const SecuritySettings: FC = () => (
    <>
        <SettingSection 
            title="Password Management" 
            description="Ensure your account is using a long, random password."
        >
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Password</label>
                    <input type="password" placeholder="••••••••" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">New Password</label>
                    <input type="password" placeholder="••••••••" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div className="pt-4 text-right">
                    <button type="submit" className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition">
                        Change Password
                    </button>
                </div>
            </form>
        </SettingSection>

        <SettingSection 
            title="Two-Factor Authentication (2FA)" 
            description="Add an extra layer of security to your account."
        >
             <div className="flex justify-between items-center p-3 border rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <p className="text-sm font-medium text-gray-900 dark:text-white">2FA Status: <span className="text-red-500 font-semibold">Disabled</span></p>
                <button type="button" className="py-1.5 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition">
                    Enable
                </button>
            </div>
        </SettingSection>
    </>
);

const BillingSettings: FC = () => (
    <>
        <SettingSection 
            title="Current Plan" 
            description="You are currently on the Professional plan."
        >
            <div className="p-4 border rounded-lg dark:border-gray-700 bg-indigo-50 dark:bg-indigo-900/20">
                <p className="text-lg font-semibold text-indigo-800 dark:text-indigo-300">Professional Plan ($29/month)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Next billing date: 15 / Dec / 2025</p>
                <button className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Change Plan</button>
            </div>
        </SettingSection>

        <SettingSection 
            title="Payment Method" 
            description="Manage your credit cards and billing address."
        >
            <div className="p-4 border rounded-lg dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">Visa ending in 4242</p>
                <button className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Update Payment Info</button>
            </div>
        </SettingSection>
    </>
);

const NotificationsSettings: FC = () => (
    <>
        <SettingSection 
            title="Email Notifications" 
            description="Decide which alerts you want to receive via email."
        >
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <label htmlFor="email-updates" className="text-sm font-medium text-gray-700 dark:text-gray-300">Product Updates</label>
                    <input id="email-updates" type="checkbox" defaultChecked className="h-4 w-4 text-indigo-600 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div className="flex items-center justify-between">
                    <label htmlFor="email-security" className="text-sm font-medium text-gray-700 dark:text-gray-300">Security Alerts</label>
                    <input id="email-security" type="checkbox" defaultChecked className="h-4 w-4 text-indigo-600 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
                </div>
            </div>
        </SettingSection>

        <SettingSection 
            title="SMS Notifications" 
            description="Receive critical alerts on your mobile device."
        >
            <p className="text-sm text-gray-500 dark:text-gray-400">SMS notifications are currently disabled.</p>
            <button className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Connect Phone Number</button>
        </SettingSection>
    </>
);


// --- 4. MAIN PAGE COMPONENT ---

const SettingsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<SettingTab>('Profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <ProfileSettings />;
      case 'Security':
        return <SecuritySettings />;
      case 'Billing':
        return <BillingSettings />;
      case 'Notifications':
        return <NotificationsSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      
      {/* 1. Sidebar (Reused) */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-xl p-6 hidden lg:block">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
          <span className="mr-1">📊</span> My Dash
        </div>
        <nav className="space-y-2">
          <SidebarLink icon="🏠" text="Overview" href="/dashboard" />
          <SidebarLink icon="📈" text="Analytics" href="/dashboard/analytics" />
          <SidebarLink icon="👥" text="Users" href="/dashboard/users" />
          <SidebarLink icon="🛒" text="Orders" href="/dashboard/orders" />
          <SidebarLink icon="⚙️" text="Settings" href="/dashboard/settings" isActive />
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
        
        <header className="mb-8 border-b pb-4 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Account Settings
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Manage your profile, security, and subscription details.</p>
        </header>

        {/* Tab Navigation */}
        <div className="flex border-b dark:border-gray-700 mb-8 overflow-x-auto">
            {['Profile', 'Security', 'Billing', 'Notifications'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab as SettingTab)}
                    className={`py-2 px-4 text-sm font-medium transition duration-200 whitespace-nowrap
                        ${activeTab === tab 
                            ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400' 
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                        }`
                    }
                >
                    {tab}
                </button>
            ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
            {renderContent()}
            
            {/* Final Action / Danger Zone */}
            {activeTab === 'Profile' && (
                <div className="border border-red-300 dark:border-red-800 p-6 rounded-lg bg-red-50 dark:bg-red-900/20 mt-10">
                    <h3 className="text-lg font-bold text-red-800 dark:text-red-300">Danger Zone</h3>
                    <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                        Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <button className="mt-4 px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition">
                        Delete Account
                    </button>
                </div>
            )}
        </div>
      </main>
    </div>
  );
}

export default SettingsPage;