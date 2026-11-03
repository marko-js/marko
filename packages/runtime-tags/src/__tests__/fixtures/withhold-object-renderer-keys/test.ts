import type { TestConfig } from "../../main.test";

const mode = {
  a: "a0",
  e: 99,
  id: "__tests__/template.marko_1*content",
  owner: 99,
};

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { on: false, note: "a", mode },
    { on: false, note: "b", mode },
    { on: true, note: "c", mode },
  ],
};
