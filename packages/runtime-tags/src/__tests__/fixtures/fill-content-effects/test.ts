import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

// The plain twin: a resumed page takes no new input, so its client render
// alone shows each step.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a", title: "x" }, click, click],
};
