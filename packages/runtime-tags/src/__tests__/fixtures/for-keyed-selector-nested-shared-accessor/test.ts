import type { TestConfig } from "../../main.test";

const clickIn = (name: string, n: number) => (document: Document) =>
  (document.querySelectorAll(`button.${name}`)[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [
    {},
    clickIn("select", 2),
    clickIn("hover", 0),
    clickIn("select", 1),
    clickIn("hover", 2),
  ],
};
