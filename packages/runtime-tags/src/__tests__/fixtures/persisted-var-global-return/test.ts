import type { TestConfig } from "../../main.test";

// A tag variable derived from `$global` in the child recomputes from the
// re-shipped bag; the parent hole follows.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { locale: "en", serializedGlobals: ["locale"] } },
    { $global: { locale: "fr", serializedGlobals: ["locale"] } },
    { $global: { locale: "de", serializedGlobals: ["locale"] } },
  ],
};
