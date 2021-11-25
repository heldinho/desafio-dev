export * from './date';
export * from './fonts';
export * from './format';
export * from './moneyMask';
export * from './responsive';

// export function getTime() {
//   const time = date.getTime(new Date());
//   return date.format(new Date(time), 'dd/MM/yyyy - HH:mm');
// }

export function clear(value) {
  return value && String(value).replace(/[^0-9]/g, '');
}
