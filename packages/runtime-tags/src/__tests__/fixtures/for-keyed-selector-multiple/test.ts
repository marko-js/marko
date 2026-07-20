import type { TestConfig } from "../../main.test";

const click = (sel: string) => (document: Document) =>
  (document.querySelector(sel) as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, click("button.select"), click("button.hover")],
};
