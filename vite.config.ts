import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => ({
  plugins: [react(), svgr(), tsconfigPaths()],
  esbuild: {
    exclude: mode === 'test' ? [] : ['src/**/*.test.*'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    include: ['./src/**/*.test.tsx'],
  },
}));
