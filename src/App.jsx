import React from 'react';
import SiteHeader from './components/SiteHeader';
import SectionIntro from './components/SectionIntro';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <SiteHeader />
      <main>
        <SectionIntro />
        <HowItWorks />
      </main>
      <footer id="contact" className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Community Vetting</p>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
          >
            Explore the flow
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
