// Mirrors run's `server import` client transform: server-only implementation,
// so the widget's text can only come off the wire.
export const getLabel =
  typeof window === "undefined"
    ? (topic) => `${topic} report`
    : undefined;
