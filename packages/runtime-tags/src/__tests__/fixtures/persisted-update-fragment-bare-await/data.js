import { resolveAfter } from "../../utils/resolve";

// Mirrors run's `server import` client transform: server-only by design, so
// the fragment's content can only come off the wire -- see
// persisted-update-fragment-await/data.js.
export function getReport(range) {
  if (typeof window !== "undefined") {
    throw new Error("getReport is server-only");
  }
  return resolveAfter(`report for ${range}`, 1);
}
