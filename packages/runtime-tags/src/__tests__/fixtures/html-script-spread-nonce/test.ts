import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      attrs: { id: "a" },
      $global: {
        cspNonce: "default-nonce",
        serializedGlobals: { cspNonce: true },
      },
    },
  ],
};
