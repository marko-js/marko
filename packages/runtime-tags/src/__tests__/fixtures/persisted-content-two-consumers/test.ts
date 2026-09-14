import type { TestConfig } from "../../main.test";

// One body rendered by two fed renderers in the child: each branch links
// separately, so both holes patch.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", note: "x" },
    { title: "b", note: "y" },
  ],
};
