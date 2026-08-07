import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { useKey: true, items: [{ id: 1, name: "a" }] },
    { useKey: false, items: [{ id: 1, name: "b" }] },
  ],
};
