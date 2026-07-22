export function getTitle(id: number) {
  return `server title ${id}`;
}

export function getRows(id: number) {
  return id === 1 ? ["one", "two"] : ["three"];
}
