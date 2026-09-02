import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server-owned dynamic tag with arguments and a tag variable.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { on: true, start: 1 },
    click,
    { on: true, start: 5 },
    { on: false, start: 5 },
    { on: true, start: 7 },
  ],
};
