import {heroui} from '@heroui/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "// scan all relevant files",
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 15px #FF6500, 0 0 30px #FF6500",
          },
          "50%": {
            boxShadow: "0 0 25px #FF6500, 0 0 50px #FF6500",
          },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
                glow: "glow 2s infinite ease-in-out",

      },
    },
  },
  plugins: [heroui()],
};

export default config;
