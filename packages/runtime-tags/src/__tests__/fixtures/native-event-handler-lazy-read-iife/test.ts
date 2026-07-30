import type { TestConfig } from "../../main";

const bump = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".bump")!.click();
const snap = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".snap")!.click();

export const config: TestConfig = {
  steps: [{}, bump, snap, bump, snap],
};
