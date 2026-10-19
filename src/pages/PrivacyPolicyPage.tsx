import React from 'react';
import { ShieldCheck, Lock, Eye, Cookie, Server, Globe } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-200">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Last Updated: October 14, 2026 · Effective Immediately for CalculationHub Pro (calculationhub.com)
        </p>
      </div>

      <div className="space-y-8 text-sm md:text-base leading-relaxed text-slate-300">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-400" />
            <span>1. Introduction & Overview</span>
          </h2>
          <p>
            At CalculationHub Pro ("we," "our," or "us"), accessible via calculationhub.com, safeguarding the privacy of our visitors is one of our primary priorities. This Privacy Policy document outlines the types of information collected and recorded by CalculationHub Pro and how we utilize it in strict accordance with the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and Google AdSense Publisher Program Policies.
          </p>
          <p>
            If you have additional inquiries or require further information regarding our data governance practices, please reach out to our privacy compliance officer via our Contact page or at <code className="text-indigo-300 font-mono">privacy@calculationhub.com</code>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cookie className="w-5 h-5 text-indigo-400" />
            <span>2. Google AdSense & DoubleClick DART Cookies</span>
          </h2>
          <p>
            Google is a third-party vendor on our platform. Google utilizes cookies—specifically the DoubleClick DART cookie—to serve contextual and personalized advertisements to visitors of CalculationHub Pro based upon their visits to this site and other websites across the broader internet.
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="font-semibold text-white text-sm">User Opt-Out Information:</h3>
            <p className="text-xs text-slate-300">
              Users may choose to opt out of the use of the DART cookie and personalized advertising by visiting the Google Ad and Content Network Privacy Policy at the following URL:{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline font-mono text-xs hover:text-indigo-300"
              >
                https://policies.google.com/technologies/ads
              </a>
            </p>
            <p className="text-xs text-slate-300">
              Additionally, you may opt out of third-party vendor behavioral advertising tracking by visiting the Digital Advertising Alliance consumer choice portal at{' '}
              <a
                href="https://optout.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline font-mono text-xs hover:text-indigo-300"
              >
                https://optout.aboutads.info
              </a>{' '}
              or the Network Advertising Initiative (NAI) at{' '}
              <a
                href="https://www.networkadvertising.org/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 underline font-mono text-xs hover:text-indigo-300"
              >
                https://www.networkadvertising.org/choices/
              </a>.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Server className="w-5 h-5 text-indigo-400" />
            <span>3. Log Files & Server Diagnostics</span>
          </h2>
          <p>
            CalculationHub Pro follows a standard protocol of utilizing server log files. These files record visits when visitors navigate our web application. All hosting services utilize these logs as part of routine diagnostic auditing. The information gathered by log files includes internet protocol (IP) addresses, browser specification types, Internet Service Provider (ISP) references, date and time stamps, referring/exit navigation pages, and click counts. These data points are not linked to personally identifiable information; they are analyzed exclusively for technical debugging, site administration, trend tracking, and user demographic assessment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-400" />
            <span>4. Local Calculation Privacy & Zero-Data Storage</span>
          </h2>
          <p>
            Your financial, medical, and arithmetic computations—including mortgage figures, personal salary rates, BMI measurements, and body dimensions—are executed entirely within your client-side web browser. CalculationHub Pro does not store, transmit, or monetize your private input data onto external servers. Any calculation history functionality is maintained locally inside your browser's private <code className="text-indigo-300 font-mono">localStorage</code> cache and can be cleared by you at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-400" />
            <span>5. CCPA & GDPR Privacy Rights</span>
          </h2>
          <p>
            Under the California Consumer Privacy Act (CCPA) and GDPR regulations, consumers enjoy substantial rights regarding their personal data, including the right to request disclosure of categories of data collected, the right to request deletion of personal information, and the guarantee against unlawful discrimination for exercising privacy rights. OmniCalc Pro adheres strictly to "Do Not Sell My Personal Information" standards and does not trade or sell user records to third-party data brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">6. Children's Information (COPPA)</h2>
          <p>
            Protecting children while utilizing the internet is an integral priority. OmniCalc Pro does not knowingly gather personally identifiable information from children under the age of 13. If a parent or guardian believes that our platform holds personal data belonging to a minor, please contact us immediately for prompt removal from our log files.
          </p>
        </section>
      </div>
    </div>
  );
};
