import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ sync: "now" }, flush, wait],
};
