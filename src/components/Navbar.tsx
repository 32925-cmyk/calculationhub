import React, { useState, useRef, useEffect } from 'react';
import {
  Calculator,
  Search,
  Sparkles,
  DollarSign,
  Menu,
  X,
  ChevronDown,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { CalculatorDefinition } from '../types/calculator';
import { CALCULATORS } from '../data/calculators';
import { CATEGORIES } from '../data/categories';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  onOpenAdSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenAdSettings,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter calculators by query
  const searchResults = searchQuery.trim()
    ? CALCULATORS.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 8)
    : [];

  // Keyboard shortcut Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectCalculator = (calcId: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setMobileMenuOpen(false);
    onNavigate('calculator', calcId);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* LOGO */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-base md:text-lg text-white tracking-tight flex items-center gap-1">
                Calculation<span className="text-indigo-400">Hub</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20 ml-1">Pro</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium block -mt-0.5">
                calculationhub.com · 47+ Calculators
              </span>
            </div>
          </button>

          {/* DESKTOP SEARCH BAR TRIGGER */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <button
              onClick={() => {
                setIsSearchOpen(true);
                setTimeout(() => searchInputRef.current?.focus(), 50);
              }}
              className="w-full flex items-center justify-between px-3.5 py-2 bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-slate-300 border border-slate-700/80 rounded-xl text-xs transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-400" />
                <span>Search 47+ calculators (mortgage, bmi, loan, percent...)...</span>
              </div>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 bg-slate-900 border border-slate-700 rounded text-[10px] font-mono text-slate-400">
                ⌘K / Ctrl+K
              </kbd>
            </button>
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-slate-300">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                currentView === 'home' ? 'text-white bg-slate-800' : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('category', 'financial')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              Financial
            </button>
            <button
              onClick={() => onNavigate('category', 'health')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              Health
            </button>
            <button
              onClick={() => onNavigate('category', 'math')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              Math
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsSearchOpen(true);
                setTimeout(() => searchInputRef.current?.focus(), 50);
              }}
              className="md:hidden p-2 text-slate-400 hover:text-white bg-slate-800 border border-slate-700 rounded-xl cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAdSettings}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl transition-colors cursor-pointer"
              title="Configure Google AdSense"
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">AdSense Settings</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white bg-slate-800 border border-slate-700 rounded-xl cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-900/95 px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('home');
                }}
                className="p-2.5 rounded-lg bg-slate-800 text-left text-white"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('category', 'financial');
                }}
                className="p-2.5 rounded-lg bg-slate-800 text-left text-slate-300"
              >
                Financial & Loans
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('category', 'health');
                }}
                className="p-2.5 rounded-lg bg-slate-800 text-left text-slate-300"
              >
                Health & Fitness
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('category', 'math');
                }}
                className="p-2.5 rounded-lg bg-slate-800 text-left text-slate-300"
              >
                Math & Algebra
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('category', 'conversion');
                }}
                className="p-2.5 rounded-lg bg-slate-800 text-left text-slate-300"
              >
                Unit Conversions
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('category', 'engineering');
                }}
                className="p-2.5 rounded-lg bg-slate-800 text-left text-slate-300"
              >
                Engineering
              </button>
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2 text-xs text-slate-400">
              <button onClick={() => { setMobileMenuOpen(false); onNavigate('about'); }} className="hover:text-white">About Us</button>
              <span>·</span>
              <button onClick={() => { setMobileMenuOpen(false); onNavigate('contact'); }} className="hover:text-white">Contact Us</button>
              <span>·</span>
              <button onClick={() => { setMobileMenuOpen(false); onNavigate('privacy'); }} className="hover:text-white">Privacy Policy</button>
              <span>·</span>
              <button onClick={() => { setMobileMenuOpen(false); onNavigate('terms'); }} className="hover:text-white">Terms</button>
              <span>·</span>
              <button onClick={() => { setMobileMenuOpen(false); onNavigate('dmca'); }} className="hover:text-white">DMCA</button>
              <span>·</span>
              <button onClick={() => { setMobileMenuOpen(false); onNavigate('ads-txt'); }} className="hover:text-white">ads.txt</button>
            </div>
          </div>
        )}
      </header>

      {/* SEARCH MODAL POPUP */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Search Input Bar */}
            <div className="p-4 border-b border-slate-800 flex items-center gap-3">
              <Search className="w-5 h-5 text-indigo-400 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Type to search all 47+ calculators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-xs px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg border border-slate-700"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {searchQuery.trim() === '' ? (
                <div className="p-6 text-center text-xs text-slate-500">
                  <p className="font-semibold text-slate-400 mb-2">Popular Quick Searches:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['mortgage', 'bmi', 'compound interest', 'percentage', 'loan', 'calorie', 'length', 'age'].map(
                      (q) => (
                        <button
                          key={q}
                          onClick={() => setSearchQuery(q)}
                          className="px-2.5 py-1 bg-slate-800/70 hover:bg-slate-800 text-slate-300 rounded-lg text-xs border border-slate-700/60"
                        >
                          {q}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-400">
                  No calculators found matching "{searchQuery}".
                </div>
              ) : (
                <div className="space-y-1">
                  {searchResults.map((calc) => (
                    <button
                      key={calc.id}
                      onClick={() => handleSelectCalculator(calc.id)}
                      className="w-full p-3 rounded-xl hover:bg-slate-800/80 text-left flex items-center justify-between group transition-colors cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-white group-hover:text-indigo-400 transition-colors">
                            {calc.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium uppercase bg-slate-800 text-slate-400 border border-slate-700">
                            {calc.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                          {calc.shortDesc}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
