import type { TestConfig } from "../../main.test";

const toggle = (c: Element) =>
  c.querySelector<HTMLButtonElement>(".toggle")!.click();
const bump = (c: Element) =>
  c.querySelector<HTMLButtonElement>(".bump")!.click();
const act = (c: Element) => c.querySelector<HTMLButtonElement>(".act")!.click();

export const config: TestConfig = {
  steps: [{}, bump, act, toggle, act, toggle, act],
};
