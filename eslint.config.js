import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import tailwind from 'eslint-plugin-tailwindcss'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      tailwindcss: tailwind,
    },
    rules: {
      ...tailwind.configs.recommended.rules,
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          whitelist: [
            'glass-card',
            'bento-grid',
            'technical-divider',
            'step-number',
            'material-symbols-outlined',
            'mono',
          ],
        },
      ],
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    settings: {
      tailwindcss: {
        cssConfigPath: 'src/index.css',
        whitelist: [
          'glass-card',
          'bento-grid',
          'technical-divider',
          'step-number',
          'material-symbols-outlined',
          'mono',
        ],
      },
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
])
