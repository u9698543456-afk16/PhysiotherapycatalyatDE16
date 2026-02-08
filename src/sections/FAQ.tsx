import { Accordion, AccordionItem } from '../components/Accordion';

const faqs = [
  {
    question: 'Is this covered by insurance?',
    answer: 'The Catalyst Program operates outside traditional insurance models to maintain our premium standard of care. However, many clients successfully submit for out-of-network reimbursement. We provide detailed documentation and superbills for your insurance provider. Typical reimbursement rates range from 40-70% depending on your plan.'
  },
  {
    question: 'How much time do I need to commit daily?',
    answer: 'The program requires just 15 minutes of focused daily work. This isn\'t about logging hours—it\'s about precision and consistency. Our data-driven protocols are designed for high-performers who need maximum results with minimum time investment. You\'ll receive specific exercises via our custom app with video demonstrations and progress tracking.'
  },
  {
    question: 'What makes "The Catalyst Method" different from standard physical therapy?',
    answer: 'Traditional PT focuses on pain management and basic functional recovery—we go far beyond. The Catalyst Method uses progressive stress-loading to rebuild structural integrity, not just reduce symptoms. While standard PT might have you doing generic stretches, we create biomechanically precise protocols based on your movement patterns, performance goals, and tissue adaptation capacity. Think of it as the difference between maintenance and optimization.'
  },
  {
    question: 'What if I\'m not an athlete?',
    answer: 'The Catalyst Method isn\'t just for athletes—it\'s for anyone who refuses to accept pain as their new normal. Whether you\'re a CEO, parent, or weekend warrior, our protocols adapt to your lifestyle and performance requirements. We\'ve helped executives eliminate chronic back pain, restored mobility for desk workers, and helped parents keep up with their kids. Elite performance is a mindset, not a profession.'
  },
  {
    question: 'Do I need to visit the clinic in person?',
    answer: 'The program offers both in-person and hybrid options. Your initial Biomechanical Audit must be conducted in-person at our clinic for comprehensive assessment. After that, we offer flexible scheduling with a combination of in-person sessions and remote check-ins via video analysis. Most clients do 4-6 in-person sessions throughout the 12 weeks, with the rest managed remotely.'
  },
  {
    question: 'What happens after the 12 weeks?',
    answer: 'You receive a personalized Lifetime Maintenance Blueprint—a comprehensive plan to sustain your results independently. This includes your optimized movement patterns, progressive loading protocols, and early warning indicators for potential issues. Most clients continue with quarterly check-ins to fine-tune their performance, but the goal is complete autonomy. You\'ll have the knowledge and tools to maintain peak performance for life.'
  }
];

export function FAQ() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common <span className="text-[#00D1D1]">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about The Catalyst Program
          </p>
        </div>

        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} title={faq.question} defaultOpen={index === 0}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
