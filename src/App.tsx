import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { HomePage } from './pages/HomePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { CategoryPage } from './pages/CategoryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DmcaPage } from './pages/DmcaPage';
import { AdsTxtPage } from './pages/AdsTxtPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { AdSenseGuidePage } from './pages/AdSenseGuidePage';
import { CalculatorCategory } from './types/calculator';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeParam, setActiveParam] = useState<string>('mortgage-calculator');
  const [isCookieModalOpen, setIsCookieModalOpen] = useState<boolean>(false);

  // Handle URL hash navigation for deep linking and history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setCurrentView('home');
        return;
      }

      if (hash.startsWith('calc/')) {
        setCurrentView('calculator');
        setActiveParam(hash.replace('calc/', ''));
      } else if (hash.startsWith('category/')) {
        setCurrentView('category');
        setActiveParam(hash.replace('category/', ''));
      } else if (['privacy', 'terms', 'dmca', 'about', 'contact', 'ads-txt', 'cookies', 'adsense-guide'].includes(hash)) {
        setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string, param?: string) => {
    setCurrentView(view);
    if (param) setActiveParam(param);

    if (view === 'home') {
      window.location.hash = '';
    } else if (view === 'calculator') {
      window.location.hash = `calc/${param}`;
    } else if (view === 'category') {
      window.location.hash = `category/${param}`;
    } else {
      window.location.hash = view;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* NAVBAR */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* VIEW ROUTER */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onSelectCalculator={(id) => handleNavigate('calculator', id)}
            onSelectCategory={(cat) => handleNavigate('category', cat)}
          />
        )}

        {currentView === 'calculator' && (
          <CalculatorPage
            calculatorId={activeParam}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'category' && (
          <CategoryPage
            categoryId={activeParam as CalculatorCategory}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'privacy' && <PrivacyPolicyPage />}
        {currentView === 'terms' && <TermsPage />}
        {currentView === 'dmca' && <DmcaPage />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'cookies' && <CookiePolicyPage onOpenPreferences={() => setIsCookieModalOpen(true)} />}
        {currentView === 'adsense-guide' && <AdSenseGuidePage />}
        {currentView === 'ads-txt' && <AdsTxtPage />}
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCookieSettings={() => setIsCookieModalOpen(true)}
      />

      {/* GDPR / CCPA COOKIE CONSENT BANNER & SETTINGS MODAL */}
      <CookieConsentBanner
        onOpenCookiePolicy={() => handleNavigate('cookies')}
        externalOpenSettings={isCookieModalOpen}
        onCloseSettings={() => setIsCookieModalOpen(false)}
      />
    </div>
  );
}
