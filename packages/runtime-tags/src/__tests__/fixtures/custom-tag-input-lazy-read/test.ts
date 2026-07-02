import type { TestConfig } from "../../main.test";

const inc = (c: Element) => c.querySelector<HTMLButtonElement>(".inc")!.click();
const act = (c: Element) => c.querySelector<HTMLButtonElement>(".act")!.click();

export const config: TestConfig = {
  steps: [{}, inc, inc, act],
};
