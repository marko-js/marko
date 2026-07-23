export const Self = "self";
export const Descendant = "descendant";

type Self = typeof import("./class-hydration");
export type Value = Self[keyof Self];
