let counter = 0;

export function nextValue() {
  return `server-${++counter}`;
}
