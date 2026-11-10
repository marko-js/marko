import type { TestConfig } from "../../main.test";

// An object built behind `??`: its script re-runs as the object's slot changes.
export const config: TestConfig = {
  patches: true,
  same_input_divergence:
    "A server-built object read whole re-runs its effect when written, as a document load would.",
  steps: [{ title: "a" }, { title: "b" }, { title: "b" }],
};
