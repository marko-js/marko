// Stands in for a `server import`: callable during server renders only.
export function getItem(id) {
  if (typeof window !== "undefined") {
    throw new Error("getItem is server-only");
  }
  return {
    id,
    title: `Item ${id}`,
    category: id % 2 ? "odd" : "even",
  };
}
