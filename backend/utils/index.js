const checkType = val => {
  const type = String(typeof val).toLowerCase();
  const listTypes = {
    number: 'number',
    boolean: 'boolean',
    string: 'string',
    nulo: 'null',
    undefined: 'undefined',
    array: 'array',
    object: 'object',
  };

  if (Array.isArray(val)) return listTypes['array'];

  if (val === null) return listTypes['nulo'];

  return listTypes[type];
};

function clear(value) {
  return value && String(value).replace(/[^0-9]/g, '');
}

module.exports = { checkType, clear };
