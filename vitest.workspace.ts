import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      './packages/persist/vitest.config.ts',
      './packages/react-persist/vitest.config.ts',
    ],
  },
})
