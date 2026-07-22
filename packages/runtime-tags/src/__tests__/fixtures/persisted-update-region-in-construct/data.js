// Server-only implementation: constructed rows can only come off the wire.
export const getRows =
  typeof window === "undefined"
    ? (kind) => [`${kind} one`, `${kind} two`]
    : undefined;
