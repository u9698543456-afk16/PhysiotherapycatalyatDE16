import { Card } from '../components/Card';
import { Flame, Wrench, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Roadmap() {
  const { t } = useTranslation();

  const phases = [
    {
      icon: Flame,
      titleKey: 'roadmap.phase1.title',
      subtitleKey: 'roadmap.phase1.subtitle',
      descriptionKey: 'roadmap.phase1.description'
    },
    {
      icon: Wrench,
      titleKey: 'roadmap.phase2.title',
      subtitleKey: 'roadmap.phase2.subtitle',
      descriptionKey: 'roadmap.phase2.description'
    },
    {
      icon: Trophy,
      titleKey: 'roadmap.phase3.title',
      subtitleKey: 'roadmap.phase3.subtitle',
      descriptionKey: 'roadmap.phase3.description'
    }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('roadmap.title')} <span className="text-[#00D1D1]">{t('roadmap.subtitle')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card key={index}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#00D1D1]/10 flex items-center justify-center">
                  <phase.icon className="text-[#00D1D1]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-[#00D1D1] font-semibold">Phase {index + 1}</div>
                  <div className="text-2xl font-bold text-white">{t(phase.titleKey)}</div>
                </div>
              </div>

              <div className="text-lg font-semibold text-gray-300 mb-4">{t(phase.subtitleKey)}</div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {t(phase.descriptionKey)}
              </p>

              <ul className="space-y-3">
                {[1, 2, 3, 4].map((idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#00D1D1] mt-1">→</span>
                    <span className="text-gray-400">{t(`roadmap.phase${index + 1}.feature${idx}`, { defaultValue: '' })}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
