import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    './src/async-persister/index.ts',
    './src/compare/index.ts',
    './src/index.ts',
    './src/persister/index.ts',
    './src/storage-persister/index.ts',
    './src/types/index.ts',
    './src/utils/index.ts',
  ],
  format: ['esm', 'cjs'],
  unbundle: true,
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  fixedExtension: false,
  exports: true,
  publint: {
    strict: true,
  },
})
