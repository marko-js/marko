import type { TestConfig } from "../../main.test";

// An aliased `$global` read is opaque, so it guards on the whole bag: a
// change to ANY serialized global re-runs the script (never goes stale).
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      $global: {
        brand: "Marko",
        other: "x",
        serializedGlobals: ["brand", "other"],
      },
    },
    {
      $global: {
        brand: "Marko",
        other: "y",
        serializedGlobals: ["brand", "other"],
      },
    },
    {
      $global: {
        brand: "Marko",
        other: "y",
        serializedGlobals: ["brand", "other"],
      },
    },
  ],
};
