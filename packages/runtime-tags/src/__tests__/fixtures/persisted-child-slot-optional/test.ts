import type { TestConfig } from "../../main.test";

// A server-owned child with an EMPTY optional content slot patches
// normally: the poison only rides a rendered (non-nullish) renderer.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, { title: "b" }, { title: "c" }],
};
