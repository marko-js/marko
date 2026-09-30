import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    // reveal the body
    click("#toggle"),
    // interact with state inside the body
    click("#inc"),
    click("#inc"),
    // hide, then show again -- inner count must persist
    click("#toggle"),
    click("#toggle"),
  ],
};
