import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A patch page's document serializes its nonce unasked: the client stamps it
// on what it creates after a patch, and runs each frame with it.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { page: 0, $global: { cspNonce: "doc" } },
    wait,
    { page: 1, $global: { cspNonce: "patch" } },
    wait,
  ],
};
