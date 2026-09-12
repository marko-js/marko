import type { TestConfig } from "../../main.test";

// A scriptless page reads a server-only module for a static attribute the
// flush always writes: the entry links the page's patch features, never
// the page module, so the browser never evaluates that import.
export const config: TestConfig = {
  persisted: true,
  steps: [{ msg: "a" }, { msg: "b" }],
};
