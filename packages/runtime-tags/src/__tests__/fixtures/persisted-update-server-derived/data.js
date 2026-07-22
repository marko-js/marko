// Stands in for a `server import`: callable during server renders only.
export function getDetails(id) {
  if (typeof window !== "undefined") {
    throw new Error("getDetails is server-only");
  }
  return { name: `Part ${id}`, price: id * 10 };
}
