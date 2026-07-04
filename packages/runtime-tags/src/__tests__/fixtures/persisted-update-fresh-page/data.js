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
