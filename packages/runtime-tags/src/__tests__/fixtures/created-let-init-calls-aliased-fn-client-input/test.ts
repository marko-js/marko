import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "a", w: "2" },
    clickSet,
    { show: true, v: "a", w: "3" },
    { show: false, v: "b", w: "4" },
    clickSet,
    { show: true, v: "b", w: "5" },
  ],
};

function clickSet(document: Document) {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
}
