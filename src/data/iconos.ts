type IconFn = () => string;

export interface Iconos {
  exp:    IconFn;
  uptime: IconFn;
  clock:  IconFn;
  layers: IconFn;
  code:   IconFn;
  stack:  IconFn;
  shield: IconFn;
  mail:   IconFn;
  phone:  IconFn;
  pin:    IconFn;
  [key: string]: IconFn;
}

export interface Social {
  linkedin:  string;
  github:    string;
  whatsapp:  string;
}

const svg = (inner: string, stroke = 'var(--verde)'): string =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

export const iconos: Iconos = {
  // --- Métricas (SobreMi) ---
  exp:    () => svg(`<path data-draw style="--len:50" d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z"/>`),
  uptime: () => svg(`<path data-draw style="--len:40" d="M4 13a8 8 0 1 1 16 0"/><path data-draw style="--len:14" d="M12 13l4-3"/>`),
  clock:  () => svg(`<circle data-draw style="--len:60" cx="12" cy="12" r="9"/><path data-draw style="--len:14" d="M12 7v5l3 2"/>`),
  layers: () => svg(`<path data-draw style="--len:34" d="M12 3l9 5-9 5-9-5z"/><path data-draw style="--len:34" d="M3 13l9 5 9-5"/>`),

  // --- Features (SobreMi) ---
  code:   () => svg(`<path data-draw style="--len:24" d="M8 8l-4 4 4 4"/><path data-draw style="--len:24" d="M16 8l4 4-4 4"/><path data-pulse d="M13 6l-2 12" stroke="var(--acento)"/>`, 'var(--acento)'),
  stack:  () => svg(`<path data-draw style="--len:34" d="M12 3l9 5-9 5-9-5z"/><path data-draw style="--len:34" d="M3 13l9 5 9-5"/><path data-draw style="--len:34" d="M3 18l9 5 9-5"/>`, 'var(--acento)'),
  shield: () => svg(`<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>`, 'var(--acento)'),

  // --- Contacto ---
  mail:  () => svg(`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>`, 'var(--acento)'),
  phone: () => svg(`<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l2 5v3a1 1 0 0 1-1 1A16 16 0 0 1 4 7a1 1 0 0 1 1-1z"/>`),
  pin:   () => svg(`<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>`),
};

export const social: Social = {
  linkedin:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/></svg>`,
  github:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>`,
  whatsapp:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3c-.7.7-.9 1.7-.5 2.8a8 8 0 0 0 4.6 4.4c1.5.6 2.4.5 3-.1.3-.4.5-.9.4-1.1z"/></svg>`,
};
