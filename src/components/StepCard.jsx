import React from 'react';
import { Rocket, Users, ShieldCheck, Trophy } from 'lucide-react';

const iconMap = {
  1: Rocket,
  2: Users,
  3: ShieldCheck,
  4: Trophy,
};

function StepCard({ step, title, description, points, imageUrl }) {
  const Icon = iconMap[step] || Rocket;
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="order-1 md:order-none">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500">Step {step}</p>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {points && points.length > 0 && (
          <ul className="mt-4 space-y-2">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <div>
                  <p className="font-medium text-gray-900">{pt.title}</p>
                  <p className="text-gray-600 text-sm">{pt.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-white">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop';
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default StepCard;
