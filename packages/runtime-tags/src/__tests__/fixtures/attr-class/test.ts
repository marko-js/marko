import type { TestConfig } from "../../main";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { c: true, d: true, e: true, f: false, g: true, h: false },
    { c: false, d: false, e: false, f: false, g: false, h: false },
  ],
};
