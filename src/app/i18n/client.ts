"use client";

import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";
import { useEffect, useState, useRef } from "react";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, namespace: string) =>
      import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

interface UseTranslationOptions {
  bindI18n?: string;
  bindI18nStore?: string;
  [key: string]: unknown;
}

export function useTranslation(lang: string, ns: string, options?: UseTranslationOptions) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  const langRef = useRef(lang);
  const cookieRef = useRef(cookies[cookieName]);

  if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  }

  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return;
    setActiveLng(i18n.resolvedLanguage);
  }, [activeLng, i18n.resolvedLanguage]);

  useEffect(() => {
    if (!lang || i18n.resolvedLanguage === lang || langRef.current === lang) return;
    langRef.current = lang;
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  useEffect(() => {
    if (cookieRef.current === lang) return;
    cookieRef.current = lang;
    setCookie(cookieName, lang, { path: "/" });
  }, [lang, setCookie]);

  return ret;
} 