export const Node = "*";
export const BranchStart = "[";
// A range the branch chain cannot repair the edges of: `<show>` inlines its
// body into the enclosing scope and `<await>`/`<try>` move their own anchors,
// so for these the markers stay in place as the range itself.
export const BranchStartAnchored = "{";
export const BranchEnd = "]";
export const BranchEndNativeTag = "'";
export const BranchEndSingleNode = "|";
export const BranchEndOnlyChildInParent = ")";
export const BranchEndSingleNodeOnlyChildInParent = "}";

type Self = typeof import("./resume-symbol");
export type Value = Self[keyof Self];
