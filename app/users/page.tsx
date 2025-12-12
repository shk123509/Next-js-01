"use client";

import React, { FC, useState } from 'react';
import Link from 'next/link';

// --- 1. TYPES & DUMMY DATA ---

interface User {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending';
  role: 'Admin' | 'Editor' | 'Viewer';
  lastActive: string;
  joinDate: string;
}

const DUMMY_USERS: User[] = [
  { id: 1, name: "Anya Sharma", email: "anya.s@example.com", status: "Active", role: "Admin", lastActive: "1 min ago", joinDate: "2023-01-15" },
  { id: 2, name: "Vikram Patel", email: "v.patel@example.com", status: "Inactive", role: "Viewer", lastActive: "3 days ago", joinDate: "2023-03-20" },
  { id: 3, name: "Chloe Lee", email: "c.lee@example.com", status: "Active", role: "Editor", lastActive: "1 hour ago", joinDate: "2024-05-10" },
  { id: 4, name: "Rajat Singh", email: "r.singh@example.com", status: "Pending", role: "Viewer", lastActive: "N/A", joinDate: "2024-07-01" },
  { id: 5, name: "Elena Cruz", email: "e.cruz@example.com", status: "Active", role: "Admin", lastActive: "5 mins ago", joinDate: "2022-11-25" },
];

// --- 2. HELPER COMPONENTS ---

interface StatCardProps {
    title: string;
    value: string;
    icon: string; 
    color: string;
}

// Component A: User Metrics Card
const UserMetricCard: FC<StatCardProps> = ({ title, value, icon, color }) => (
  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg border-l-4" style={{ borderColor: color }}>
    <div className="flex justify-between items-center">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">{title}</p>
      <span className="text-2xl" style={{ color: color }}>{icon}</span>
    </div>
    <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">{value}</p>
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

const UsersPage: FC = () => {
  const [filterRole, setFilterRole] = useState<'All' | User['role']>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering Logic
  const filteredUsers = DUMMY_USERS.filter(user => {
    const matchesRole = filterRole === 'All' || user.role === filterRole;
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  // Calculate Metrics
  const activeUsers = DUMMY_USERS.filter(u => u.status === 'Active').length;
  const adminUsers = DUMMY_USERS.filter(u => u.role === 'Admin').length;
  
  // Helper to get status tag styling
  const getStatusStyle = (status: User['status']) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'Inactive': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
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
          <SidebarLink icon="👥" text="Users" href="/dashboard/users" isActive />
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
        
        {/* Header and Call to Action */}
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              User Management
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Manage and audit all registered users and their roles.</p>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-md">
            + Add New User
          </button>
        </header>

        {/* Section A: Key User Metrics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <UserMetricCard 
            title="Total Users" 
            value={DUMMY_USERS.length.toString()} 
            icon="👥" 
            color="#4F46E5" 
          />
          <UserMetricCard 
            title="Active Now" 
            value={activeUsers.toString()} 
            icon="🟢" 
            color="#10B981" 
          />
          <UserMetricCard 
            title="Admins" 
            value={adminUsers.toString()} 
            icon="👑" 
            color="#D97706" 
          />
          <UserMetricCard 
            title="Pending Invitations" 
            value={DUMMY_USERS.filter(u => u.status === 'Pending').length.toString()} 
            icon="✉️" 
            color="#EF4444" 
          />
        </section>

        {/* Section B: User List with Filters & Search */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">User Directory</h3>
          
          {/* Filtering and Search Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-3 md:space-y-0">
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-80 p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500"
            />
            
            {/* Role Filter */}
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value as 'All' | User['role'])}
              className="p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          
          {/* User Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">Last Active</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {user.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                        {user.lastActive}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-4">Edit</button>
                        <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500 dark:text-gray-400">
                      No users found matching the current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-6 flex justify-center text-sm text-gray-600 dark:text-gray-400">
             <button className="mr-2 p-2 border rounded-l-lg hover:bg-gray-100 dark:hover:bg-gray-700">Previous</button>
             <span className="p-2">Page 1 of 5</span>
             <button className="ml-2 p-2 border rounded-r-lg hover:bg-gray-100 dark:hover:bg-gray-700">Next</button>
          </div>

        </section>

      </main>
    </div>
  );
}

export default UsersPage;