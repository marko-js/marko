import type { TestConfig } from "../../main";

const clickToggle = (n: number) => (document: Document) =>
  (document.querySelectorAll("button.toggle")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, clickToggle(0), clickToggle(1)],
};
