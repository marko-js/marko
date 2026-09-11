import type { TestConfig } from "../../main.test";

// A `$global` read in a child a server-owned dynamic tag renders is a hole
// a patch fills through the paired site: the page render joins nothing.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { on: true, $global: { brand: "a", serializedGlobals: ["brand"] } },
    { on: true, $global: { brand: "b", serializedGlobals: ["brand"] } },
    { on: false, $global: { brand: "b", serializedGlobals: ["brand"] } },
    { on: true, $global: { brand: "c", serializedGlobals: ["brand"] } },
  ],
};
