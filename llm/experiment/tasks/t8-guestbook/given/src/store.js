export const entries = [];

export function addEntry(message) {
  entries.push({ id: entries.length + 1, message });
}
