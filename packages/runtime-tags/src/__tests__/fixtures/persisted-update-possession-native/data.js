// Mirrors run's `server import` client transform: the identifier exists in
// both environments but the implementation is server-only, so the swapped-in
// branch's text can only come off the wire (never client-constructed).
export const getNote =
  typeof window === "undefined"
    ? (topic) => `${topic} notes`
    : undefined;
