import { motion } from 'framer-motion';
import { Button } from '../components/Button';

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Stop Managing Pain.{' '}
            <span className="text-[#00D1D1]">Start Your Transformation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed"
          >
            The 12-week biomechanical blueprint by Dr. Aris Thorne.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button onClick={onCtaClick} className="text-lg">
              Apply for the 12-Week Program
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 pt-20 border-t border-[#2a2a2a]"
        >
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-bold text-[#00D1D1] mb-2">15+</div>
              <div className="text-gray-400">Years of Elite Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00D1D1] mb-2">12</div>
              <div className="text-gray-400">Week Transformation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00D1D1] mb-2">15min</div>
              <div className="text-gray-400">Daily Time Investment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
