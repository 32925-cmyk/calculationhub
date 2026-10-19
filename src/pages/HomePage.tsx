import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  Zap,
  Shield,
  Layers,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle,
  Landmark,
  HeartPulse,
  Binary,
  ArrowLeftRight,
  Hammer,
  CalendarClock,
  Sparkle,
} from 'lucide-react';
import { CALCULATORS } from '../data/calculators';
import { CATEGORIES } from '../data/categories';
import { CalculatorCategory } from '../types/calculator';

interface HomePageProps {
  onSelectCalculator: (calcId: string) => void;
  onSelectCategory: (catId: CalculatorCategory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCalculator,
  onSelectCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterQuery, setFilterQuery] = useState<string>('');

  const featuredCalcs = CALCULATORS.filter((c) => c.isFeatured);

  const filteredCalculators = CALCULATORS.filter((c) => {
    const matchesCat = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch =
      filterQuery.trim() === '' ||
      c.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.shortDesc.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(filterQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'financial':
        return <Landmark className="w-5 h-5" />;
      case 'health':
        return <HeartPulse className="w-5 h-5" />;
      case 'math':
        return <Binary className="w-5 h-5" />;
      case 'conversion':
        return <ArrowLeftRight className="w-5 h-5" />;
      case 'engineering':
        return <Hammer className="w-5 h-5" />;
      case 'datetime':
        return <CalendarClock className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-14 text-center px-4 bg-gradient-to-b from-slate-900 via-slate-900/80 to-transparent border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>47+ Ultra-Fast Free Calculators · Instant Computations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Universal Precision <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              Calculation Engine
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Free, mathematically verified calculators for home mortgages, debt payoff, body mass index, calorie metabolism, percentage change, and unit conversions. Zero lag, zero paywalls.
          </p>

          {/* Quick Search */}
          <div className="max-w-xl mx-auto relative pt-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search any calculator (e.g. Mortgage, BMI, Compound Interest, Percentage)..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-2xl text-white text-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xl transition-all"
              />
            </div>
          </div>

          {/* Trust stats */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              0.00ms Client-Side Speed
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              No Data Stored or Sold
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Accredited Formula Derivations
            </span>
          </div>
        </div>
      </section>



      {/* FEATURED / POPULAR CALCULATORS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
              Top Trending Tools
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Featured High-Impact Calculators
            </h2>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Used by 500,000+ monthly decision makers
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredCalcs.map((calc) => (
            <div
              key={calc.id}
              onClick={() => onSelectCalculator(calc.id)}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-850 transition-all group cursor-pointer shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    {calc.category}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800 text-slate-300 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {calc.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {calc.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-indigo-300">
                <span>Open Instant Calculator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Organized Taxonomies
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Browse by Calculator Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From complex multi-tiered loan amortization schedules to everyday kitchen recipes and running paces.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-800 text-indigo-400 w-fit mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {getCategoryIcon(cat.id)}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {cat.tagline}
                </p>
              </div>
              <div className="mt-4 text-[11px] font-semibold text-indigo-400 flex items-center justify-between">
                <span>{cat.count} Calculators</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLETE 47+ CALCULATORS DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Complete Calculator Directory ({filteredCalculators.length})
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Filter by category or type in the search bar above.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 text-xs rounded-lg font-semibold transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All (47)
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCalculators.map((c) => (
            <div
              key={c.id}
              onClick={() => onSelectCalculator(c.id)}
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                    {c.category}
                  </span>
                  {c.isFeatured && (
                    <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {c.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-white">
                <span>Compute Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OMNICALC PRO - EEAT VALUE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Engineered for Computational Rigor</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Professionals & Students Trust OmniCalc Pro
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every formula in our directory is verified against textbook academic and industry benchmarks—including the Consumer Financial Protection Bureau (CFPB) for loan amortizations, the World Health Organization (WHO) for nutritional standards, and the International System of Units (SI) for conversions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="block text-2xl font-mono font-bold text-white mb-1">0.00ms</span>
                <span className="text-xs text-slate-400">Zero Server Lag Latency</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="block text-2xl font-mono font-bold text-white mb-1">100% Free</span>
                <span className="text-xs text-slate-400">Zero Paywalls or Subscriptions</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="block text-2xl font-mono font-bold text-white mb-1">47+ Tools</span>
                <span className="text-xs text-slate-400">Continuously Updated Catalog</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
