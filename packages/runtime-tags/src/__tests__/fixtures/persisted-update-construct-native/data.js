// Mirrors run's `server import` client transform: server-only implementation,
// so the swapped-in branch's text can only come off the wire.
export const getNote =
  typeof window === "undefined"
    ? (topic) => `${topic} notes`
    : undefined;
