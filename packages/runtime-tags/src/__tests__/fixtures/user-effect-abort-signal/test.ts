import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ value: 0 }, wait, { value: 1 }, wait],
};
