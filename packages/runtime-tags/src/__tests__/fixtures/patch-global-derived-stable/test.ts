import type { TestConfig } from "../../main.test";

// A value derived from `$global` is never stable.
export const config: TestConfig = {
  patches: true,
  steps: [
    { name: "a", $global: { brand: "Marko", serializedGlobals: [] } },
    { name: "b", $global: { brand: "Runtime", serializedGlobals: [] } },
  ],
};
