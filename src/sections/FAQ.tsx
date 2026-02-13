import { Accordion, AccordionItem } from '../components/Accordion';
import { useTranslation } from 'react-i18next';

export function FAQ() {
  const { t } = useTranslation();

  const faqKeys = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
    { q: 'faq.q6', a: 'faq.a6' }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('faq.title')}
          </h2>
        </div>

        <Accordion>
          {faqKeys.map((item, index) => (
            <AccordionItem key={index} title={t(item.q)} defaultOpen={index === 0}>
              {t(item.a)}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
