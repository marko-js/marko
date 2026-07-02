import type { TestConfig } from "../../main.test";

const bump = (c: Element) =>
  c.querySelector<HTMLButtonElement>(".bump")!.click();
const snap = (c: Element) =>
  c.querySelector<HTMLButtonElement>(".snap")!.click();

export const config: TestConfig = {
  steps: [{}, bump, snap, bump, snap],
};
