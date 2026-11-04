import type { TestConfig } from "../../main.test";
// A child's script calling a method of its input reads the input whole, as main's
// analysis does: it re-runs as the input's slot changes.
export const config: TestConfig = {
  patches: true,
  same_input_divergence:
    "A server-built object read whole re-runs its effect when written, as a document load would.",
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
