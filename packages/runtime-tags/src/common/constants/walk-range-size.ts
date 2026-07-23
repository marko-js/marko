export const Next = 20; // 67 through 91
export const Over = 10; // 97 through 106
export const Out = 10; // 107 through 116
export const Multiplier = 10; // 117 through 126

type Self = typeof import("./walk-range-size");
export type Value = Self[keyof Self];
