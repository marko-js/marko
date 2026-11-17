import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The nonce reaches a script the client renders without `serializedGlobals`.
export const config: TestConfig = {
  steps: [{ $global: { cspNonce: "default-nonce" } }, wait],
};
