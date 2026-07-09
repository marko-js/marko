import { resolveAfter } from "../../utils/resolve";

// Stands in for a `server import`: callable during server renders only.
export function getReviews(id) {
  if (typeof window !== "undefined") {
    throw new Error("getReviews is server-only");
  }
  return resolveAfter(
    [
      { id: 1, text: `Product ${id} works great`, stars: 5 },
      { id: 2, text: `Product ${id} is okay`, stars: 3 },
    ],
    1,
  );
}
