export const PatchBuild = "patchBuild";
export const PatchToken = "patchToken";
export const PatchResponse = "patchResponse";

type Self = typeof import("./render-data-prop.debug");
export type Value = Self[keyof Self];
