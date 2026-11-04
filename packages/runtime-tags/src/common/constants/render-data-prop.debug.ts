export const PatchBuild = "patchBuild";
export const HeldShells = "heldShells";
export const PatchStop = "patchStop";

type Self = typeof import("./render-data-prop.debug");
export type Value = Self[keyof Self];
