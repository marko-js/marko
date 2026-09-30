// The scope ids a binding holds right after its own, by what is kept there: at
// the owner's id plus this offset, where the runtime reads it.
export const ChangeHandler = 1; // a `<let>`'s change handler (`_let_change`)
export const ScopeOffset = 1; // a tag's scope offset, after its node (the walker)

type Self = typeof import("./reserved-id");
export type Value = Self[keyof Self];
