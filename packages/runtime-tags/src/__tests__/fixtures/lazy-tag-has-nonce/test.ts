import type { TestConfig } from "../../main.test";
import { flushHas, wait } from "../../utils/resolve";

// With `$global.cspNonce` set, the trigger script inlines the literal nonce
// on the `has` watcher's `<style>` and stamps it on the asset tags it inserts
// so both survive a CSP without `unsafe-inline`.
export const config: TestConfig = {
  steps: [
    {
      value: 1,
      $global: {
        cspNonce: "default-nonce",
        serializedGlobals: { cspNonce: true },
      },
    },
    wait,
    flushHas,
    wait,
  ],
  equivalent: false,
};
