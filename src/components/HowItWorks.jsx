import React from 'react';
import StepCard from './StepCard';

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

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-10">
          {steps.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
