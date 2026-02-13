import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2"
    >
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-2 rounded-lg font-semibold transition-all ${
          i18n.language === 'en'
            ? 'bg-[#00D1D1] text-black'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('de')}
        className={`px-3 py-2 rounded-lg font-semibold transition-all ${
          i18n.language === 'de'
            ? 'bg-[#00D1D1] text-black'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        DE
      </button>
    </motion.div>
  );
}
