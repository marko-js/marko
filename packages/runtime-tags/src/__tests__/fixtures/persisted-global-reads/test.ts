import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      name: "first",
      $global: {
        brand: "Marko",
        locale: "en",
        serializedGlobals: ["brand", "locale"],
      },
    },
    {
      name: "second",
      $global: {
        brand: "Runtime",
        locale: "fr",
        serializedGlobals: ["brand", "locale"],
      },
    },
  ],
};
