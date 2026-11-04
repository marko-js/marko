import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// A module function joined with another constant has no param group of its own
// but the one it is given, whose bits say the call passes it a constant.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, click, { label: "c" }],
};
