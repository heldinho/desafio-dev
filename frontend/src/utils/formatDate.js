export function formatDateToFront(date) {
  const yyyy = date.substr(0, 4);
  const mm = date.substr(4, 2);
  const dd = date.substr(6, 2);
  return `${dd}/${mm}/${yyyy}`;
}
