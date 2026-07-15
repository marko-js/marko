// Mirrors run's `server import` client transform: the identifier exists in
// both environments but the implementation is server-only, so the note's
// value can only arrive off the wire.
export const getNote =
  typeof window === "undefined" ? (topic) => `${topic} brief` : undefined;
