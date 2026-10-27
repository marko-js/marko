import type { TestConfig } from "../../main.test";

// The plain twin: a resumed page takes no new input, so its client render
// alone shows each step.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, first: "a1", second: "a2" }, click, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
