import type { TestConfig } from "../../main.test";

const set = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
};

export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, label: "a" }, set, { show: true, label: "b" }],
};
