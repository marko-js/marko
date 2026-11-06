import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { flag: false, items: [{ name: "a" }, { name: "b" }] },
    { flag: false, items: [] },
  ],
};
