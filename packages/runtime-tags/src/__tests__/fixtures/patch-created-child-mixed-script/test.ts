import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created child's script reading both its input and its state runs.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: "a1" },
    { show: true, a: "a2" },
    click,
    { show: true, a: "a3" },
  ],
};
