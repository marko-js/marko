import { resolveAfter } from "../../utils/resolve";

// Mirrors run's `server import` client transform: server-only by design, so
// the items' values can only come off the wire.
export function getRatings(topic) {
  if (typeof window !== "undefined") {
    throw new Error("getRatings is server-only");
  }
  return resolveAfter(["good", "great", "amazing"], 1);
}
