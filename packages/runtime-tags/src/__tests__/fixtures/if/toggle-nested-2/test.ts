import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("#count"),
    click("#count"),
    click("#inner"),
    click("#inner"),
    click("#count"),
    click("#outer"),
    click("#outer"),
    click("#count"),
  ],
};
