export function numberToReal(num) {
  const newNum = num.toFixed(2).split('.');
  newNum[0] = 'R$ ' + newNum[0].split(/(?=(?:...)*$)/).join('.');
  return newNum.join(',');
}
