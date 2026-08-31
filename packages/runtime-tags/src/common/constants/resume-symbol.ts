// Ordered above the walker's `> "#"` visit threshold as text < html < branch
// so resume routes each visit group with a single comparison.
export const Node = "$";
export const EmptyText = "%";
export const HtmlStart = "&";
export const HtmlEnd = "'";
export const BranchStart = "[";
export const BranchEnd = "]";
export const BranchEndNativeTag = "(";
export const BranchEndSingleNode = "|";
export const BranchEndOnlyChildInParent = ")";
export const BranchEndSingleNodeOnlyChildInParent = "}";

type Self = typeof import("./resume-symbol");
export type Value = Self[keyof Self];
