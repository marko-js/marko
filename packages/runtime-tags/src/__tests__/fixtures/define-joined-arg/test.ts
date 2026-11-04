import type { TestConfig } from "../../main.test";

// patch-define-joined-arg without patches.
export const config: TestConfig = {
  steps: [{ q: "/a?", item: "1" }],
};
