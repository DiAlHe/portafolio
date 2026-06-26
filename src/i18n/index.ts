import es from './es.ts';
import en from './en.ts';

export type { UI } from './ui.ts';
export type Lang = 'es' | 'en';

export const defaultLang: Lang = 'es';
export const languages: Record<Lang, string> = { es: 'ES', en: 'EN' };

const ui: Record<Lang, typeof es> = { es, en };

export function useTranslations(lang: Lang): typeof es {
  return ui[lang];
}
