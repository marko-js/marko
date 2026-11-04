import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  (document.querySelector(selector) as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [
    {},
    click("button.reverse"),
    click("button.swap"),
    click("button.mixed"),
  ],
};
