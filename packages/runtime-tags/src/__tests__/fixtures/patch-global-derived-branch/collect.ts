// Per-render state hung off `$global`, like a css collector: `collect`
// records, `collected` drains what was recorded since the last drain.
export function collect(global: object, item: string) {
  ((global as { seen?: string[] }).seen ??= []).push(item);
  return item;
}
export function collected(global: object) {
  const seen = (global as { seen?: string[] }).seen;
  return seen?.length ? seen.splice(0).join("+") : "";
}
