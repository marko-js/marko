import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ x: 1, y: 2, z: 3, label: "a", items: [{ name: "i", make() {} }] }],
};
