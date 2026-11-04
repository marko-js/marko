export function itemsFor(q: string) {
  return [1, 2, 3].map((id) => ({ id, label: `${q}${id}` }));
}
