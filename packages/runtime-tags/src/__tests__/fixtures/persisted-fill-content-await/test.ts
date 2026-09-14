import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  persisted: true,
  steps: [
    { first: "a1", second: "a2" },
    click,
    { first: "b1", second: "b2" },
    click,
  ],
};
