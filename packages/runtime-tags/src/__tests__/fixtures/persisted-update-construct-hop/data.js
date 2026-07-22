// Mirrors run's `server import` client transform: server-only implementation,
// so the fragment subtree's values can only come off the wire.
export const getSession =
  typeof window === "undefined"
    ? (user) => ({
        greeting: `hello ${user}`,
        plan: user === "ada" ? "pro" : "free",
      })
    : undefined;

export const getMetrics =
  typeof window === "undefined"
    ? (range) =>
        [
          { name: "views", value: range === "week" ? 70 : 10 },
          { name: "clicks", value: range === "week" ? 21 : 3 },
          range === "week" && { name: "sales", value: 7 },
        ].filter(Boolean)
    : undefined;
