// Server-only tint: the constructed panel's style value can only come off
// the wire.
export const getTint =
  typeof window === "undefined" ? () => "teal" : undefined;
