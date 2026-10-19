import React, { useState } from 'react';
import {
  Sparkles,
  Code,
  Check,
  Copy,
  Download,
  ShieldCheck,
  FileText,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  Zap,
} from 'lucide-react';

export const AdSenseGuidePage: React.FC = () => {
  const [pubId, setPubId] = useState<string>('ca-pub-1234567890123456');
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedAdsTxt, setCopiedAdsTxt] = useState(false);

  // Normalize publisher ID
  const cleanPubId = pubId.trim().startsWith('ca-pub-')
    ? pubId.trim()
    : pubId.trim().startsWith('pub-')
    ? `ca-${pubId.trim()}`
    : `ca-pub-${pubId.trim() || '1234567890123456'}`;

  const rawPubIdNum = cleanPubId.replace('ca-pub-', '');

  const adsenseScriptTag = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${cleanPubId}" crossorigin="anonymous"></script>`;

  const adsTxtRow = `google.com, pub-${rawPubIdNum || '1234567890123456'}, DIRECT, f08c47fec0942fa0`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(adsenseScriptTag);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const handleCopyAdsTxt = () => {
    navigator.clipboard.writeText(adsTxtRow);
    setCopiedAdsTxt(true);
    setTimeout(() => setCopiedAdsTxt(false), 2000);
  };

  const handleDownloadAdsTxt = () => {
    const blob = new Blob([adsTxtRow + '\n'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ads.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-200">
      {/* HEADER */}
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
          <Zap className="w-4 h-4" />
          <span>Webmaster & Monetization Guide</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Google AdSense & Auto Ads Setup
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          How to connect your AdSense account to CalculationHub.com without adding manual ad containers.
        </p>
      </div>

      <div className="space-y-8">
        {/* HOW AUTO ADS WORKS EXPLANATION */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-800/40 space-y-4">
          <div className="flex items-center gap-2.5 text-indigo-400 font-bold text-base">
            <Sparkles className="w-5 h-5" />
            <span>Why You Don't Need Manual Ad Containers (Auto Ads)</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Google AdSense features <strong>Auto Ads</strong> driven by machine learning. Once you paste your AdSense script into the <code className="text-indigo-300 font-mono bg-slate-800 px-1.5 py-0.5 rounded">&lt;head&gt;</code> of <code className="text-indigo-300 font-mono bg-slate-800 px-1.5 py-0.5 rounded">index.html</code>, Google automatically scans your page layout and dynamically creates optimal ad placements for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-1">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="font-semibold text-white block mb-1">1. In-Page & Banner Ads</span>
              <span>Automatically placed between articles, calculator cards, and headers without shifting layout.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="font-semibold text-white block mb-1">2. Anchor Ads (Mobile / Desktop)</span>
              <span>Sticky ads docked cleanly at the top or bottom of the screen with a dismiss button.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="font-semibold text-white block mb-1">3. Vignette Interstitial Ads</span>
              <span>Full-screen high-CPM ads that display naturally during smooth page switches.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="font-semibold text-white block mb-1">4. Side Rail Ads</span>
              <span>Vertical ads anchored to the empty left/right margins on wide desktop monitors.</span>
            </div>
          </div>
        </div>

        {/* STEP 1: PUBLISHER ID INPUT & SCRIPT CODE */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">1</span>
              <span>Your AdSense Script Tag (index.html)</span>
            </h2>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 block">
              Enter Your Google AdSense Publisher ID:
            </label>
            <input
              type="text"
              value={pubId}
              onChange={(e) => setPubId(e.target.value)}
              placeholder="ca-pub-1234567890123456"
              className="w-full max-w-md px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
            />
            <p className="text-[11px] text-slate-400">
              Found on your Google AdSense Dashboard under <em>Account &gt; Settings &gt; Account Information</em>.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Add this line to <code className="text-indigo-300 font-mono">index.html</code> inside <code className="text-indigo-300 font-mono">&lt;head&gt;</code>:</span>
              <button
                onClick={handleCopyScript}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer text-xs font-medium"
              >
                {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedScript ? 'Copied Tag' : 'Copy Script Tag'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto select-all">
              {adsenseScriptTag}
            </pre>
          </div>
        </div>

        {/* STEP 2: ADS.TXT */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">2</span>
              <span>Update Root ads.txt File</span>
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyAdsTxt}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedAdsTxt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAdsTxt ? 'Copied' : 'Copy Record'}</span>
              </button>
              <button
                onClick={handleDownloadAdsTxt}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download ads.txt</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Ensure this exact line exists in <code className="text-indigo-300 font-mono">public/ads.txt</code> so Googlebot can verify your domain at <code className="text-indigo-300 font-mono">https://calculationhub.com/ads.txt</code>:
          </p>

          <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-xs select-all overflow-x-auto">
            {adsTxtRow}
          </pre>
        </div>

        {/* STEP 3: APPROVAL CHECKLIST */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>AdSense Approval Readiness Checklist</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">GDPR / CCPA Cookie Banner</span>
                <span className="text-slate-400 text-[11px]">Active on every page with explicit AdSense & DoubleClick opt-out capability.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">47+ Real Functional Tools</span>
                <span className="text-slate-400 text-[11px]">Instant client-side calculation with zero broken scripts or placeholders.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">1,200–1,400 Word Guides</span>
                <span className="text-slate-400 text-[11px]">Original educational content with H1-H3 hierarchy and worked calculations.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Complete Trust & Legal Pages</span>
                <span className="text-slate-400 text-[11px]">Privacy Policy, Terms of Service, DMCA, About Us, and Contact Us forms.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
