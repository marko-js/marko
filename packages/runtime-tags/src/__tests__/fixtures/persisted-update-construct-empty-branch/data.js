// Server-only badge: the constructed panel's fill can only come off the wire.
export const getBadge =
  typeof window === "undefined" ? () => "beta" : undefined;
