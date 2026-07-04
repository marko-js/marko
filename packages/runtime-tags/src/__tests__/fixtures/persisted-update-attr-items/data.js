// Stands in for a `server import`: callable during server renders only.
export function getCategories() {
  if (typeof window !== "undefined") {
    throw new Error("getCategories is server-only");
  }
  return ["alpha", "beta", "gamma"];
}
