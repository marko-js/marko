import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, items: ["a"] },
    toggle,
    toggle,
    { show: false, items: ["a", "b"] },
    toggle,
    { show: true, items: [] },
  ],
};
