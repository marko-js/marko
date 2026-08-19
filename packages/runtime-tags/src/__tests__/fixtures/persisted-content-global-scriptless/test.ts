import type { TestConfig } from "../../main.test";

// A `$global` hole inside a body fed to a child patches at the paired site
// and constructs at the other from the body's content record.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      title: "a",
      show: false,
      $global: { brand: "Acme", serializedGlobals: ["brand"] },
    },
    {
      title: "b",
      show: true,
      $global: { brand: "Zed", serializedGlobals: ["brand"] },
    },
    {
      title: "c",
      show: true,
      $global: { brand: "Zed", serializedGlobals: ["brand"] },
    },
    {
      title: "d",
      show: true,
      $global: { brand: "Qux", serializedGlobals: ["brand"] },
    },
  ],
};
