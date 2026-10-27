import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// Two inputs read the same value beside a module function: the fill run pushes the
// function once into their shared signal.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, click, { label: "c" }],
};
