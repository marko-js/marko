import type { TestConfig } from "../../main.test";
import { after, flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, after(2), flush, wait],
};
