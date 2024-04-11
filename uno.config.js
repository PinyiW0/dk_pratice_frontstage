// uno.config.ts
import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
// import '@unocss/reset/eric-meyer.css'
import transformerDirectives from '@unocss/transformer-directives';


export default defineConfig({
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerDirectives(),
  ],

  theme: {
    colors: {
      'primary': '#FF5600',
      'primary-light': '#D96F19',
      'primary-dark': '#DD5411',
      'brand': '#6DB4BA',
      'brand-lighter': '#D7EDF0',
      'brand-light': '#6AC4C5',
      'brand-dark': '#3366A2',
      'warning': '#FFB428',
      'warning-light': '#FFD79B',
      'bg-light': '#F3FBFF',
      'gray-400': '#9E9E9E',
      'gray-900': '#434343',
    },
    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
    },
    fontSize: {
      '18': '18px', 
      '22': '22px',
    },
    height: {
      '320': '320px',
    }
  },
  shortcuts: {
    'btn-primary': ['border-0', 'bg-primary-dark', 'text-white', 'font-600', 'rounded-full', 'py-8px', 'px-20px', 'hover:border-white-1px', 'cursor-pointer', 'hover:bg-primary', 'hover:text-white'],
    'page-link': ['appearance - none', 'bg-transparent', 'border-none', 'text-18', 'font-600', 'cursor-pointer', 'hover:text-primary'],
  },
})