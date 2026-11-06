import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  steps: [
    { tag: "span", rows: [{ id: 1 }] },
    { tag: "span", rows: [{ id: 1 }, { id: 2 }] },
  ],
};
