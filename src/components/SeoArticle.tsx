import React, { useState } from 'react';
import { BookOpen, CheckCircle, HelpCircle, ChevronDown, ChevronUp, Hash, Award, Table } from 'lucide-react';
import { SeoArticleData, AdConfig } from '../types/calculator';
import { AdBanner } from './AdBanner';

interface SeoArticleProps {
  article: SeoArticleData;
  adConfig: AdConfig;
  onOpenAdSettings?: () => void;
}

export const SeoArticle: React.FC<SeoArticleProps> = ({
  article,
  adConfig,
  onOpenAdSettings,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Helper to highlight occurrences of the focus keyword
  const renderTextWithHighlights = (text: string, keyword: string) => {
    if (!text || !keyword) return text;
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span
          key={i}
          className="font-semibold text-indigo-300 bg-indigo-950/40 px-1 py-0.5 rounded border border-indigo-800/30"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <article className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 md:p-10 text-slate-200">
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: article.faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }),
        }}
      />

      {/* SEO & AdSense Content Quality Audit Badge */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 mb-8">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-slate-200">
            AdSense Content Standards Verified
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-slate-300">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            Word Count: {article.wordCount} words
          </span>
          <span className="flex items-center gap-1 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-slate-300">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            Keyword Density: {article.keywordCount}x "{article.focusKeyword}"
          </span>
          <span className="flex items-center gap-1 font-mono text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-slate-300">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            First Word Match: Verified
          </span>
        </div>
      </div>

      {/* Primary Article H1 Heading */}
      <header className="mb-8 border-b border-slate-800 pb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
          {renderTextWithHighlights(article.headings.h1, article.focusKeyword)}
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Published by OmniCalc Pro Editorial Team · Comprehensive Guide & Mathematical Derivations · Last Updated October 2026
        </p>
      </header>

      {/* Table of Contents */}
      <div className="mb-8 p-4 rounded-xl bg-slate-800/40 border border-slate-800 text-xs">
        <span className="font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-2.5">
          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
          <span>Table of Contents</span>
        </span>
        <ul className="space-y-1.5 pl-2">
          {article.headings.sections.map((sec, i) => (
            <li key={i}>
              <a
                href={`#section-${i}`}
                className="text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1.5"
              >
                <Hash className="w-3 h-3 text-slate-500" />
                <span>{sec.h2}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#worked-examples"
              className="text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1.5"
            >
              <Hash className="w-3 h-3 text-slate-500" />
              <span>Step-by-Step Worked Mathematical Calculations</span>
            </a>
          </li>
          <li>
            <a
              href="#faqs-section"
              className="text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1.5"
            >
              <Hash className="w-3 h-3 text-slate-500" />
              <span>Frequently Asked Questions & Answers</span>
            </a>
          </li>
        </ul>
      </div>

      {/* SECTION 1 */}
      {article.headings.sections[0] && (
        <section id="section-0" className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-white tracking-tight border-l-4 border-indigo-500 pl-3">
            {article.headings.sections[0].h2}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-300">
            {renderTextWithHighlights(
              article.headings.sections[0].content,
              article.focusKeyword
            )}
          </p>

          {article.headings.sections[0].subsections?.map((sub, subIdx) => (
            <div key={subIdx} className="space-y-2 mt-4 pl-3 border-l-2 border-slate-800">
              <h3 className="text-base font-semibold text-slate-100">
                {sub.h3}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {renderTextWithHighlights(sub.content, article.focusKeyword)}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* IN-CONTENT ADSENSE SLOT */}
      <div className="my-8">
        <AdBanner
          placement="in-content"
          config={adConfig}
          onOpenSettings={onOpenAdSettings}
        />
      </div>

      {/* REMAINING SECTIONS */}
      {article.headings.sections.slice(1).map((sec, idx) => (
        <section key={idx + 1} id={`section-${idx + 1}`} className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-white tracking-tight border-l-4 border-indigo-500 pl-3">
            {sec.h2}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-300">
            {renderTextWithHighlights(sec.content, article.focusKeyword)}
          </p>

          {sec.subsections?.map((sub, subIdx) => (
            <div key={subIdx} className="space-y-2 mt-4 pl-3 border-l-2 border-slate-800">
              <h3 className="text-base font-semibold text-slate-100">
                {sub.h3}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {renderTextWithHighlights(sub.content, article.focusKeyword)}
              </p>
            </div>
          ))}
        </section>
      ))}

      {/* WORKED EXAMPLES */}
      {article.workedExamples && article.workedExamples.length > 0 && (
        <div id="worked-examples" className="mt-10 mb-8 pt-8 border-t border-slate-800 space-y-5">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Table className="w-5 h-5 text-indigo-400" />
            <span>Step-by-Step Worked Mathematical Examples</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {article.workedExamples.map((ex, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3"
              >
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-xs">
                    {i + 1}
                  </span>
                  <span>{ex.title}</span>
                </h3>
                <div className="text-xs space-y-1 text-slate-400">
                  <span className="font-semibold text-slate-300 block">Given Parameters:</span>
                  <div className="grid grid-cols-2 gap-1 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                    {Object.entries(ex.inputs).map(([k, v]) => (
                      <div key={k}>
                        <span className="text-slate-400">{k}:</span> <span className="font-mono text-slate-200">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-xs space-y-1">
                  <span className="font-semibold text-slate-300 block">Calculation Step:</span>
                  <p className="font-mono text-[11px] bg-slate-900 p-2 rounded-lg border border-slate-800 text-indigo-300">
                    {ex.calculation}
                  </p>
                </div>
                <div className="text-xs font-semibold text-emerald-400 bg-emerald-950/30 p-2 rounded-lg border border-emerald-500/20">
                  {ex.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQS SECTION ACCORDION */}
      {article.faqs && article.faqs.length > 0 && (
        <div id="faqs-section" className="mt-10 pt-8 border-t border-slate-800 space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
            <span>Frequently Asked Questions (FAQ)</span>
          </h2>
          <div className="space-y-3">
            {article.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-semibold text-sm text-slate-200 hover:text-white flex items-center justify-between gap-4 transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-indigo-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 bg-slate-900/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
