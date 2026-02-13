import { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface PricingProps {
  onCtaClick: () => void;
}

export function Pricing({ onCtaClick }: PricingProps) {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(true);

  const monthlyPrice = 850;
  const annualPrice = 2350;
  const monthlySavings = (monthlyPrice * 3) - annualPrice;

  return (
    <section className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('pricing.title')} <span className="text-[#00D1D1]">{t('pricing.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>

          <div className="inline-flex items-center gap-4 bg-[#141414] p-2 rounded-lg border border-[#2a2a2a]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                !isAnnual
                  ? 'bg-[#00D1D1] text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('pricing.monthly')}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                isAnnual
                  ? 'bg-[#00D1D1] text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t('pricing.paidInFull')}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <Card>
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-white mb-4">{t('pricing.singleSession.title')}</h3>
              <div className="mb-6">
                <div className="text-5xl font-bold text-white mb-2">€150</div>
                <div className="text-gray-400">{t('pricing.singleSession.price')}</div>
              </div>
              <ul className="space-y-4 mb-8 text-left">
                {t('pricing.singleSession.features', { returnObjects: true }).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-[#00D1D1] shrink-0 mt-1" size={20} />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" onClick={onCtaClick} className="w-full">
                {t('pricing.singleSession.cta')}
              </Button>
            </div>
          </Card>

          <Card featured className="md:scale-105 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00D1D1] text-black px-6 py-2 rounded-full font-bold text-sm">
              {t('pricing.catalyst.recommended')}
            </div>
            <div className="text-center py-4">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('pricing.catalyst.title')}
              </h3>
              <div className="mb-6">
                <motion.div
                  key={isAnnual ? 'annual' : 'monthly'}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-6xl font-bold text-[#00D1D1] mb-2">
                    €{isAnnual ? annualPrice.toLocaleString() : monthlyPrice}
                  </div>
                  <div className="text-gray-400">
                    {isAnnual ? t('pricing.catalyst.paidFullLabel') : t('pricing.catalyst.monthlyLabel')}
                  </div>
                  {isAnnual && (
                    <div className="text-[#00D1D1] font-semibold mt-2">
                      {t('pricing.save', { amount: monthlySavings })}
                    </div>
                  )}
                </motion.div>
              </div>
              <ul className="space-y-4 mb-8 text-left">
                {t('pricing.catalyst.features', { returnObjects: true }).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-[#00D1D1] shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={onCtaClick} className="w-full">
                {t('pricing.catalyst.cta')}
              </Button>
            </div>
          </Card>

          <Card>
            <div className="text-center py-4">
              <h3 className="text-2xl font-bold text-white mb-4">{t('pricing.corporate.title')}</h3>
              <div className="mb-6">
                <div className="text-5xl font-bold text-white mb-2">{t('pricing.corporate.price')}</div>
                <div className="text-gray-400">{t('pricing.corporate.priceLabel')}</div>
              </div>
              <ul className="space-y-4 mb-8 text-left">
                {t('pricing.corporate.features', { returnObjects: true }).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-[#00D1D1] shrink-0 mt-1" size={20} />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" onClick={onCtaClick} className="w-full">
                {t('pricing.corporate.cta')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
