import type { TestConfig } from "../../main.test";

// Attribute tags rendered by fed renderers: a hole in one and a static
// body in the other both stay current at a server-owned site.
export const config: TestConfig = {
  persisted: true,
  steps: [{ h: "a" }, { h: "b" }],
};
