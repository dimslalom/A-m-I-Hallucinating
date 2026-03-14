// ================================================================
//  THEME TOGGLE — change this one value to switch themes:
//    'A'  →  Monochrome (black & white)
//    'B'  →  Purple / Green / Red
// ================================================================
const THEME = 'B';

const themes = {
  A: {
    '--c-primary':       '#000000',
    '--c-primary-hover': '#222222',
    '--c-bg':            '#ffffff',
    '--c-correct':       '#538d4e',
    '--c-correct-bg':    '#e8f5e9',
    '--c-wrong':         '#cc3333',
    '--c-wrong-bg':      '#fde8e8',
    '--c-border':        '#d3d6da',
    '--c-muted':         '#787c7e',
    '--c-accent-light':  '#f5f5f5',
    '--c-slide-accent':  '#51247A',
  },
  B: {
    '--c-primary':       '#510094',
    '--c-primary-hover': '#3a006b',
    '--c-bg':            '#ffffff',
    '--c-correct':       '#1DB000',
    '--c-correct-bg':    '#DEF8DF',
    '--c-wrong':         '#CC0505',
    '--c-wrong-bg':      '#F8DEDE',
    '--c-border':        '#A461DA',
    '--c-muted':         '#7a5a9a',
    '--c-accent-light':  '#E8DEF8',
    '--c-slide-accent':  '#510094',
  },
};

const vars = themes[THEME];
for (const [key, value] of Object.entries(vars)) {
  document.documentElement.style.setProperty(key, value);
}
