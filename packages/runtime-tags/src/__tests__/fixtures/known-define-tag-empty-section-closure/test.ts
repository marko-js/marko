import type { TestConfig } from "../../main";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, flush, wait],
};
