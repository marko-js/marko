import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  embedded: true,
  skip_csr: true,
  steps: [
    {},
    click("button#toggle"),
    click("button#toggle"),
    click("button#toggle"),
    click("button#cleanup"),
  ],
};
