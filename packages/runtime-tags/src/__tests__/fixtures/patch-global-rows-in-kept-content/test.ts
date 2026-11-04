import type { TestConfig } from "../../main.test";

// Kept content reads `$global`, directly and in its rows.
export const config: TestConfig = {
  patches: true,
  steps: [
    { n: 2, $global: { brand: "a", serializedGlobals: ["brand"] } },
    { n: 2, $global: { brand: "b", serializedGlobals: ["brand"] } },
  ],
};
