import type { TestConfig } from "../../main.test";

// A server-fed dynamic tag: input changes ride the rendered subtree's own
// patch writes; a renderer swap re-renders through the dynamic tag entry
// (the dom module's registration on an interactive page).
export const config: TestConfig = {
  patches: true,
  steps: [
    { mode: "a", label: "one" },
    { mode: "a", label: "two" },
    { mode: "b", label: "three" },
  ],
};
