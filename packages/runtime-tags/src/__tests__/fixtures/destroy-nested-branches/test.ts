import type { TestConfig } from "../../main.test";
import { destroy } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, destroy],
};
