// Mirrors run's `server import` client transform: server-only implementation,
// so the swapped-in panel's text can only come off the wire.
export const getLabel =
  typeof window === "undefined"
    ? (topic) => `${topic} report`
    : undefined;

// No reactive sources at all: the value must still fill constructed panels.
export const getMotto =
  typeof window === "undefined" ? () => "always in stock" : undefined;
