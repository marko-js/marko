// Mirrors run's `server import` client transform: the identifiers exist in
// both environments but the implementations are server-only, so divergent
// branch content can only arrive off the wire.
export const getNote =
  typeof window === "undefined"
    ? (panel, topic) => `panel ${panel} covers ${topic}`
    : undefined;

export const getItems =
  typeof window === "undefined"
    ? (range) =>
        [
          { id: 1, name: "alpha" },
          { id: 2, name: "beta" },
          range === "wide" && { id: 3, name: "gamma" },
        ].filter(Boolean)
    : undefined;
