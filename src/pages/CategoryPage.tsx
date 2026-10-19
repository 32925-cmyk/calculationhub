import React from 'react';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { CalculatorCategory, AdConfig } from '../types/calculator';
import { CATEGORIES } from '../data/categories';
import { CALCULATORS } from '../data/calculators';
import { AdBanner } from '../components/AdBanner';

interface CategoryPageProps {
  categoryId: CalculatorCategory;
  onNavigate: (view: string, param?: string) => void;
  adConfig: AdConfig;
  onOpenAdSettings: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryId,
  onNavigate,
  adConfig,
  onOpenAdSettings,
}) => {
  const category = CATEGORIES.find((c) => c.id === categoryId) || CATEGORIES[0];
  const calculators = CALCULATORS.filter((c) => c.category === category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back button */}
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      {/* Category Header */}
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 shadow-xl space-y-3">
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full inline-block">
          {category.name}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {category.name} Directory
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* AD LEADERBOARD */}
      <AdBanner
        placement="header"
        config={adConfig}
        onOpenSettings={onOpenAdSettings}
      />

      {/* CALCULATOR LIST */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            Available Calculators in this Suite ({calculators.length})
          </h2>
          <span className="text-xs text-slate-400 font-mono">Real-time compute</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {calculators.map((c) => (
            <div
              key={c.id}
              onClick={() => onNavigate('calculator', c.id)}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 transition-all cursor-pointer group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                    {c.focusKeyword}
                  </span>
                  {c.isFeatured && (
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {c.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-indigo-300">
                <span>Open Calculator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
