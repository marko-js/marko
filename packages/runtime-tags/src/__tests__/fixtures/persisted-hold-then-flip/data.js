export const getLabel =
  typeof window === "undefined" ? (topic) => `${topic}` : undefined;
export const serverLoopSentinel =
  typeof window === "undefined" ? () => "server-only loop sentinel" : undefined;
