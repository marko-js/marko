import type { TestConfig } from "../../main.test";

const toggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
const bump = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".bump")!.click();
const act = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".act")!.click();

export const config: TestConfig = {
  steps: [{}, bump, act, toggle, act, toggle, act],
};
