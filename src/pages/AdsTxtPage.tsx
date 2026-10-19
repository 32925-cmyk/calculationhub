import React, { useState } from 'react';
import { FileText, Copy, Check, Download, ShieldCheck, HelpCircle } from 'lucide-react';
import { AdConfig } from '../types/calculator';

interface AdsTxtPageProps {
  initialPublisherId?: string;
}

export const AdsTxtPage: React.FC<AdsTxtPageProps> = ({ initialPublisherId = 'pub-1234567890123456' }) => {
  const [pubInput, setPubInput] = useState(initialPublisherId.replace('ca-pub-', '').replace('pub-', ''));
  const [copied, setCopied] = useState(false);

  const cleanPubId = pubInput.trim() ? `pub-${pubInput.trim()}` : 'pub-1234567890123456';
  const adsTxtString = `google.com, ${cleanPubId}, DIRECT, f08c47fec0942fa0`;

  const handleCopy = () => {
    navigator.clipboard.writeText(adsTxtString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([adsTxtString + '\n'], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ads.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-200">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
          <FileText className="w-4 h-4" />
          <span>Publisher Verification</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Authorized Digital Sellers (ads.txt)
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Google AdSense and IAB Tech Lab compliance record for domain publisher verification.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-white">Active ads.txt Record</h2>
              <p className="text-xs text-slate-400">
                This record verifies that Google AdSense is authorized to sell advertising inventory on this domain.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Record' : 'Copy Record'}</span>
              </button>
              <button
                onClick={handleDownload}
                className="px-3.5 py-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download ads.txt</span>
              </button>
            </div>
          </div>

          <div className="space-y-1.5 pt-2">
            <label className="text-xs font-semibold text-slate-300 block">
              Customize with your Publisher ID (numbers only or pub-XXXX):
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-2 rounded-lg border border-slate-800">
                pub-
              </span>
              <input
                type="text"
                value={pubInput}
                onChange={(e) => setPubInput(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="1234567890123456"
                className="flex-1 max-w-xs px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm text-emerald-300 select-all overflow-x-auto">
            {adsTxtString}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Why is ads.txt mandatory?</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Google AdSense requires hosting an <code className="text-indigo-300 font-mono">ads.txt</code> file in your root public directory to prevent domain spoofing and ad fraud. It ensures buyers that ad requests originate from authorized accounts.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <HelpCircle className="w-4 h-4" />
              <span>How to deploy on custom host</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Download the file and place it in the public root directory of your website so it is accessible at <code className="text-indigo-300 font-mono">https://yourdomain.com/ads.txt</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
