import type { TestConfig } from "../../main.test";

const toggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
const bump = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".bump")!.click();
const a = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".a")!.click();
const b = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".b")!.click();

export const config: TestConfig = {
  steps: [{}, bump, a, b, toggle, a, b, toggle, bump, a, b],
};
