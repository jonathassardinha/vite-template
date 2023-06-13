/* eslint-disable import/no-extraneous-dependencies */
import { TextEncoder, TextDecoder } from 'util';
import 'vitest-dom/extend-expect';

// jsdom doest not have these objects defined in global, so we need to polyfill it
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

// This is needed for the react-slick package
const mockMatchMedia = () => ({
  matches: false,
  addListener() {},
  removeListener() {},
});

global.matchMedia = global.matchMedia || mockMatchMedia;

const addActType = (obj: object) =>
  obj as typeof obj & { IS_REACT_ACT_ENVIRONMENT: boolean };

addActType(global).IS_REACT_ACT_ENVIRONMENT = true;
addActType(globalThis).IS_REACT_ACT_ENVIRONMENT = true;
