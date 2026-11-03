import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, click, { label: "c" }],
};
