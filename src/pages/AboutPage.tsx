import React from 'react';
import { Award, CheckCircle, Users, Zap, Shield, BookOpen } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-200">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <Award className="w-4 h-4" />
          <span>Our Mission & Standards</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          About CalculationHub Pro
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          The ultra-fast, zero-friction calculation platform engineered for accuracy, transparency, and accessible mathematics.
        </p>
      </div>

      <div className="space-y-8 text-sm md:text-base leading-relaxed text-slate-300">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-400" />
            <span>Empowering Accurate Decisions Through Computation</span>
          </h2>
          <p>
            CalculationHub Pro was established with a singular mission: to provide everyday consumers, students, small business owners, engineers, and healthcare seekers with lightning-fast, 100% free calculation engines accompanied by clear, transparent mathematical derivations.
          </p>
          <p>
            Too many calculation sites on the web are bogged down by aggressive intrusive redirects, sluggish server-side round trips, and paywalled features. At CalculationHub Pro, our suite of over 45 specialized calculators operates client-side with zero latency, providing instantaneous results as you adjust sliders, toggles, and inputs.
          </p>
        </section>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 w-fit">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Ultra-Fast Engine</h3>
            <p className="text-xs text-slate-400">
              Zero server latency. Computations execute in real-time right in your web browser with zero loading spinners or delayed responses.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Privacy by Architecture</h3>
            <p className="text-xs text-slate-400">
              Your financial budgets, loan amounts, and health metrics are never recorded on external databases. Computations remain 100% private to your device.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 w-fit">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Rigorous Editorial EEAT</h3>
            <p className="text-xs text-slate-400">
              Every calculator is paired with comprehensive 1,200+ word educational guides, standard mathematical equations, and step-by-step worked examples.
            </p>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-400" />
            <span>Our Editorial Board & Fact-Checking Methodology</span>
          </h2>
          <p>
            To maintain uncompromising computational fidelity, our formulas are grounded strictly in peer-reviewed and institutionally recognized literature:
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Financial & Mortgages:</strong> Formulated according to standard fixed-rate amortization equations and Consumer Financial Protection Bureau (CFPB) disclosure definitions.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Health & Metabolic:</strong> Grounded in World Health Organization (WHO) BMI classifications, the Mifflin-St Jeor BMR equation, and U.S. Navy circumference formulas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Engineering & Physics:</strong> Governed by classical Newtonian kinematics, Ohm's law (V = IR), and ASTM civil construction specifications.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">How We Maintain Free Access</h2>
          <p>
            OmniCalc Pro is funded entirely via contextual advertising delivered through certified partners like Google AdSense. We do not sell user data, charge subscription paywalls, or lock advanced formulas behind premium accounts. By displaying non-intrusive, compliant advertisements, we keep this comprehensive suite completely free for everyone worldwide.
          </p>
        </section>
      </div>
    </div>
  );
};
