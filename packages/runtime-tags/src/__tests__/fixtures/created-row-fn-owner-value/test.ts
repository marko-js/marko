import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { n: 0, label: "a" },
    { n: 1, label: "b" },
    click,
    { n: 1, label: "c" },
  ],
};
