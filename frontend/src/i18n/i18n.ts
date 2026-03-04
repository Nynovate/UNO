import i18n, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
	load: "languageOnly",
    debug: import.meta.env.MODE === "development",

    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    detection: {
      order: ["navigator"],
      caches: ["cookie"],
      cleanCode: true,
    },
  } as InitOptions);

export default i18n;
