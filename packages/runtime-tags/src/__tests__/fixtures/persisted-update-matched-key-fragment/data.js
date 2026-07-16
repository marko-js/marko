// Mirrors run's `server import` client transform: server-only implementation,
// so new loop items can only arrive off the wire.
export const getItems =
  typeof window === "undefined"
    ? (range) =>
        [
          { id: 1, name: "alpha" },
          { id: 2, name: "beta" },
          range === "wide" && { id: 3, name: "gamma" },
        ].filter(Boolean)
    : undefined;
