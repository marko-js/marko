import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ $global: { brand: "Marko", serializedGlobals: ["brand"] } }],
};
