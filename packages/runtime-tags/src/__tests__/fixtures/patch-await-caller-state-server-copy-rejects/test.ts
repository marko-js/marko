import type { TestConfig } from "../../main.test";
import { rejectAfter, resolveAfter, wait } from "../../utils/resolve";

// The client's promise settled; the server's copy of it rejects.
export const config: TestConfig = {
  patches: true,
  // The client keeps its own promise, which a fresh render of the input lacks.
  skip_fresh_render: true,
  csr_divergence:
    "A rejected server copy renders no body, so the body's server hole (the label) keeps its last value.",
  steps: () => [
    { label: "a", promise: resolveAfter("a") },
    wait,
    { label: "b", promise: rejectAfter(new Error("server copy")) },
    wait,
  ],
};
