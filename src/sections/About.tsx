import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

export function About() {
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
              THE CATALYST
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dr. Aris Thorne
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              A biomechanical architect with 15 years of experience treating elite athletes and high-performing executives.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Dr. Thorne's 'Catalyst Method' rejects the traditional 'rest and ice' model, instead utilizing data-driven stress-loading to rebuild the body's structural integrity. He believes recovery is a performance metric, not a clinical chore.
            </p>
            <div className="inline-block bg-[#141414] border border-[#00D1D1] px-6 py-3 rounded-lg">
              <p className="text-[#00D1D1] font-bold text-lg italic">
                "Stop managing pain. Start your transformation."
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
                  <h3 className="text-xl font-bold text-white mb-2">Elite Expertise</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Trusted by Olympic athletes, professional sports teams, and Fortune 500 executives for biomechanical optimization.
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
                  <h3 className="text-xl font-bold text-white mb-2">Data-Driven Approach</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Every protocol is built on biomechanical analysis, tissue adaptation science, and measurable performance metrics.
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
                  <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                  <p className="text-gray-400 leading-relaxed">
                    15 years of transforming chronic pain into peak performance across diverse populations and performance goals.
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
