import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLElement>(selector)!.click();

export const config: TestConfig = {
  steps: [
    {},
    click(".gated"),
    click(".gated"),
    click("#raise"),
    click(".gated"),
    click(".returned"),
  ],
};
