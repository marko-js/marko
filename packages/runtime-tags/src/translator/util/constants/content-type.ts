export const Comment = 0;
export const Dynamic = 1;
export const Placeholder = 2;
export const Tag = 3;
export const Text = 4;
// Dynamic content whose range is not reachable from the branch chain that
// repairs edges: `<show>` inlines its body into the enclosing scope, and
// `<await>`/`<try>` move their own anchors. These still need edge padding.
export const DynamicAnchored = 5;

type Self = typeof import("./content-type");
export type Value = Self[keyof Self];
