import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: [{ on: true }, { on: false }] },
    { items: [{ on: true }, { on: true }, { on: false }] },
  ],
};
