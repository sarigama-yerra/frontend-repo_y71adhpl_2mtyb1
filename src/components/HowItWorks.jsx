import React, { useState } from 'react';
import StepCard from './StepCard';
import { Rocket, Users, ShieldCheck, Trophy } from 'lucide-react';

const iconMap = {
  1: Rocket,
  2: Users,
  3: ShieldCheck,
  4: Trophy,
};

function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: 'Program Owners Set Up Goals',
      description:
        'Program owners set goals, objectives and timeline for grant programs, awards & prizes, and incubators/accelerators, then invite shortlisted applicants to join their campaign.',
      points: [
        { title: 'Grants Program', detail: 'Decide with verified community signals.' },
        { title: 'Awards & Prizes', detail: 'Show transparent, community-backed recognition.' },
        { title: 'Incubators & Accelerators', detail: 'Validate participant commitment & engagement.' },
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    },
    {
      step: 2,
      title: 'Shortlisted Applicants Engagement',
      description:
        'Shortlisted applicants create profiles, share proposals, and engage with your community through updates, Q&A, and milestones to demonstrate traction.',
      points: [
        { title: 'Transparent Profiles', detail: 'Clear goals, progress, and proof of work.' },
        { title: 'Active Updates', detail: 'Regular posts to keep supporters informed.' },
        { title: 'Milestone Evidence', detail: 'Attach demos, links, and testimonials.' },
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1529336953121-a9b1c0f3fcff?q=80&w=1200&auto=format&fit=crop',
    },
    {
      step: 3,
      title: 'Supporters Challenge',
      description:
        'Existing users, partners, and community members challenge claims, ask questions, and provide endorsements, creating constructive pressure that surfaces the strongest applicants.',
      points: [
        { title: 'Open Q&A', detail: 'Invite critique and clarify assumptions.' },
        { title: 'Verification', detail: 'Flag inconsistencies and validate outcomes.' },
        { title: 'Endorsements', detail: 'Reputation-weighted support signals.' },
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      step: 4,
      title: 'Leaderboard & Scoring',
      description:
        'Applicants are ranked with transparent scoring driven by engagement quality, verified contributions, and community resonance — helping you make confident, defensible decisions.',
      points: [
        { title: 'Live Leaderboard', detail: 'Real-time ranking across cohorts.' },
        { title: 'Weighted Signals', detail: 'Reputation, accuracy, and consistency matter.' },
        { title: 'Audit Trail', detail: 'Every action is recorded and reviewable.' },
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const ActiveIcon = iconMap[steps[activeIdx].step] || Rocket;

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Tabs */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="flex flex-wrap gap-2 sm:gap-3 py-4 border-b border-gray-200">
            {steps.map((s, idx) => {
              const Icon = iconMap[s.step] || Rocket;
              const isActive = idx === activeIdx;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    isActive
                      ? 'border-blue-600 bg-blue-600 text-white shadow'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  <span className="hidden sm:inline">{s.title}</span>
                  <span className="sm:hidden">Step {s.step}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active step content */}
        <div className="mt-8 grid gap-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <ActiveIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">Currently viewing</p>
              <h3 className="text-lg font-semibold text-gray-900">{steps[activeIdx].title}</h3>
            </div>
          </div>

          <StepCard key={steps[activeIdx].step} {...steps[activeIdx]} />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
