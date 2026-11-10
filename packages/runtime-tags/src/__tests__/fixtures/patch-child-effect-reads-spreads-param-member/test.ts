import type { TestConfig } from "../../main.test";

// A child's script reading an object two spreads of the call's own input may pass,
// which the call doesn't build, re-runs as that object changes.
export const config: TestConfig = {
  patches: true,
  same_input_divergence:
    "Each patch ships `input.b.item` as a new object, and values compare by identity, so the child's effect re-runs.",
  steps: [
    { a: {}, b: { item: { label: "a" } } },
    { a: {}, b: { item: { label: "b" } } },
  ],
};
