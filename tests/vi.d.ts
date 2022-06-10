import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
  namespace Vi {
    type Assertion<T> = TestingLibraryMatchers<void, T>;
    type AsymmetricMatchersContaining<T> = TestingLibraryMatchers<void, T>;
  }
}
