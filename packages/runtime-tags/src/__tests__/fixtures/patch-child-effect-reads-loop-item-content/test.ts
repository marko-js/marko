import type { TestConfig } from "../../main.test";
// Attribute-tag content a `<for>` made, held by a child's effect: its marked bind
// carries the row's render-only locals, so each patch binds it anew and the effect re-runs.
export const config: TestConfig = {
  patches: true,
  same_input_divergence:
    "Content with render-only locals binds anew on every patch, as plain's client render makes it anew on every update, a repeated input included: the effect writes its text again.",
  steps: [{ items: ["a", "b"] }, { items: ["c", "d"] }, { items: ["e", "f"] }],
};
