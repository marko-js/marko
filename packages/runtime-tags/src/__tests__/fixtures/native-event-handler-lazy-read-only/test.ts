import type { TestConfig } from "../../main.test";

const inc = (c: Element) => c.querySelector<HTMLButtonElement>(".inc")!.click();
const show = (c: Element) =>
  c.querySelector<HTMLButtonElement>(".show")!.click();

export const config: TestConfig = {
  steps: [{}, inc, inc, show],
};
