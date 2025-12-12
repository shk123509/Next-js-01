"use client";

import React, { FC, useState } from 'react';
import Link from 'next/link';

// --- 1. TYPES & DUMMY DATA ---

type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

interface Order {
  id: string;
  customer: string;
  date: string;
  status: OrderStatus;
  total: number;
  payment: 'Paid' | 'Pending';
}

const DUMMY_ORDERS: Order[] = [
  { id: 'ORD001', customer: 'Rajat Singh', date: '2025-12-10', status: 'Delivered', total: 150.99, payment: 'Paid' },
  { id: 'ORD002', customer: 'Anya Sharma', date: '2025-12-10', status: 'Processing', total: 45.00, payment: 'Paid' },
  { id: 'ORD003', customer: 'Vikram Patel', date: '2025-12-09', status: 'Pending', total: 299.50, payment: 'Pending' },
  { id: 'ORD004', customer: 'Chloe Lee', date: '2025-12-08', status: 'Shipped', total: 80.75, payment: 'Paid' },
  { id: 'ORD005', customer: 'Elena Cruz', date: '2025-12-07', status: 'Cancelled', total: 12.00, payment: 'Paid' },
  { id: 'ORD006', customer: 'Mark Smith', date: '2025-12-06', status: 'Processing', total: 550.00, payment: 'Pending' },
  { id: 'ORD007', customer: 'Priya Verma', date: '2025-12-05', status: 'Delivered', total: 120.00, payment: 'Paid' },
];

// --- 2. HELPER COMPONENTS ---

interface StatCardProps {
    title: string;
    value: number;
    icon: string; 
    color: string;
}

// Component A: Order Summary Card
const OrderSummaryCard: FC<StatCardProps> = ({ title, value, icon, color }) => (
  <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg border-l-4" style={{ borderColor: color }}>
    <div className="flex justify-between items-center">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase">{title}</p>
      <span className="text-2xl" style={{ color: color }}>{icon}</span>
    </div>
    <p className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">{value}</p>
  </div>
);

// Component B: Sidebar Link (Reused for consistent navigation)
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

const OrdersPage: FC = () => {
  const [filterStatus, setFilterStatus] = useState<'All' | OrderStatus>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering Logic
  const filteredOrders = DUMMY_ORDERS.filter(order => {
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Calculate Metrics for Cards
  const pendingOrders = DUMMY_ORDERS.filter(o => o.status === 'Pending').length;
  const processingOrders = DUMMY_ORDERS.filter(o => o.status === 'Processing').length;
  const shippedOrders = DUMMY_ORDERS.filter(o => o.status === 'Shipped').length;

  // Helper to get status tag styling
  const getStatusStyle = (status: OrderStatus) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      case 'Shipped': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
      case 'Processing': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'Pending': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300';
      case 'Cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
    }
  };
  
  // Helper for Payment Status
  const getPaymentStyle = (payment: Order['payment']) => {
    return payment === 'Paid' 
        ? 'text-green-600 dark:text-green-400 font-semibold' 
        : 'text-red-600 dark:text-red-400 font-medium';
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
          <SidebarLink icon="🛒" text="Orders" href="/dashboard/orders" isActive />
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
              Order Management
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Track and manage all customer purchases and fulfillment status.</p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition shadow-md">
            + Create Manual Order
          </button>
        </header>

        {/* Section A: Order Summary Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <OrderSummaryCard 
            title="Total Orders" 
            value={DUMMY_ORDERS.length} 
            icon="📦" 
            color="#4F46E5" 
          />
          <OrderSummaryCard 
            title="Pending Fulfillment" 
            value={pendingOrders} 
            icon="🕒" 
            color="#D97706" 
          />
          <OrderSummaryCard 
            title="Processing" 
            value={processingOrders} 
            icon="⚙️" 
            color="#EF4444" 
          />
          <OrderSummaryCard 
            title="Shipped Today" 
            value={shippedOrders} 
            icon="🚚" 
            color="#10B981" 
          />
        </section>

        {/* Section B: Order List with Filters & Search */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Recent Orders</h3>
          
          {/* Filtering and Search Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-3 md:space-y-0">
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by Order ID or Customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-80 p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500"
            />
            
            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as 'All' | OrderStatus)}
              className="p-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          
          {/* Order Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total & Payment</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        <Link href={`/dashboard/orders/${order.id}`} className="hover:underline">
                          {order.id}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <p className="font-bold text-gray-900 dark:text-white">${order.total.toFixed(2)}</p>
                        <p className={`text-xs ${getPaymentStyle(order.payment)}`}>{order.payment}</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-2">View</button>
                        <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">...</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-gray-500 dark:text-gray-400">
                      No orders found matching the current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Placeholder */}
          <div className="mt-6 flex justify-center text-sm text-gray-600 dark:text-gray-400">
             <button className="mr-2 p-2 border rounded-l-lg hover:bg-gray-100 dark:hover:bg-gray-700">Previous</button>
             <span className="p-2">Page 1 of 2</span>
             <button className="ml-2 p-2 border rounded-r-lg hover:bg-gray-100 dark:hover:bg-gray-700">Next</button>
          </div>

        </section>

      </main>
    </div>
  );
}

export default OrdersPage;