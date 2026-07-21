import { rejectAfter, resolveAfter } from "../../utils/resolve";

// Server-only async data; the "broken" mode rejects after the first flush so
// the failure always happens while the render is streaming.
export function getFeed(mode) {
  if (typeof window !== "undefined") {
    throw new Error("getFeed is server-only");
  }
  return mode === "broken"
    ? rejectAfter(new Error("feed unavailable"), 1)
    : resolveAfter(mode === "ok2" ? "still ok" : "all systems go", 1);
}
