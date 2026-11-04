import type { TestConfig } from "../../main.test";

// Content a loop row creates from its shell gets the attribute tag `<for>`
// local a script reads as a seed: the page links the patcher that writes it.
export const config: TestConfig = {
  patches: true,
  steps: [{ labels: [] }, { labels: ["a"] }],
};
