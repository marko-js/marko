import type { TestConfig } from "../../main.test";

// `@catch` content reading a `$global`-derived value: the derivation
// delivers as a fill each frame, so the catch UI renders the rejecting
// patch's brand, not the initial render's.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { promise: Promise.resolve("ok"), $global: { brand: "acme" } },
    { promise: Promise.reject(new Error("boom")), $global: { brand: "bmce" } },
  ],
};
