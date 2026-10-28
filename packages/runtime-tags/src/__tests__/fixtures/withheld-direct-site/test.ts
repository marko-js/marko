import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", rows: [{ id: 1 }] },
    { label: "a", rows: [{ id: 1 }, { id: 2 }] },
    { label: "b", rows: [{ id: 1 }, { id: 2 }] },
    { label: "c", rows: [{ id: 1 }, { id: 2 }, { id: 3 }] },
  ],
};
