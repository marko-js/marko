import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click(".b3"), click(".b2")],
};
