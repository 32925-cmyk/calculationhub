import React from 'react';
import { Copyright, ShieldAlert, Mail, FileText, CheckCircle } from 'lucide-react';

export const DmcaPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-slate-200">
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <Copyright className="w-4 h-4" />
          <span>Copyright Protection</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          DMCA Copyright Policy
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Compliance with Title 17, United States Code, Section 512(c)(3) · CalculationHub Pro
        </p>
      </div>

      <div className="space-y-8 text-sm md:text-base leading-relaxed text-slate-300">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-indigo-400" />
            <span>1. Notice and Takedown Procedure</span>
          </h2>
          <p>
            CalculationHub Pro respects the intellectual property rights of creators, software engineers, and authors. We adhere strictly to the safe harbor provisions of the Digital Millennium Copyright Act (17 U.S.C. § 512). It is our policy to promptly investigate and respond to clear notices of alleged copyright infringement and take appropriate action under applicable intellectual property laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <span>2. Submitting a DMCA Infringement Notification</span>
          </h2>
          <p>
            If you are a copyright owner or an authorized agent acting on behalf of one, and you believe that content hosted on CalculationHub Pro infringes upon your copyright, you may submit a formal notification pursuant to 17 U.S.C. § 512(c)(3) containing the following details:
          </p>

          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5 text-xs md:text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>A physical or electronic signature of the person authorized to act on behalf of the copyright owner.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Identification of the copyrighted work claimed to have been infringed (e.g. title, registration number, or URL of the original work).</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Identification of the material on our site claimed to be infringing, including the exact URL location on CalculationHub Pro.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Your contact information: legal name, mailing address, telephone number, and official email address.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>A statement under penalty of perjury that the information in the notification is accurate and that you are authorized to act on the copyright owner's behalf.</span>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-indigo-400" />
            <span>3. Designated DMCA Copyright Agent</span>
          </h2>
          <p>
            Please deliver your completed copyright infringement notifications to our Designated Agent:
          </p>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
            <p className="font-bold text-white">DMCA Compliance Officer</p>
            <p>OmniCalc Pro Legal Department</p>
            <p>Email: <span className="text-indigo-400">dmca@calculationhub.com</span></p>
            <p>Subject Line: <span className="text-amber-400">DMCA Takedown Notice – OmniCalc Pro</span></p>
            <p>Response SLA: Within 24 to 48 business hours</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">4. Counter-Notification Procedure</h2>
          <p>
            If you believe your material was removed or disabled as a result of mistake or misidentification, you may send a written counter-notification pursuant to sections 512(g)(2) and (3) of the DMCA. Upon receipt of a valid counter-notification, we will forward it to the original complaining party. If no court action is filed within 10 to 14 business days, the removed material may be restored.
          </p>
        </section>
      </div>
    </div>
  );
};
