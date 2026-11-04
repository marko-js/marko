import type { TestConfig } from "../../main.test";
// A function the caller chooses, called as a method of the child's input: main's
// analysis reads the input whole, so the script re-runs as the input's slot changes.
export const config: TestConfig = {
  patches: true,
  same_input_divergence:
    "A server-built object read whole re-runs its effect when written, as a document load would.",
  steps: [
    { upper: true, title: "a" },
    { upper: true, title: "b" },
    { upper: false, title: "b" },
  ],
};
