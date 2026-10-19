import React from 'react';
import { Calculator, ShieldCheck, Heart, Info, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { CALCULATORS } from '../data/calculators';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenAdSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAdSettings,
}) => {
  const featuredCalcs = CALCULATORS.filter((c) => c.isFeatured).slice(0, 8);

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Calculation<span className="text-indigo-400">Hub</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20 ml-1">Pro</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              The premier high-performance online calculation destination on calculationhub.com. Featuring over 45 instant calculation tools for finance, mortgage amortization, body health, engineering, and unit conversions.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-semibold text-slate-200 block">AdSense Compliance & Standards:</span>
              <p>
                Strictly adheres to Google Publisher Policies, California CCPA, European GDPR, and DoubleClick DART cookie disclosure protocols on calculationhub.com.
              </p>
            </div>
          </div>

          {/* Featured Calculators */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Top Calculators
            </h4>
            <ul className="space-y-2">
              {featuredCalcs.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onNavigate('calculator', c.id)}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Calculator Suites
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', cat.id)}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mandatory Legal Pages for AdSense Approval */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Trust & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Privacy Policy (GDPR / CCPA)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Terms & Conditions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dmca')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>DMCA Copyright Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>About Us & Editorial Standards</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Contact Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ads-txt')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left flex items-center gap-1 text-amber-400/90"
                >
                  <span>ads.txt Verification</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdSettings}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer text-left"
                >
                  Publisher Control Center
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 2026 CalculationHub Pro (calculationhub.com). All rights reserved. Mathematical tools and educational content.</p>
          <div className="flex items-center gap-4">
            <span>Powered by Client-Side Compute Engine</span>
            <span>·</span>
            <span>Zero Server Latency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
