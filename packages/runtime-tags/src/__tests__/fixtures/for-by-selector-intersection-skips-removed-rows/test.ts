import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { flag: false, items: [{ id: 1 }, { id: 2 }], sel: 1 },
    { flag: false, items: [{ id: 1 }], sel: 2 },
  ],
};
