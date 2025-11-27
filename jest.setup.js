import '@testing-library/jest-dom';
import { Request, Response, Headers, FormData } from 'undici';

// Polyfill Web APIs for Next.js server components
global.Request = Request;
global.Response = Response;
global.Headers = Headers;
global.FormData = FormData;