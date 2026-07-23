export const Dollar = 36; // $
export const Digit0 = 48; // 0
export const Digit9 = 57; // 9
export const UpperA = 65; // A
export const UpperZ = 90; // Z
export const Underscore = 95; // _
export const LowerA = 97; // a
export const LowerZ = 122; // z

type Self = typeof import("./char");
export type Value = Self[keyof Self];
