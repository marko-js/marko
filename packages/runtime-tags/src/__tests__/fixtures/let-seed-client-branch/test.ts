import type { TestConfig } from "../../main.test";

const click = (d: Document) => d.querySelector("button")!.click();

// The plain twin: a resumed page takes no new input, so its client render
// alone shows each step.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", w: "1" }, click, click],
};
