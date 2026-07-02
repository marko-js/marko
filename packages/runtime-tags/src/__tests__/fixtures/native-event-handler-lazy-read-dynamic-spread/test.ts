import type { TestConfig } from "../../main.test";

const toggle = (c: Element) =>
  c.querySelector<HTMLButtonElement>(".toggle")!.click();
const bump = (c: Element) =>
  c.querySelector<HTMLButtonElement>(".bump")!.click();
const a = (c: Element) => c.querySelector<HTMLButtonElement>(".a")!.click();
const b = (c: Element) => c.querySelector<HTMLButtonElement>(".b")!.click();

export const config: TestConfig = {
  steps: [{}, bump, a, b, toggle, a, b, toggle, bump, a, b],
};
