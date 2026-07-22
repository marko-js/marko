import { resolveAfter } from "../../utils/resolve";

// Mirrors run's `server import` client transform: server-only by design --
// see persisted-update-fragment-await/data.js.
export function getReport(topic) {
  if (typeof window !== "undefined") {
    throw new Error("getReport is server-only");
  }
  return resolveAfter(`report for ${topic}`, 1);
}
