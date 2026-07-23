// Server-only compute: fresh construction cannot re-run it client-side.
const getServerProduct =
  typeof window === "undefined"
    ? (id) => ({ id, title: `Product ${id}` })
    : undefined;

export { getServerProduct };
