export * from './types';
export * from './convertAmount';
export * from './formatDate';

export function clear(value) {
  return value && String(value).replace(/[^0-9]/g, '');
}
