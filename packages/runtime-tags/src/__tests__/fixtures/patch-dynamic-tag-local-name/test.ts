import type { TestConfig } from "../../main.test";

// A dynamic tag named by a render-local binding in a child.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", $global: { brand: "x", serializedGlobals: ["brand"] } },
    { title: "b", $global: { brand: "y", serializedGlobals: ["brand"] } },
  ],
};
