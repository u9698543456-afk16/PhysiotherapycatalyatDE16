import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

interface StickyMobileCTAProps {
  onCtaClick: () => void;
}

export function StickyMobileCTA({ onCtaClick }: StickyMobileCTAProps) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrolled = window.scrollY;

      if (scrolled > heroHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-[#2a2a2a] px-6 py-4"
        >
          <Button onClick={onCtaClick} className="w-full">
            {t('sticky.cta')}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
