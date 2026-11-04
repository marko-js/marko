import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A patch response's nonce is not the document's: what the client creates after
// it takes the nonce the document's CSP allows.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    {
      page: 0,
      $global: { cspNonce: "doc", serializedGlobals: { cspNonce: true } },
    },
    wait,
    {
      page: 1,
      $global: { cspNonce: "patch", serializedGlobals: { cspNonce: true } },
    },
    wait,
  ],
};
