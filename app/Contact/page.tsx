"use client";

import React, { useState } from 'react';
// आप यहाँ Heroicons से एक आइकन इम्पोर्ट कर सकते हैं, जैसे:
// import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

interface FormData {
    name: string;
    email: string;
    message: string;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // फॉर्म सबमिशन लॉजिक यहाँ जोड़ें (जैसे API कॉल)
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // फॉर्म रीसेट करें
    setFormData({ name: '', email: '', message: '' });
};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-10">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Contact Information Section (Left/Top) */}
        <div className="lg:w-1/3 bg-gray-900 p-8 text-white flex flex-col justify-center space-y-8">
          <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
          <p className="text-gray-300">We're here to help you with your queries.</p>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              {/* <PhoneIcon className="w-6 h-6 text-indigo-400 mt-1" /> */}
              <span className="text-2xl text-indigo-400">📞</span>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              {/* <EnvelopeIcon className="w-6 h-6 text-indigo-400 mt-1" /> */}
              <span className="text-2xl text-indigo-400">📧</span>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm">support@yourcompany.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              {/* <MapPinIcon className="w-6 h-6 text-indigo-400 mt-1" /> */}
              <span className="text-2xl text-indigo-400">📍</span>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm">123, Tech Park, Silicon Valley, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section (Right/Bottom) */}
        <div className="lg:w-2/3 p-8 md:p-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we will reach out to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                placeholder="Your Full Name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-yellow-50">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-[1.01]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;