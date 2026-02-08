import { Card } from '../components/Card';
import { Flame, Wrench, Trophy } from 'lucide-react';

const phases = [
  {
    icon: Flame,
    number: 'Phase 1',
    title: 'Ignite',
    subtitle: 'Relief & Inflammation',
    description: 'We don\'t just reduce inflammation—we redirect it. Strategic stress-loading initiates your body\'s adaptive response, preparing the foundation for reconstruction.',
    features: [
      'Biomechanical assessment',
      'Pain pattern mapping',
      'Initial load tolerance testing',
      'Inflammation control protocols'
    ]
  },
  {
    icon: Wrench,
    number: 'Phase 2',
    title: 'Rebuild',
    subtitle: 'Functional Mobility',
    description: 'Traditional PT stops here. We\'re just getting started. Progressive overload strategies rebuild structural integrity while restoring full range of motion.',
    features: [
      'Progressive load escalation',
      'Movement pattern correction',
      'Tissue resilience building',
      'Functional strength development'
    ]
  },
  {
    icon: Trophy,
    number: 'Phase 3',
    title: 'Sustain',
    subtitle: 'Peak Performance',
    description: 'Recovery isn\'t the finish line—it\'s the starting block. We optimize your biomechanics for sustained high performance and injury prevention.',
    features: [
      'Performance optimization',
      'Advanced movement mechanics',
      'Injury prevention protocols',
      'Long-term maintenance blueprint'
    ]
  }
];

export function Roadmap() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-[#00D1D1]">Catalyst Method</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A data-driven, three-phase transformation that rejects traditional "rest and ice" protocols
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card key={index}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#00D1D1]/10 flex items-center justify-center">
                  <phase.icon className="text-[#00D1D1]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-[#00D1D1] font-semibold">{phase.number}</div>
                  <div className="text-2xl font-bold text-white">{phase.title}</div>
                </div>
              </div>

              <div className="text-lg font-semibold text-gray-300 mb-4">{phase.subtitle}</div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {phase.description}
              </p>

              <ul className="space-y-3">
                {phase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#00D1D1] mt-1">→</span>
                    <span className="text-gray-400">{feature}</span>
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
