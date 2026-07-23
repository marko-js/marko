export const Placeholder = "!^";
export const PlaceholderEnd = "!";
export const ReorderMarker = "#";

type Self = typeof import("./mark");
export type Value = Self[keyof Self];
