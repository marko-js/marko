import type { TestConfig } from "../../main.test";

const pickB = (c: Element) => c.querySelectorAll("button")[1].click();

export const config: TestConfig = {
  steps: [{}, pickB],
};
