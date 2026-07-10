import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  // SSR escapes ">" in comment text as "&gt;", but comments never decode
  // character references, so the SSR comment data differs from CSR.
  equivalent: false,
  steps: [{ text: "a > b" }],
};
