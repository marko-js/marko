import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{ value: 1 }, click("#load"), wait],
  equivalent: false,
};
