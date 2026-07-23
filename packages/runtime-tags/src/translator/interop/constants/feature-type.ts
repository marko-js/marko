export const Class = "class";
export const Tags = "tags";

type Self = typeof import("./feature-type");
export type Value = Self[keyof Self];
