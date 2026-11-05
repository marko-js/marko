import type { TestConfig } from "../../main.test";

// The page's only client code is an effect, so no scope carries the globals.
export const config: TestConfig = {
  steps: [{ $global: { brand: "Marko", serializedGlobals: ["brand"] } }],
};
