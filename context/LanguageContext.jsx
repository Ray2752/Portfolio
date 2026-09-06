'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/i18n/translations';

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        if (localStorage.language === 'es' ||
            (!('language' in localStorage) && navigator.language.toLowerCase().startsWith('es'))) {
            setLanguage('es');
        } else {
            setLanguage('en');
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = translations[language].meta.title;
        localStorage.language = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
