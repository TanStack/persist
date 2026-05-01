import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    './src/async-persister.ts',
    './src/compare.ts',
    './src/index.ts',
    './src/persister.ts',
    './src/storage-persister.ts',
    './src/types.ts',
    './src/utils.ts',
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
