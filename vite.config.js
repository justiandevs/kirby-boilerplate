import { resolve } from 'path'
import kirby from 'vite-plugin-kirby'
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';

export default ({ mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',

  build: {
    outDir: resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    rollupOptions: { input: resolve(process.cwd(), 'src/index.js') }
  },

  css: {
    postcss: {
      plugins: [
        postcssNested,
        postcssImport
      ]
    }
  },

  plugins: [
    kirby({ watch: ['../site/(templates|snippets|controllers|models|layouts)/**/*.twig', '../site/(templates|snippets|controllers|models|layouts)/**/*.php', '../content/**/*']})
  ]
})
