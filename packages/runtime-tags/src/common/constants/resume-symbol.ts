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
// Opens a span of reordered visits for the branch its id names (a `<try>`'s, by
// its body's reorder id or a `@catch`'s marker); an empty one closes it.
export const ReorderStart = "*";

type Self = typeof import("./resume-symbol");
export type Value = Self[keyof Self];
