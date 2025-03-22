import primitives from './src/app/(frontend)/tokens/primitives.json'
import uiStyles from './src/app/(frontend)/tokens/UIStyles.json'

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [require('@relume_io/relume-tailwind')],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["'Bebas Neue'", 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        // Using primitives tokens for actual color values
        scheme1Background: primitives.Color['Spindle Lighter'].$value,
        chatmansBlue: primitives.Color['Chathams Blue'].$value,
        neutralDarkest: primitives.Color['Neutral Darkest'].$value,
        neutralDarkest15: primitives.Opacity['Neutral Darkest 15'].$value,
        neutralLightest: primitives.Color['Neutral Lightest'].$value,
        primary: primitives.Color['Chathams Blue'].$value,
        accent: primitives.Color['Chathams Blue'].$value,
        // Add more colors as needed
      },
      borderRadius: {
        small: `${uiStyles.Radius.Small.$value}px`, // e.g., "16px"
        medium: `${uiStyles.Radius.Medium.$value}px`,
        large: `${uiStyles.Radius.Large.$value}px`,
      },
      borderWidth: {
        DEFAULT: uiStyles.Stroke['Border Width'].$value, // e.g., 1
      },
    },
  },
}
