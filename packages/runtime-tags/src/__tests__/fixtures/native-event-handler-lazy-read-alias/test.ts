import type { TestConfig } from "../../main.test";

const bump = (c: Element) =>
  c.querySelector<HTMLButtonElement>(".bump")!.click();
const show = (c: Element) =>
  c.querySelector<HTMLButtonElement>(".show")!.click();

export const config: TestConfig = {
  steps: [{}, bump, show],
};
