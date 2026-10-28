import type { TestConfig } from "../../main.test";

const set = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
};

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    set,
    { show: true, label: "c" },
  ],
};
