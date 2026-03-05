import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [
    {
      $global: {
        cspNonce: "default-nonce",
        serializedGlobals: { cspNonce: true },
      },
    },
    wait,
  ],
};
