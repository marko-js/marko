import type { TestConfig } from "../../main";

const click = (selector: string) => (document: Document) =>
  (document.querySelector(selector) as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [
    {},
    click("button.reorder"),
    click("button.front"),
    click("button.append"),
  ],
};
