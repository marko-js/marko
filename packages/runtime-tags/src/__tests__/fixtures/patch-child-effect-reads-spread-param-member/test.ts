import type { TestConfig } from "../../main.test";

// A child's script reading an object a call spreads from its own input, which the
// call doesn't build, re-runs as that object changes.
export const config: TestConfig = {
  patches: true,
  same_input_divergence:
    "Each patch ships `input.props.item` as a new object, and values compare by identity, so the child's effect re-runs.",
  steps: [
    { props: { item: { label: "a" } } },
    { props: { item: { label: "b" } } },
  ],
};
