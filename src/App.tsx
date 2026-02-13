import { useState } from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Roadmap } from './sections/Roadmap';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCtaClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-[#2a2a2a]">
        <div className="px-6 md:px-12 lg:px-24 py-4 flex justify-end">
          <LanguageSwitcher />
        </div>
      </header>

      <Hero onCtaClick={handleCtaClick} />
      <About />
      <Roadmap />
      <Pricing onCtaClick={handleCtaClick} />
      <FAQ />

      <footer className="border-t border-[#2a2a2a] px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#00D1D1] mb-4">{t('footer.title')}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
              <div className="space-y-2 text-gray-400">
                <p>{t('footer.location')}</p>
                <p>{t('footer.email')}</p>
                <p>{t('footer.phone')}</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.hours')}</h4>
              <div className="space-y-2 text-gray-400">
                <p>{t('footer.mondayFriday')}</p>
                <p>{t('footer.saturday')}</p>
                <p>{t('footer.sunday')}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2a2a2a] mt-12 pt-8 text-center text-gray-500">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      <LeadCaptureForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <StickyMobileCTA onCtaClick={handleCtaClick} />
    </div>
  );
}

export default App;
