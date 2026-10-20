import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a", show: true }, { label: "b", show: true }, click, click, { label: "c", show: true }],
};
