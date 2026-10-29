import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The plain twin: a resumed page takes no new input, so its client render
// alone shows each step.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, label: "a" }, click, click],
};
