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
// Pushed by the reorder runtime before a reordered chunk's visits, carrying the
// chunk's root id (a `<try>` body's branch id); the walk's end closes it.
export const ReorderStart = "*";

type Self = typeof import("./resume-symbol");
export type Value = Self[keyof Self];
