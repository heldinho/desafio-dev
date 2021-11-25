export const month = {
  1: 'JANEIRO',
  2: 'FEVEREIRO',
  3: 'MARÇO',
  4: 'ABRIL',
  5: 'MAIO',
  6: 'JUNHO',
  7: 'JULHO',
  8: 'AGOSTO',
  9: 'SETEMBRO',
  10: 'OUTUBRO',
  11: 'NOVEMBRO',
  12: 'DEZEMBRO'
}

export function replaceDateFront(date) {
  date = date.split('-')
  return `${date[2]} de ${month[date[1]]}`
}

export function replaceDateBack(date) {
  date = date.split('/')
  return `${date[2]}-${date[1]}-${date[0]}`
}
