import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ items: ["a", "b", "c"] }, wait, { items: ["c", "a"] }, wait],
};
