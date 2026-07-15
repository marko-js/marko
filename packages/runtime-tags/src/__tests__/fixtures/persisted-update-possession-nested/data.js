// server-only label so the swapped-in panel is never client-constructed.
export const getLabel =
  typeof window === "undefined" ? (topic) => `${topic} report` : undefined;
