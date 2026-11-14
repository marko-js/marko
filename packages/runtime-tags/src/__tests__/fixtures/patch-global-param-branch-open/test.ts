import type { TestConfig } from "../../main.test";

// A client branch open on the server keeps its reads current, mixed with a
// param or not.
export const config: TestConfig = {
  patches: true,
  steps: [
    { name: "n", $global: { brand: "Marko", serializedGlobals: ["brand"] } },
    { name: "n", $global: { brand: "Next", serializedGlobals: ["brand"] } },
  ],
};
