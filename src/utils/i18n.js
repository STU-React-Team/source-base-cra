import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';

const options = {
  interpolation: {
    escapeValue: false
  },
};

i18next.use(LanguageDetector).init(options);

export default i18next;
