export const parse = "parse";
export const migrate = "migrate";
export const transform = "transform";
export const analyze = "analyze";
export const translate = "translate";

type Self = typeof import("./compile-stage");
export type Value = Self[keyof Self];
