import type { TestConfig } from "../../main.test";

// Scriptless: a content body switching arms (static, with a hole, none)
// pairs and swaps from its record with no dom module.
export const config: TestConfig = {
  persisted: true,
  steps: [{ kind: "a" }, { kind: "b" }, { kind: undefined }, { kind: "a" }],
};
