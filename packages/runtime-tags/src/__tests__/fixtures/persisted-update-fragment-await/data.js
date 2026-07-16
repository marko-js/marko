import { resolveAfter } from "../../utils/resolve";

// Mirrors run's `server import` client transform: server-only implementation,
// so the fragment subtree's values can only come off the wire.
export const getProfile =
  typeof window === "undefined"
    ? (user) => ({
        greeting: `hello ${user}`,
        plan: user === "ada" ? "pro" : "free",
      })
    : undefined;

export function getReports(range) {
  if (typeof window !== "undefined") {
    throw new Error("getReports is server-only");
  }
  // "day" yields a single report on purpose: a fragment-walked loop binds a
  // lone branch bare (resume-form), which later loop merges must normalize.
  return resolveAfter(
    [
      { name: "views", value: range === "week" ? 70 : 10 },
      range === "week" && { name: "clicks", value: 21 },
      range === "week" && { name: "sales", value: 7 },
    ].filter(Boolean),
    1,
  );
}
