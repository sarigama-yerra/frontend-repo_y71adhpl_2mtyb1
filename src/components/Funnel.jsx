import React from 'react';
import { Rocket, Users, ShieldCheck, Trophy, ChevronRight } from 'lucide-react';

const iconMap = {
  1: Rocket,
  2: Users,
  3: ShieldCheck,
  4: Trophy,
};

function Funnel({ steps, activeIdx, onChange }) {
  const max = steps.length - 1;
  return (
    <div className="w-full">
      <div className="space-y-3">
        {steps.map((s, idx) => {
          const Icon = iconMap[s.step] || Rocket;
          const widthPct = 100 - (idx / Math.max(1, max)) * 30; // taper ~30%
          const isActive = idx === activeIdx;
          return (
            <div key={s.step} className="flex justify-center">
              <button
                type="button"
                onClick={() => onChange(idx)}
                aria-current={isActive ? 'step' : undefined}
                className={`relative flex items-center justify-between gap-3 rounded-xl border px-4 py-3 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50
                  ${isActive ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-200 bg-white text-gray-800 hover:bg-gray-50'}
                `}
                style={{ width: `${widthPct}%` }}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold shadow ${isActive ? 'bg-white/15 text-white border border-white/30' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>{s.step}</span>
                  <div className="text-left">
                    <p className="text-sm font-semibold leading-tight line-clamp-1">{s.title}</p>
                    <p className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'} line-clamp-1`}>{s.points?.[0]?.title || ''}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  <ChevronRight className={`h-4 w-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                </div>
                {isActive && (
                  <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-white/20" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>Top of funnel</span>
        <span>
          Step {steps[activeIdx]?.step} of {steps.length}
        </span>
        <span>Conversion</span>
      </div>
    </div>
  );
}

export default Funnel;
