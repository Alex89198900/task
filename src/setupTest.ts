import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import './testServer';

expect.extend(matchers);
