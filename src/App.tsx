import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AdBanner } from './components/AdBanner';
import { AdSettingsModal } from './components/AdSettingsModal';
import { HomePage } from './pages/HomePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { CategoryPage } from './pages/CategoryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DmcaPage } from './pages/DmcaPage';
import { AdsTxtPage } from './pages/AdsTxtPage';
import { AdConfig, CalculatorCategory } from './types/calculator';

const DEFAULT_AD_CONFIG: AdConfig = {
  enabled: true,
  isDemoMode: true,
  publisherId: 'ca-pub-1234567890123456',
  headerSlot: '7280901234',
  sidebarSlot: '3006001234',
  inContentSlot: '3362801234',
  footerSlot: '7280905678',
};

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeParam, setActiveParam] = useState<string>('mortgage-calculator');
  const [isAdModalOpen, setIsAdModalOpen] = useState<boolean>(false);
  const [adConfig, setAdConfig] = useState<AdConfig>(() => {
    try {
      const saved = localStorage.getItem('omnicalc_ad_config');
      return saved ? JSON.parse(saved) : DEFAULT_AD_CONFIG;
    } catch {
      return DEFAULT_AD_CONFIG;
    }
  });

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
      } else if (['privacy', 'terms', 'dmca', 'about', 'contact', 'ads-txt'].includes(hash)) {
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

  const handleSaveAdConfig = (newConfig: AdConfig) => {
    setAdConfig(newConfig);
    try {
      localStorage.setItem('omnicalc_ad_config', JSON.stringify(newConfig));
    } catch (e) {
      console.error('Could not save ad config', e);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white pb-20">
      {/* NAVBAR */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenAdSettings={() => setIsAdModalOpen(true)}
      />

      {/* VIEW ROUTER */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onSelectCalculator={(id) => handleNavigate('calculator', id)}
            onSelectCategory={(cat) => handleNavigate('category', cat)}
            adConfig={adConfig}
            onOpenAdSettings={() => setIsAdModalOpen(true)}
          />
        )}

        {currentView === 'calculator' && (
          <CalculatorPage
            calculatorId={activeParam}
            onNavigate={handleNavigate}
            adConfig={adConfig}
            onOpenAdSettings={() => setIsAdModalOpen(true)}
          />
        )}

        {currentView === 'category' && (
          <CategoryPage
            categoryId={activeParam as CalculatorCategory}
            onNavigate={handleNavigate}
            adConfig={adConfig}
            onOpenAdSettings={() => setIsAdModalOpen(true)}
          />
        )}

        {currentView === 'privacy' && <PrivacyPolicyPage />}
        {currentView === 'terms' && <TermsPage />}
        {currentView === 'dmca' && <DmcaPage />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'ads-txt' && <AdsTxtPage adConfig={adConfig} />}
      </main>

      {/* STICKY BOTTOM ANCHOR AD */}
      <AdBanner
        placement="footer"
        config={adConfig}
        onOpenSettings={() => setIsAdModalOpen(true)}
      />

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdSettings={() => setIsAdModalOpen(true)}
      />

      {/* PUBLISHER AD CONTROLS MODAL */}
      <AdSettingsModal
        isOpen={isAdModalOpen}
        onClose={() => setIsAdModalOpen(false)}
        config={adConfig}
        onSave={handleSaveAdConfig}
      />
    </div>
  );
}
