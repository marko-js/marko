import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created child's `<let>` member both rendered and read by a handler seeds
// once, in the value its signals derive, so the render sees it change.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", n: 1 },
    { show: true, label: "b", n: 2 },
    click,
  ],
};
