import { useState } from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Roadmap } from './sections/Roadmap';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { StickyMobileCTA } from './components/StickyMobileCTA';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCtaClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Hero onCtaClick={handleCtaClick} />
      <About />
      <Roadmap />
      <Pricing onCtaClick={handleCtaClick} />
      <FAQ />

      <footer className="border-t border-[#2a2a2a] px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#00D1D1] mb-4">The Catalyst Physio</h3>
              <p className="text-gray-400 leading-relaxed">
                Elite biomechanical optimization for high-performers who refuse to accept pain as their new normal.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Dublin, Ireland</p>
                <p>info@catalystphysio.ie</p>
                <p>+353 1 234 5678</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 7am - 8pm</p>
                <p>Saturday: 9am - 2pm</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2a2a2a] mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2024 The Catalyst Physio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LeadCaptureForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <StickyMobileCTA onCtaClick={handleCtaClick} />
    </div>
  );
}

export default App;
