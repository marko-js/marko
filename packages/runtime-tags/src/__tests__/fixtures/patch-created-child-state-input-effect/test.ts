import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created child's effect reads its caller's input and its own state: the
// init's render queues it, so the input's entry only re-runs it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, x: "a" },
    { show: true, x: "b" },
    click,
    { show: true, x: "c" },
  ],
};
