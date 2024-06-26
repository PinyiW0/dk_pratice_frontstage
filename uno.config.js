// uno.config.ts
import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
// import presetWebFonts from '@unocss/preset-web-fonts';
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
      'primary': {
        light:'#D96F19',
        DEFAULT:'#FF5600',
        dark:'#DD5411',
      }, 
      'brand': {
        lighter: '#D7EDF0',
        light: '#6AC4C5',
        DEFAULT: '#6DB4BA',
        dark:'#4A9FA7',
        darker:'#3366A2',
      },
      'warning': {
        light: '#FFD79B',
        DEFAULT: '#FFB428',
      },
      'gray': {
        100:'#F7F7F7',
        400:'#9E9E9E',
        900:'#434343',
      },
      'bg-light': '#F3FBFF',
    },
    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
    },
  },
  shortcuts: {
    'btn-primary': ['border-0', 'bg-primary-dark', 'text-white', 'font-600', 'rounded-full', 'py-8px', 'px-20px', 'hover:border-white-1px', 'cursor-pointer', 'hover:bg-primary', 'hover:text-white'],
    'page-link': ['no-underline', 'appearance-none', 'bg-transparent', 'border-none', 'text-18px', 'text-gray-900', 'font-600', 'cursor-pointer', 'hover:text-primary'],
    'form-t': ['py-4', 'px-9', 'items-center', 'text-center', 'font-bold', 'bg-brand', 'border-1px', 'border-[#E1F3F3]', 'border-solid'],
    'form-b': ['py-4', 'px-9', 'items-center', 'text-gray-900', 'font-bold', 'bg-[#E1F3F3]', 'bg-op-80', 'border-[0.5px]', 'border-brand', 'border-solid'],
    'form-w': ['py-4', 'px-9', 'items-center', 'text-gray-900', 'font-bold', 'bg-white', 'border-[0.5px]', 'border-brand', 'border-solid'],
  },
})