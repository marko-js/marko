export const Walk = ".w";
export const Resume = ".r";
export const Patch = ".a";
export const Ready = ".b";
export const Scripts = ".j";

type Self = typeof import("./runtime-key");
export type Value = Self[keyof Self];
