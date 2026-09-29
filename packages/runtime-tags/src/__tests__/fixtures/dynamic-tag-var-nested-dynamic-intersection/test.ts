import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};

export const config: TestConfig = {
  steps: [
    {},
    click("button.inc"),
    click("button.toggle"),
    click("button.toggle"),
    click("button.inc"),
  ],
};
