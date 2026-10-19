import React from 'react';
import { Scale, AlertTriangle, FileCheck, CheckCircle2 } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-200">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <Scale className="w-4 h-4" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last Updated: October 14, 2026 · Governs Usage of CalculationHub Pro (calculationhub.com)
        </p>
      </div>

      <div className="space-y-8 text-sm md:text-base leading-relaxed text-slate-300">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-indigo-400" />
            <span>1. Acceptance of Terms</span>
          </h2>
          <p>
            By accessing, browsing, or utilizing the computational tools, calculators, and educational content available on CalculationHub Pro ("the Service"), you formally agree to be bound by these Terms and Conditions and all applicable local, national, and international laws. If you disagree with any portion of these provisions, you are prohibited from utilizing this platform.
          </p>
        </section>

        <section className="space-y-3">
          <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200">
            <h2 className="text-base font-bold text-amber-300 flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>2. Important Disclaimers for Financial, Health & Engineering Calculations</span>
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-amber-100/90">
              The calculations, mathematical formulas, interest estimates, body mass indexes, calorie projections, and construction approximations provided by CalculationHub Pro are designed exclusively for general informational, academic, and estimation purposes. They do not constitute formal certified financial advice, professional mortgage underwriting, medical diagnoses, legal counsel, or structural architectural engineering blueprints.
            </p>
            <p className="text-xs md:text-sm leading-relaxed text-amber-100/90 mt-2">
              Users must always consult certified public accountants (CPAs), licensed financial advisors, accredited mortgage loan officers, or board-certified medical physicians before making substantial financial, medical, or dietary commitments based on computational outputs.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-indigo-400" />
            <span>3. Accuracy and Computation Integrity</span>
          </h2>
          <p>
            While CalculationHub Pro executes rigorous algorithm testing against established textbook standards (e.g. World Health Organization guidelines, Mifflin-St Jeor formula, standard amortized PITI matrices), we make no explicit or implied warranties regarding 100% operational infallibility. Lenders and institutions utilize distinct compounding conventions, holiday day-count conventions, and state regulatory charges that may slightly diverge from baseline theoretical models.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Intellectual Property & Fair Use</h2>
          <p>
            All website design elements, source software, branding, explanatory articles, and original graphical assets published on CalculationHub Pro are protected under copyright and intellectual property laws. You may utilize the calculations for individual personal or internal corporate estimation; however, automated web scraping, bulk programmatic reproduction, or framing of our calculators without written consent is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
          <p>
            In no event shall OmniCalc Pro, its directors, developers, or contributors be held liable for any direct, indirect, incidental, punitive, or consequential damages resulting from the use or inability to use the calculations, discrepancies in loan underwriting estimations, or miscalculated physical parameters.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction of incorporation, without regard to conflict of law principles.
          </p>
        </section>
      </div>
    </div>
  );
};
