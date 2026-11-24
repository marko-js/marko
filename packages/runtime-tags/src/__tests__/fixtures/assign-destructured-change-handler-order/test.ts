import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();

export const config: TestConfig = {
  steps: [
    {},
    click(".a"),
    click(".b"),
    click(".c"),
    click(".d"),
    click(".e"),
    click(".first"),
    click(".last"),
    click(".first-renamed"),
    click(".last-renamed"),
  ],
};
