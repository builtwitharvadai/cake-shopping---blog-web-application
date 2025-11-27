// Polyfill TextEncoder/TextDecoder for Jest environment (required by undici)
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import '@testing-library/jest-dom';
import { Request, Response, Headers, FormData } from 'undici';

// Polyfill Web APIs for Next.js server components
global.Request = Request;
global.Response = Response;
global.Headers = Headers;
global.FormData = FormData;