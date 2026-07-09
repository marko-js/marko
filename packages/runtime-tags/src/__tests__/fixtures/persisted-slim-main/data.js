// Stands in for a `server import`: callable during server renders only.
export function getResults(search) {
  if (typeof window !== "undefined") {
    throw new Error("getResults is server-only");
  }
  const all = ["alpha", "beta", "gamma", "delta"];
  const items = all
    .filter((name) => name.includes(search.q ?? ""))
    .map((name, i) => ({ id: i + 1, name }));
  return { total: items.length, totalPages: 3, items };
}
