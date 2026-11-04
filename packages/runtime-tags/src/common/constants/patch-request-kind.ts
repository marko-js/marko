// What `patchRequestKind` reads a `~`-marked request as, in every build.
// A patch this build renders.
export const Patch = "patch";
// Another build's request, which the server refuses unrendered.
export const Stale = "stale";

type Self = typeof import("./patch-request-kind");
export type Value = Self[keyof Self];
