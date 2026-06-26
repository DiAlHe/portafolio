export interface UI {
  seo: {
    title: string;
    description: string;
    locale: string;
  };
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    lede: string;
    ctaExp: string;
    ctaContact: string;
    mark: string;
  };
  sobre: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    metricLabels: [string, string, string, string];
  };
  exp: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    sub: string;
    filtros: [string, string, string, string];
    consultoria: string;
  };
  hab: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    cats: [string, string, string, string];
  };
  contacto: {
    eyebrow: string;
    title: string;
    lede: string;
    cardEmail: string;
    cardLinkedIn: string;
    cardLocation: string;
    location: string;
    disponible: string;
    cta: string;
  };
  footer: {
    tag: string;
    made: string;
  };
}
