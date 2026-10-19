import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X, Sliders, ChevronDown, ChevronUp, ExternalLink, Lock } from 'lucide-react';

export interface CookiePreferences {
  necessary: boolean;
  advertising: boolean;
  analytics: boolean;
}

const STORAGE_KEY = 'calculationhub_cookie_consent';

export const CookieConsentBanner: React.FC<{
  onOpenCookiePolicy?: () => void;
  externalOpenSettings?: boolean;
  onCloseSettings?: () => void;
}> = ({ onOpenCookiePolicy, externalOpenSettings, onCloseSettings }) => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    advertising: true,
    analytics: true,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Show after a brief delay for smooth appearance
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(saved);
        if (parsed.preferences) {
          setPreferences(parsed.preferences);
        }
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    if (externalOpenSettings) {
      setShowModal(true);
    }
  }, [externalOpenSettings]);

  const saveConsent = (status: 'accepted' | 'rejected' | 'custom', prefs: CookiePreferences) => {
    const data = {
      status,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      // Dispatch custom event so any listeners (like AdSense scripts or Google Tag Manager) can adapt
      window.dispatchEvent(new CustomEvent('cookie_consent_updated', { detail: data }));
    } catch (e) {
      console.warn('Could not save cookie consent:', e);
    }
    setShowBanner(false);
    setShowModal(false);
    if (onCloseSettings) onCloseSettings();
  };

  const handleAcceptAll = () => {
    const all = { necessary: true, advertising: true, analytics: true };
    setPreferences(all);
    saveConsent('accepted', all);
  };

  const handleRejectNonEssential = () => {
    const minimal = { necessary: true, advertising: false, analytics: false };
    setPreferences(minimal);
    saveConsent('rejected', minimal);
  };

  const handleSaveCustom = () => {
    saveConsent('custom', preferences);
  };

  return (
    <>
      {/* FLOATING BOTTOM BANNER */}
      {showBanner && !showModal && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="p-5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl shadow-black/60 text-slate-200">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Cookie & Privacy Consent</span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    GDPR / CCPA
                  </span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We use cookies and similar technologies to enhance your calculator experience, preserve input state, analyze web traffic, and support Google AdSense advertising. You can choose which cookies to permit.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-3 text-xs">
                {onOpenCookiePolicy && (
                  <button
                    onClick={onOpenCookiePolicy}
                    className="text-indigo-400 hover:text-indigo-300 underline font-medium cursor-pointer"
                  >
                    Cookie Policy
                  </button>
                )}
                <button
                  onClick={() => setShowModal(true)}
                  className="text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Preferences</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRejectNonEssential}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                >
                  Essential Only
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* DETAILED PREFERENCES MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 text-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Cookie Consent Preferences</h3>
                  <p className="text-xs text-slate-400">Manage how cookies and tracking identifiers are used</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowModal(false);
                  if (onCloseSettings) onCloseSettings();
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Category 1: Strictly Necessary */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Strictly Necessary Cookies</span>
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Always Active
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Required for basic site functionality, calculation memory in your browser, security, and storing your cookie preferences. These cannot be disabled.
                </p>
              </div>

              {/* Category 2: Advertising & AdSense */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Advertising & Google AdSense</span>
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.advertising}
                      onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Google AdSense and authorized ad vendors use DoubleClick DART cookies to serve contextual or personalized advertisements based on your visits to this and other websites. If turned off, ads will still display but will be non-personalized.
                </p>
              </div>

              {/* Category 3: Analytics & Performance */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Cookie className="w-3.5 h-3.5 text-purple-400" />
                    <span>Analytics & Performance</span>
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Helps us understand how visitors interact with our calculators to optimize computation speed, eliminate glitches, and prioritize new features.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={handleRejectNonEssential}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveCustom}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-white transition-colors cursor-pointer"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
