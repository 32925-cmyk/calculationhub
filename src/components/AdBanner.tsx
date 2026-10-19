import React, { useState } from 'react';
import { Sparkles, Info, X, ExternalLink } from 'lucide-react';
import { AdConfig } from '../types/calculator';

interface AdBannerProps {
  placement: 'header' | 'in-content' | 'sidebar' | 'footer';
  config: AdConfig;
  onOpenSettings?: () => void;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  placement,
  config,
  onOpenSettings,
}) => {
  const [closed, setClosed] = useState(false);

  if (!config.enabled || closed) return null;

  const isDemo = config.isDemoMode;

  // Placement-specific styles and dimensions
  const placementConfig = {
    header: {
      containerClass: 'w-full max-w-5xl mx-auto my-4 px-2',
      innerClass: 'min-h-[90px] h-[90px] md:h-[100px] w-full',
      label: 'Leaderboard (728x90 / 320x100 Responsive)',
      slotId: config.headerSlot || '1234567890',
    },
    'in-content': {
      containerClass: 'w-full my-6',
      innerClass: 'min-h-[250px] h-[250px] md:h-[280px] w-full max-w-[728px] mx-auto',
      label: 'In-Article Responsive Ad (336x280 / 728x90)',
      slotId: config.inContentSlot || '2345678901',
    },
    sidebar: {
      containerClass: 'w-full my-4',
      innerClass: 'min-h-[250px] h-[300px] md:h-[600px] w-full max-w-[300px] mx-auto',
      label: 'Sidebar Sticky Skyscraper (300x250 / 300x600)',
      slotId: config.sidebarSlot || '3456789012',
    },
    footer: {
      containerClass: 'fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-700/60 shadow-2xl py-2 px-3',
      innerClass: 'min-h-[60px] md:min-h-[90px] max-w-4xl mx-auto relative flex items-center justify-center',
      label: 'Sticky Anchor Ad (728x90 / 320x50)',
      slotId: config.footerSlot || '4567890123',
    },
  }[placement];

  return (
    <div className={placementConfig.containerClass}>
      {placement === 'footer' && (
        <button
          onClick={() => setClosed(true)}
          className="absolute -top-3 right-4 bg-slate-800 text-slate-300 hover:text-white border border-slate-600 rounded-full p-1 shadow-lg text-xs flex items-center gap-1 z-50 transition-colors"
          title="Dismiss ad"
        >
          <X className="w-3.5 h-3.5" />
          <span className="text-[10px] pr-1">Close Ad</span>
        </button>
      )}

      <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 mb-1 px-1">
        <span className="uppercase tracking-wider flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
          Advertisement
        </span>
        <div className="flex items-center gap-2">
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="text-xs text-indigo-400 hover:text-indigo-300 underline font-normal transition-colors"
            >
              Ad Settings
            </button>
          )}
          <span className="flex items-center gap-0.5 text-slate-400 hover:text-slate-300 cursor-pointer">
            <Info className="w-3 h-3" />
            <span>AdChoices</span>
          </span>
        </div>
      </div>

      <div
        className={`${placementConfig.innerClass} relative overflow-hidden rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center text-center p-3 transition-all`}
      >
        {isDemo ? (
          <div className="flex flex-col items-center justify-center gap-2 max-w-md mx-auto text-slate-300">
            <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              <span>Google AdSense Slot Ready</span>
            </div>
            <p className="text-xs font-medium text-slate-200">
              {placementConfig.label}
            </p>
            <p className="text-[11px] text-slate-400">
              Configured for <code className="font-mono text-indigo-300 bg-slate-800/80 px-1 py-0.5 rounded text-[10px]">{config.publisherId || 'ca-pub-XXXXXXXXXXXXXXXX'}</code> · Slot <code className="font-mono text-emerald-300 bg-slate-800/80 px-1 py-0.5 rounded text-[10px]">{placementConfig.slotId}</code>
            </p>
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                className="mt-1 text-[11px] text-indigo-300 hover:text-indigo-200 font-medium flex items-center gap-1 hover:underline"
              >
                Configure Live AdSense ID & ads.txt <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {/* Live Google AdSense container */}
            <ins
              className="adsbygoogle"
              style={{ display: 'block', width: '100%', height: '100%' }}
              data-ad-client={config.publisherId}
              data-ad-slot={placementConfig.slotId}
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        )}
      </div>
    </div>
  );
};
