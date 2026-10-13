export const PatchBuild = "n";
export const PatchToken = "k";
export const PatchResponse = "q";

type Self = typeof import("./render-data-prop");
export type Value = Self[keyof Self];
