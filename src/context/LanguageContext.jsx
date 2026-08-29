import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext(null);

const SUPPORTED = ["en", "id"];
const STORAGE_KEY = "language";

function detectInitialLanguage() {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;

  const browserLang = window.navigator.language?.slice(0, 2);
  return browserLang === "id" ? "id" : "en";
}

function resolve(dict, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), dict);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detectInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const dict = translations[language] || translations.en;

    const t = (path) => {
      const result = resolve(dict, path);
      if (result === undefined) {
        return resolve(translations.en, path) ?? path;
      }
      return result;
    };

    const toggleLanguage = () =>
      setLanguage((prev) => (prev === "en" ? "id" : "en"));

    return { language, setLanguage, toggleLanguage, t };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
