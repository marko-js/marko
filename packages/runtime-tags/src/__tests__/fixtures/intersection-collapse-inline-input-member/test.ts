import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { list: [] },
    { list: [{ on: true }, { on: false }] },
    { list: [{ on: true }] },
  ],
};
