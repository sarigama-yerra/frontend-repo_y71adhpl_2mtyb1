import React from 'react';

function SiteHeader() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-500" />
          <span className="font-semibold text-gray-900">Community Vetting</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900" href="#how">How it works</a>
          <a className="hover:text-gray-900" href="#benefits">Benefits</a>
          <a className="hover:text-gray-900" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
