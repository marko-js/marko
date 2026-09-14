import type { TestConfig } from "../../main.test";

// Content body holes close over $global, root input, and loop item.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      prefix: "p",
      items: ["a", "b"],
      $global: { brand: "Acme", serializedGlobals: ["brand"] },
    },
    {
      prefix: "q",
      items: ["a", "b"],
      $global: { brand: "Acme", serializedGlobals: ["brand"] },
    },
    {
      prefix: "q",
      items: ["a", "c", "d"],
      $global: { brand: "Zed", serializedGlobals: ["brand"] },
    },
  ],
};
