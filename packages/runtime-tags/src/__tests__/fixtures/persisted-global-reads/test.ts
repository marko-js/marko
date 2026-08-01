import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  persisted: true,
  steps: [
    { name: "first", $global: { brand: "Marko", locale: "en" } },
    { name: "second", $global: { brand: "Runtime", locale: "fr" } },
  ],
};
