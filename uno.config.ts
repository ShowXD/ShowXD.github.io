import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:300,400,500,600,700',
        mono: 'JetBrains Mono:400,500',
        display: 'Space Grotesk:300,400,500,600,700',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      bg: {
        DEFAULT: '#0a0a1a',
        surface: '#12122a',
        elevated: '#1a1a3a',
        overlay: '#1e1e42',
      },
      primary: {
        DEFAULT: '#6C63FF',
        light: '#8B85FF',
        dark: '#4D45E0',
      },
      accent: {
        cyan: '#00D9FF',
        pink: '#FF6B9D',
        gold: '#FFD93D',
        green: '#43E97B',
      },
      text: {
        primary: '#E0E0FF',
        secondary: '#8888AA',
        muted: '#555577',
      },
    },
    fontFamily: {
      sans: 'Inter, sans-serif',
      mono: 'JetBrains Mono, monospace',
      display: 'Space Grotesk, sans-serif',
    },
  },
  shortcuts: {
    // Layout
    'container-section': 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    // Typography
    'heading-xl': 'font-display font-700 text-4xl sm:text-5xl lg:text-6xl text-text-primary',
    'heading-lg': 'font-display font-600 text-3xl sm:text-4xl text-text-primary',
    'heading-md': 'font-display font-600 text-2xl sm:text-3xl text-text-primary',
    'body-text': 'font-sans text-base text-text-secondary leading-relaxed',
    // Gradient text
    'gradient-primary': 'bg-gradient-to-r from-primary to-accent-cyan bg-clip-text text-transparent',
    'gradient-pink': 'bg-gradient-to-r from-accent-pink to-primary bg-clip-text text-transparent',
    // Cards
    'glass-card': 'bg-bg-surface/60 backdrop-blur-md border border-white/10 rounded-2xl',
    'glow-card': 'glass-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(108,99,255,0.15)]',
    // Buttons
    'btn-primary': 'px-6 py-3 rounded-xl font-600 text-white bg-gradient-to-r from-primary to-accent-cyan hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(108,99,255,0.5)]',
    'btn-outline': 'px-6 py-3 rounded-xl font-600 text-primary border border-primary/50 hover:bg-primary/10 transition-all duration-300',
    // Tags
    'tech-tag': 'px-3 py-1 rounded-full text-xs font-500 bg-primary/15 text-primary border border-primary/30',
    // Section
    'section-base': 'py-20 sm:py-24',
  },
  rules: [
    // Custom text gradient rule
    [/^text-gradient-(.+)$/, ([, c]) => ({
      background: `linear-gradient(135deg, var(--un-gradient-from), var(--un-gradient-to))`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'background-clip': 'text',
    })],
  ],
})
