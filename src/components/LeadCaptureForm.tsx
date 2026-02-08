import { useState, FormEvent } from 'react';
import { Dialog } from './Dialog';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface LeadCaptureFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  blocker: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  blocker?: string;
}

export function LeadCaptureForm({ isOpen, onClose }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    blocker: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.blocker.trim()) {
      newErrors.blocker = 'Please describe your current challenge';
    } else if (formData.blocker.trim().length < 10) {
      newErrors.blocker = 'Please provide more detail (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormData({ name: '', email: '', blocker: '' });
      setErrors({});
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      {!isSubmitted ? (
        <>
          <h3 className="text-2xl font-bold text-white mb-2">
            Apply for Priority Access
          </h3>
          <p className="text-gray-400 mb-6">
            Limited slots available. Dr. Thorne personally reviews each application.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-4 py-3 bg-[#0A0A0A] border ${
                  errors.name ? 'border-red-500' : 'border-[#2a2a2a]'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D1D1] transition-colors`}
                placeholder="Dr. Jane Smith"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 bg-[#0A0A0A] border ${
                  errors.email ? 'border-red-500' : 'border-[#2a2a2a]'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D1D1] transition-colors`}
                placeholder="jane@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="blocker" className="block text-sm font-semibold text-white mb-2">
                Current Performance Blocker
              </label>
              <textarea
                id="blocker"
                value={formData.blocker}
                onChange={(e) => handleChange('blocker', e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 bg-[#0A0A0A] border ${
                  errors.blocker ? 'border-red-500' : 'border-[#2a2a2a]'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00D1D1] transition-colors resize-none`}
                placeholder="Describe what's holding you back from peak performance..."
              />
              {errors.blocker && (
                <p className="text-red-500 text-sm mt-1">{errors.blocker}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By applying, you agree to receive communication from The Catalyst Physio
            </p>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            className="mb-6 flex justify-center"
          >
            <CheckCircle2 className="text-[#00D1D1]" size={80} />
          </motion.div>

          <h3 className="text-3xl font-bold text-white mb-4">
            Priority Access Confirmed
          </h3>

          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            The transformation has already begun.
          </p>

          <div className="bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg p-6 mb-8 text-left">
            <p className="text-gray-400 leading-relaxed">
              You will receive a personal outreach from Dr. Thorne within <span className="text-[#00D1D1] font-semibold">24 hours</span> to schedule your Biomechanical Audit.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Check your inbox for the <span className="text-[#00D1D1] font-semibold">'Pre-Assessment Protocol' PDF</span>.
            </p>
          </div>

          <Button onClick={handleClose} variant="secondary" className="w-full">
            Close
          </Button>
        </motion.div>
      )}
    </Dialog>
  );
}
