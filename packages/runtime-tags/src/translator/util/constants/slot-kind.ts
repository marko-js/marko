// A binding's value.
export const Value = 0;
// A controlled `<let>`'s change handler, which an assignment to it calls.
export const ChangeHandler = 1;
// The scopes reading a closure, which its changes notify.
export const ClosureScopes = 2;
// A reading scope's place among the signals of a closure it reads.
export const ClosureSignalIndex = 3;
// The expression a control-flow tag branches on (an `<if>` condition, a `<for>`
// collection, a `<show>` display), which client code reads again as it changes.
export const BranchExpr = 4;
// A known tag's content param group, as its call site guards it.
export const ParamGroup = 5;
// The scope itself.
export const Scope = 6;
// A scope's link to its owner scope.
export const Owner = 7;
// A template's `<return valueChange>` handler.
export const ReturnChangeHandler = 8;
// A resumed branch's scope, which its tag's markers carry.
export const Branch = 9;
// A section's scopes, which its owner holds so hoisted reads reach them.
export const Instances = 10;

type Self = typeof import("./slot-kind");
export type Value = Self[keyof Self];
