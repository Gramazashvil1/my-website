import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationsEN from './locales/en/translation.json';
import translationsKA from './locales/ka/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
})
i18n.use(LanguageDetector).use(initReactI18next).init({
    supportedLngs: ['ka', 'en'],
    whitelist: ['ka', 'en'],
    fallbackLng: 'ka',
    resources: {
        en: {
            translation: translationsEN
        },
        ka: {
            translation: translationsKA
        }
    },
    detection: {
        caches: ['localStorage'],
        order: ['localStorage', 'path'],
        lookupFromPathIndex: 0,
        checkWhitelist: true
    },
    interpolation: {
        escapeValue: false,
        formatSeparator: '.'
    },
})
export default i18n;