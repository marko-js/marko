import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, (el: Element) => el.querySelector("button")!.click()],
};
