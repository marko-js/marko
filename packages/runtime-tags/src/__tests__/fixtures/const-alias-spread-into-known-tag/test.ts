import type { TestConfig } from "../../main.test";

// An alias spread into a known tag whose every read prop is overridden stays
// declared, so what it aliases does too.
export const config: TestConfig = {
  steps: [{}],
};
