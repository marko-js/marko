import type { TestConfig } from "../../main";

const bump = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".bump")!.click();
const show = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".show")!.click();

export const config: TestConfig = {
  steps: [{}, bump, show],
};
