export const getLabel =
  typeof window === "undefined" ? (topic) => `${topic}` : undefined;
