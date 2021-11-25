export const numberPattern = /\d+/g;

export const formatCPF = value => {
  const auxCPF = (value || '').match(numberPattern);
  const _CPF = (auxCPF || []).join('');
  if (_CPF.length > 9)
    return (
      _CPF.slice(0, 3) +
      '.' +
      _CPF.slice(3, 6) +
      '.' +
      _CPF.slice(6, 9) +
      '-' +
      _CPF.slice(9, 11)
    );
  if (_CPF.length > 6)
    return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9);
  if (_CPF.length > 3) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6);
  return _CPF;
};
