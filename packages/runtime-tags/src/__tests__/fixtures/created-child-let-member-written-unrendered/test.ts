import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a", n: 1 },
    { show: true, label: "b", n: 2 },
    click,
  ],
};
