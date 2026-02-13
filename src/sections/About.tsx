import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-bold text-[#00D1D1] mb-4 tracking-wider">
              {t('about.subtitle')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {t('about.bio1')}
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t('about.bio2')}
            </p>
            <div className="inline-block bg-[#141414] border border-[#00D1D1] px-6 py-3 rounded-lg">
              <p className="text-[#00D1D1] font-bold text-lg italic">
                "{t('about.motto')}"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00D1D1] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00D1D1]/10 flex items-center justify-center shrink-0">
                  <Award className="text-[#00D1D1]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('about.expertise')}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t('about.expertiseDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00D1D1] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00D1D1]/10 flex items-center justify-center shrink-0">
                  <Target className="text-[#00D1D1]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('about.datadriven')}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t('about.datadrivenDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00D1D1] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00D1D1]/10 flex items-center justify-center shrink-0">
                  <Users className="text-[#00D1D1]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t('about.results')}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t('about.resultsDesc')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
