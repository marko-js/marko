export const Node = "*";
export const BranchStart = "[";
export const BranchEnd = "]";
export const BranchEndNativeTag = "'";
export const BranchEndSingleNode = "|";
export const BranchEndOnlyChildInParent = ")";
export const BranchEndSingleNodeOnlyChildInParent = "}";

type Self = typeof import("./resume-symbol");
export type Value = Self[keyof Self];
