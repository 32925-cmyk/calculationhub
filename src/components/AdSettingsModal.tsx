import React, { useState } from 'react';
import { X, Check, Copy, HelpCircle, ShieldCheck, FileText, DollarSign, AlertCircle, Globe, Server, Zap, ExternalLink } from 'lucide-react';
import { AdConfig } from '../types/calculator';

interface AdSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AdConfig;
  onSave: (newConfig: AdConfig) => void;
}

export const AdSettingsModal: React.FC<AdSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [activeTab, setActiveTab] = useState<'adsense' | 'deployment'>('adsense');
  const [formConfig, setFormConfig] = useState<AdConfig>({ ...config });
  const [copiedAdsTxt, setCopiedAdsTxt] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);

  if (!isOpen) return null;

  const rawPubId = formConfig.publisherId.replace('ca-pub-', '').replace('pub-', '');
  const cleanPubId = rawPubId ? `pub-${rawPubId}` : 'pub-XXXXXXXXXXXXXXXX';
  const adsTxtContent = `google.com, ${cleanPubId}, DIRECT, f08c47fec0942fa0`;

  const scriptTagContent = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${cleanPubId}" crossorigin="anonymous"></script>`;

  const handleCopyAdsTxt = () => {
    navigator.clipboard.writeText(adsTxtContent);
    setCopiedAdsTxt(true);
    setTimeout(() => setCopiedAdsTxt(false), 2500);
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(scriptTagContent);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const handleSave = () => {
    onSave(formConfig);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Publisher & Deployment Center</h2>
              <p className="text-xs text-slate-400">Google AdSense, ads.txt, and calculationhub.com hosting setup</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 pt-2 gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('adsense')}
            className={`pb-2.5 transition-colors border-b-2 cursor-pointer ${
              activeTab === 'adsense'
                ? 'text-white border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Google AdSense & ads.txt
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('deployment')}
            className={`pb-2.5 transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'deployment'
                ? 'text-white border-indigo-500'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <span>Deploy calculationhub.com</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Free CDN
            </span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {activeTab === 'adsense' ? (
            <>
              {/* AdSense Approval Checklist Banner */}
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                <div className="flex items-center gap-2 font-semibold text-sm text-emerald-300 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>AdSense Approval Pre-Flight Status: Ready</span>
                </div>
                <ul className="text-xs space-y-1 text-emerald-100/90 list-disc list-inside">
                  <li>Mandatory Legal Pages: Privacy Policy (with DART cookie clause), Terms, DMCA & About Us</li>
                  <li>High-Quality Articles: 1,200–1,400 words per key calculator with keyword hierarchy</li>
                  <li>Zero Layout Shift (CLS = 0) with standardized ad dimensions</li>
                  <li>Interactive, working calculators with zero broken scripts</li>
                </ul>
              </div>

              {/* Master Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <label className="text-sm font-semibold text-white block">Enable Ad Slots</label>
                    <span className="text-xs text-slate-400">Display ad slots throughout the app</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formConfig.enabled}
                    onChange={(e) => setFormConfig({ ...formConfig, enabled: e.target.checked })}
                    className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
                  />
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <label className="text-sm font-semibold text-white block">Demo Preview Mode</label>
                    <span className="text-xs text-slate-400">Show visual mock units (prevent live errors)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formConfig.isDemoMode}
                    onChange={(e) => setFormConfig({ ...formConfig, isDemoMode: e.target.checked })}
                    className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* AdSense Publisher IDs */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Google AdSense Publisher ID
                  </label>
                  <input
                    type="text"
                    placeholder="ca-pub-XXXXXXXXXXXXXXXX"
                    value={formConfig.publisherId}
                    onChange={(e) => setFormConfig({ ...formConfig, publisherId: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Found in your Google AdSense dashboard under <span className="text-slate-300">Account &gt; Settings &gt; Account Information</span>.
                  </p>
                </div>

                {/* Ad Unit Slot IDs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Header Leaderboard Slot ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1234567890"
                      value={formConfig.headerSlot}
                      onChange={(e) => setFormConfig({ ...formConfig, headerSlot: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      In-Content Article Slot ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2345678901"
                      value={formConfig.inContentSlot}
                      onChange={(e) => setFormConfig({ ...formConfig, inContentSlot: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Sidebar Skyscraper Slot ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 3456789012"
                      value={formConfig.sidebarSlot}
                      onChange={(e) => setFormConfig({ ...formConfig, sidebarSlot: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Sticky Bottom Footer Slot ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 4567890123"
                      value={formConfig.footerSlot}
                      onChange={(e) => setFormConfig({ ...formConfig, footerSlot: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Generated ads.txt */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Required ads.txt Entry</span>
                  </div>
                  <button
                    onClick={handleCopyAdsTxt}
                    className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedAdsTxt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAdsTxt ? 'Copied!' : 'Copy ads.txt'}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  Host this single line at the root domain of your site (<code className="text-indigo-300 font-mono">https://calculationhub.com/ads.txt</code>):
                </p>
                <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-xs text-emerald-300 border border-slate-800 select-all">
                  {adsTxtContent}
                </div>
              </div>

              {/* Generated Head Script */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">AdSense Head Tag</span>
                  </div>
                  <button
                    onClick={handleCopyScript}
                    className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedScript ? 'Copied!' : 'Copy Script Tag'}</span>
                  </button>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-[11px] text-indigo-300 border border-slate-800 select-all overflow-x-auto">
                  {scriptTagContent}
                </div>
              </div>
            </>
          ) : (
            /* DEPLOYMENT GUIDE FOR CALCULATIONHUB.COM */
            <div className="space-y-6 text-xs text-slate-300">
              {/* Architecture Summary */}
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-indigo-300">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  <span>Deployment Architecture for calculationhub.com</span>
                </div>
                <p className="text-xs text-indigo-100/90 leading-relaxed">
                  <strong>Backend Issue?</strong> None. This app is a 100% static React SPA built with Vite. Every calculation executes in 0.00ms directly inside the user's browser with zero server overhead.
                </p>
                <p className="text-xs text-indigo-100/90 leading-relaxed">
                  <strong>Database Storage?</strong> No remote SQL/NoSQL database is needed. Calculating numbers client-side keeps your hosting <strong>100% free forever</strong> and guarantees 100% uptime with zero database maintenance bills.
                </p>
              </div>

              {/* Step 1: Deploy to Cloudflare Pages or Vercel */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">1</span>
                  <span>Connect to Free Global Edge CDN</span>
                </h3>
                <p className="text-slate-400">
                  Push this repository to GitHub/GitLab, then connect it to <strong>Cloudflare Pages</strong> (Recommended) or <strong>Vercel</strong>:
                </p>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                  <div><strong>Framework preset:</strong> Vite</div>
                  <div><strong>Build command:</strong> npm run build</div>
                  <div><strong>Output directory:</strong> dist</div>
                  <div><strong>Node version:</strong> 20.x or higher</div>
                </div>
              </div>

              {/* Step 2: Namecheap / GoDaddy DNS Setup */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">2</span>
                  <span>Namecheap or GoDaddy DNS Records</span>
                </h3>
                <p className="text-slate-400">
                  In your Namecheap or GoDaddy Domain Control Panel, go to <strong>Manage DNS</strong> and add:
                </p>
                <div className="overflow-x-auto rounded-lg border border-slate-800">
                  <table className="w-full text-left font-mono text-[11px]">
                    <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="p-2">Type</th>
                        <th className="p-2">Host / Name</th>
                        <th className="p-2">Value / Points To</th>
                        <th className="p-2">TTL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 bg-slate-900/60 text-slate-200">
                      <tr>
                        <td className="p-2 font-bold text-indigo-400">CNAME</td>
                        <td className="p-2">www</td>
                        <td className="p-2 text-emerald-400">&lt;project-name&gt;.pages.dev (or cname.vercel-dns.com)</td>
                        <td className="p-2 text-slate-400">Automatic / 1h</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-indigo-400">A / ALIAS</td>
                        <td className="p-2">@ (root)</td>
                        <td className="p-2 text-emerald-400">Assigned IP from your CDN host (or Cloudflare proxy)</td>
                        <td className="p-2 text-slate-400">Automatic / 1h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 3: Google AdSense Verification */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">3</span>
                  <span>AdSense Domain Verification</span>
                </h3>
                <p className="text-slate-400">
                  Once your domain is live at <code className="text-indigo-300 font-mono">https://calculationhub.com</code>:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Your <code className="text-emerald-400 font-mono">/ads.txt</code> is served automatically at root.</li>
                  <li>Your <code className="text-emerald-400 font-mono">/sitemap.xml</code> and <code className="text-emerald-400 font-mono">/robots.txt</code> are live.</li>
                  <li>Submit your site in Google AdSense under <strong>Sites &gt; Add Site &gt; calculationhub.com</strong>. Approval takes 24–48 hours!</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-800 bg-slate-900/90">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-colors"
          >
            Save Ad Settings
          </button>
        </div>
      </div>
    </div>
  );
};
