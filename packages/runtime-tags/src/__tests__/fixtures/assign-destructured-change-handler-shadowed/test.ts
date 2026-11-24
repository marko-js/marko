import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();

export const config: TestConfig = {
  steps: [
    {},
    click(".param"),
    click(".const"),
    click(".for"),
    click(".define"),
    click(".let"),
    click(".renamed-param"),
  ],
};
