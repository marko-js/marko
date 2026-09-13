import type { TestConfig } from "../../main.test";

// Scriptless: a content body with a hole inside a constructed branch
// constructs from its record and stays current while paired.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, text: "x" },
    { show: true, text: "x" },
    { show: true, text: "y" },
    { show: false, text: "y" },
    { show: true, text: "z" },
  ],
};
