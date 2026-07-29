// Server-only unit label: the constructed panel's fill can only come off
// the wire.
export const getUnit =
  typeof window === "undefined" ? () => "widgets" : undefined;
