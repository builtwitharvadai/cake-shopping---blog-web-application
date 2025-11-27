const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Setup testing environment for Next.js

import '@testing-library/jest-dom';
import { Request, Response, Headers, FormData } from 'undici';

// Polyfill Web APIs for Next.js server components
global.Request = Request;
global.Response = Response;
global.Headers = Headers;
global.FormData = FormData;

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));