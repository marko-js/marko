import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();

export const config: TestConfig = {
  steps: [
    {},
    click(".item"),
    click(".copy"),
    click(".whole"),
    click(".clear"),
    click(".item"),
    click(".shown"),
  ],
};
