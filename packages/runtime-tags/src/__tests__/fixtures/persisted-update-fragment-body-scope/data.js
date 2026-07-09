import { resolveAfter } from "../../utils/resolve";

// Server-only async data (mirrors run's `server import` transform): the
// fragment body's values can only come off the wire.
export function getData(range) {
  if (typeof window !== "undefined") {
    throw new Error("getData is server-only");
  }
  return resolveAfter({ total: range === "week" ? 50 : 10 }, 1);
}
