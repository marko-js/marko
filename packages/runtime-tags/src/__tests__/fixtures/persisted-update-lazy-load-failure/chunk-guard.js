// Models deploy skew: once the flag flips, the lazy chunk can no longer
// load (its evaluation fails the dynamic import, like a 404 would).
export const assertChunkLoadable = () => {
  if (typeof window !== "undefined" && window.__MARKO_LAZY_CHUNK_GONE__) {
    throw new Error("lazy chunk unavailable");
  }
};
