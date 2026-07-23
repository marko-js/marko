export const Enter = 0;
export const Exit = 1;

type Self = typeof import("./step");
export type Value = Self[keyof Self];
