import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";
export const config: TestConfig = {
  steps: [{ secret: "s3cret" }, click("#toggle")],
};
