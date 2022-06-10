/* eslint-disable @typescript-eslint/no-empty-interface */
import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
  namespace Vi {
    interface Assertion<T> extends TestingLibraryMatchers<void, T> {}
    interface AsymmetricMatchersContaining<T>
      extends TestingLibraryMatchers<void, T> {}
  }
}
