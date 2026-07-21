import { resolveAfter } from "../../utils/resolve";

// Server-only async data; the summary settles a tick before the detail, so
// the outer boundary body always flushes while the inner is still pending.
export function getSummary(topic) {
  if (typeof window !== "undefined") {
    throw new Error("getSummary is server-only");
  }
  return resolveAfter(`${topic} summary`, 1);
}

export function getDetail(topic) {
  if (typeof window !== "undefined") {
    throw new Error("getDetail is server-only");
  }
  return resolveAfter(`${topic} detail`, 2);
}
