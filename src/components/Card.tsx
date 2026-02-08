import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}

export function Card({ children, className = '', featured = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        bg-[#141414] rounded-xl p-8
        ${featured ? 'border-2 border-[#00D1D1] shadow-[0_0_30px_rgba(0,209,209,0.3)]' : 'border border-[#2a2a2a]'}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
