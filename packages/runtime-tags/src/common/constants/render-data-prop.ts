export const PatchBuild = "n";
export const HeldShells = "k";
export const PatchStop = "q";

type Self = typeof import("./render-data-prop");
export type Value = Self[keyof Self];
