// Mirrors run's `server import` client transform: the identifier exists in
// both environments but the implementation is server-only, so the swapped-in
// panel's text can only come off the wire (never client-constructed).
export const getLabel =
  typeof window === "undefined"
    ? (topic) => `${topic} report`
    : undefined;
