import { resolveAfter } from "../../utils/resolve";

// Stand-ins for `server import`s: callable during server renders only.
export function getProduct(id) {
  if (typeof window !== "undefined") {
    throw new Error("getProduct is server-only");
  }
  return {
    id,
    title: `Product ${id}`,
    price: id * 100 + 0.5,
    image: `/images/${id}.svg`,
  };
}

export function getRecommendations(id) {
  if (typeof window !== "undefined") {
    throw new Error("getRecommendations is server-only");
  }
  return resolveAfter(
    [
      { id: id + 1, title: `Product ${id + 1}` },
      { id: id + 2, title: `Product ${id + 2}` },
    ],
    1,
  );
}

// Mirrors run's `server import` client transform: the identifier exists in
// both environments but the implementation is server-only.
export const getProducts =
  typeof window === "undefined"
    ? (ids) =>
        ids.map((id) => ({
          id,
          title: `Product ${id}`,
          price: id * 100 + 0.5,
        }))
    : undefined;

// A render-once list whose value never exists in the browser: fresh
// construction must build the loop's branches from the patch alone.
export const getTags =
  typeof window === "undefined" ? () => ["all", "dev", "news"] : undefined;
