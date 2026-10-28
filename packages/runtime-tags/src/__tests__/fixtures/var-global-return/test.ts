import type { TestConfig } from "../../main.test";

// patch-var-global-return without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { $global: { locale: "en", serializedGlobals: ["locale"] } },
    { $global: { locale: "fr", serializedGlobals: ["locale"] } },
    { $global: { locale: "de", serializedGlobals: ["locale"] } },
  ],
};
