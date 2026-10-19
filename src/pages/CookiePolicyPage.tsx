import React from 'react';
import { Cookie, ShieldCheck, Lock, ExternalLink, Sliders, CheckCircle2, AlertCircle } from 'lucide-react';

export const CookiePolicyPage: React.FC<{ onOpenPreferences?: () => void }> = ({ onOpenPreferences }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-200">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <Cookie className="w-4 h-4" />
          <span>Transparency & Privacy Compliance</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Cookie Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last Updated: October 2026 · Compliant with GDPR, ePrivacy Directive, CCPA, and Google AdSense Publisher Requirements
        </p>
      </div>

      <div className="space-y-8 text-sm md:text-base leading-relaxed text-slate-300">
        {/* Quick Consent Control Callout */}
        {onOpenPreferences && (
          <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-white text-base">Your Active Cookie Choices</h2>
              <p className="text-xs text-slate-300 mt-1">
                You can review or change your cookie preferences for CalculationHub.com at any time.
              </p>
            </div>
            <button
              onClick={onOpenPreferences}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 w-fit transition-colors cursor-pointer shadow-lg shadow-indigo-600/20"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Change Cookie Preferences</span>
            </button>
          </div>
        )}

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-400" />
            <span>1. What Are Cookies?</span>
          </h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work more efficiently, provide customized computational experiences, and supply analytical data to website owners.
          </p>
          <p>
            At CalculationHub Pro (calculationhub.com), we use cookies and local browser storage to retain calculation inputs, remember unit preferences (metric vs imperial), and support advertising partners like Google AdSense.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <span>2. Categories of Cookies We Use</span>
          </h2>
          
          <div className="space-y-4 pt-2">
            {/* Essential */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-base">A. Strictly Necessary & Functional Cookies</span>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Essential</span>
              </div>
              <p className="text-xs text-slate-400">
                These cookies and browser local storage entries are essential for enabling basic features such as memory retention in calculators, remembering formula preferences, securing your session, and storing your consent preferences. They do not track your personal browsing habits on third-party sites.
              </p>
            </div>

            {/* Google AdSense / DART */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-base">B. Google AdSense & Advertising Cookies (DoubleClick DART)</span>
                <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">Advertising</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Google, as a third-party vendor, uses cookies to serve ads on CalculationHub Pro. Google’s use of the DoubleClick DART cookie enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Users may opt out of personalized advertising by visiting the Google Ad Settings portal. If you decline advertising cookies in our consent banner, Google will be instructed to serve non-personalized ads (which do not use cookies for ad personalization, though cookies may still be used for frequency capping, aggregated reporting, and combatting fraud).
              </p>
            </div>

            {/* Analytics */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-base">C. Performance & Web Analytics Cookies</span>
                <span className="text-[11px] font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">Analytical</span>
              </div>
              <p className="text-xs text-slate-400">
                These cookies collect aggregated, anonymous information about how visitors navigate and utilize our calculation tools. They assist us in diagnosing slow load times, identifying broken links, and enhancing formula algorithms.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-indigo-400" />
            <span>3. How to Opt Out of Third-Party Ad Cookies</span>
          </h2>
          <p>
            You have the right to opt out of interest-based advertising from Google and other participating advertising networks via the following independent platforms:
          </p>
          <ul className="space-y-2 text-xs text-slate-300 pl-4 list-disc">
            <li>
              <strong>Google Ad Settings:</strong>{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
              >
                https://adssettings.google.com
              </a>
            </li>
            <li>
              <strong>Digital Advertising Alliance (DAA):</strong>{' '}
              <a
                href="https://optout.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
              >
                https://optout.aboutads.info
              </a>
            </li>
            <li>
              <strong>Network Advertising Initiative (NAI):</strong>{' '}
              <a
                href="https://optout.networkadvertising.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
              >
                https://optout.networkadvertising.org
              </a>
            </li>
            <li>
              <strong>European Interactive Digital Advertising Alliance (EDAA):</strong>{' '}
              <a
                href="https://www.youronlinechoices.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline hover:text-indigo-300"
              >
                https://www.youronlinechoices.eu
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-400" />
            <span>4. Managing Cookies in Your Browser</span>
          </h2>
          <p>
            Most modern web browsers allow you to control cookies through their settings preferences. You can configure your browser to notify you when you receive a cookie, giving you the chance to decide whether to accept it, or you can block all cookies outright.
          </p>
          <p className="text-xs text-slate-400">
            Please note that blocking essential cookies may affect calculator performance, preventing past calculation values from saving between page refreshes.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-base font-bold text-white">5. Contact Our Privacy Officer</h2>
          <p className="text-xs text-slate-400">
            For questions or concerns regarding this Cookie Policy or our data handling practices on calculationhub.com, please contact us at: <code className="text-indigo-300 font-mono">privacy@calculationhub.com</code>.
          </p>
        </section>
      </div>
    </div>
  );
};
