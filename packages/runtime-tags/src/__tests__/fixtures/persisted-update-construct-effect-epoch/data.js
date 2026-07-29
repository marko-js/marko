// Server-only note: the constructed panel's fill can only come off the wire.
export const getNote =
  typeof window === "undefined" ? () => "fresh" : undefined;
