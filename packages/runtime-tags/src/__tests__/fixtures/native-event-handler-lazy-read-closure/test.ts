import type { TestConfig } from "../../main.test";

const inc = (c: Element) => c.querySelectorAll("button")[3].click();
const pick2 = (c: Element) => c.querySelectorAll("button")[1].click();

export const config: TestConfig = {
  steps: [{}, inc, inc, pick2],
};
