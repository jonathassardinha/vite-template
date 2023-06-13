import { defineConfig } from 'vitest/config';
import { BaseSequencer, Vitest, WorkspaceSpec } from 'vitest/node';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

class Sequencer extends BaseSequencer {
  constructor(ctx: Vitest) {
    super(ctx);
  }

  async sort(files: WorkspaceSpec[]) {
    files.sort((file1, file2) => file1[1].localeCompare(file2[1]));

    return files;
  }
}

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
    sequence: {
      sequencer: Sequencer,
    },
  },
}));
