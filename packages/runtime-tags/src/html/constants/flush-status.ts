export const complete = 0;
// `continue` is a reserved word, so it is bound locally and
// exported under the name call sites already use.
const continue_ = 1;
export { continue_ as continue };
export const aborted = 2;

type Self = typeof import("./flush-status");
export type Value = Self[keyof Self];
