let count =
  typeof process === "undefined"
    ? 0
    : Number(process.env.MARKO_REASONLESS_IF_COUNT || 0);

export function showPrimary() {
  return ++count % 2 === 1;
}
