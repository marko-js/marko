let count =
  typeof process === "undefined"
    ? 0
    : Number(process.env.MARKO_REASONLESS_TAG_COUNT || 0);

export function pickTemplate<T>(first: T, second: T) {
  return ++count % 2 === 1 ? first : second;
}
